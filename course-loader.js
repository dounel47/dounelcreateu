// Función para cargar el contenido del curso
function loadCourseContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    
    console.log('Course ID:', courseId);
    console.log('Available courses:', Object.keys(coursesData));
    console.log('Course data:', coursesData[courseId]);

    if (!courseId || !coursesData[courseId]) {
        console.error('Curso encontrado:', courseId);
        document.getElementById('course-title').textContent = 'Curso encontrado';
        document.getElementById('course-description').textContent = ' el curso que buscas  está disponible.';
        return;
    }

    const course = coursesData[courseId];
    console.log('Cargando curso:', courseId, course);

    // Actualizar el título de la página
    document.title = `${course.title} - Dounel Createur`;

    // Actualizar el contenido del curso
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;
    document.getElementById('course-duration').innerHTML = `<i class="fas fa-clock"></i> Duración: ${course.duration}`;
    document.getElementById('course-level').innerHTML = `<i class="fas fa-signal"></i> Nivel: ${course.level}`;
    
    const courseImage = document.getElementById('course-image');
    courseImage.src = course.image;
    courseImage.alt = course.title;

    // Actualizar el precio
    const priceElement = document.getElementById('course-price');
    if (priceElement) {
        priceElement.setAttribute('data-price', course.price);
        priceElement.textContent = '$' + course.price;
    }

    // Cargar el curriculum
    const curriculumContainer = document.getElementById('course-curriculum');
    if (curriculumContainer && course.curriculum) {
        curriculumContainer.innerHTML = course.curriculum.map(module => `
            <div class="module">
                <div class="module-header">
                    <h3><i class="fas fa-folder"></i> ${module.title}</h3>
                </div>
                <ul class="lessons">
                    ${module.lessons.map(lesson => `
                        <li><i class="fas fa-play-circle"></i> ${lesson}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }
}

// Función para obtener el precio del curso
function getCoursePrice() {
    const priceElement = document.getElementById('course-price');
    return priceElement ? priceElement.getAttribute('data-price') : '200.00';
}

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando carga del curso...');
    loadCourseContent();
});
