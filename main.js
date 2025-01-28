// Sample course data
const featuredCourses = [
    {
        title: 'Desarrollo Web Full Stack',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format',
        price: '200.00',
        description: 'Aprende desarrollo web desde cero hasta nivel profesional'
    },
    {
        title: 'Marketing Digital',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format',
        price: '200.00',
        description: 'Domina las estrategias de marketing digital moderno'
    },
    {
        title: 'Diseño UX/UI',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format',
        price: '200.00',
        description: 'Crea interfaces atractivas y funcionales'
    },
    {
        title: 'Fotografía Profesional',
        image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600&auto=format',
        price: '200.00',
        description: 'Aprende fotografía desde los conceptos básicos hasta técnicas avanzadas'
    },
    {
        title: 'Inglés para Negocios',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format',
        price: '200.00',
        description: 'Mejora tu inglés para el ambiente profesional y de negocios'
    },
    {
        title: 'Desarrollo de Apps Móviles',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format',
        price: '200.00',
        description: 'Crea aplicaciones móviles para iOS y Android'
    },
    {
        title: 'Inteligencia Artificial y Machine Learning',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&auto=format',
        price: '200.00',
        description: 'Domina las tecnologías del futuro con IA y ML'
    },
    {
        title: 'Diseño Gráfico Digital',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format',
        price: '200.00',
        description: 'Aprende a crear diseños profesionales con herramientas digitales'
    },
    {
        title: 'Gestión de Proyectos',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format',
        price: '200.00',
        description: 'Metodologías ágiles y tradicionales para gestión de proyectos'
    }
];

// Sample testimonial data
const testimonials = [
    {
        name: 'María García',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format',
        role: 'Estudiante de Marketing Digital',
        text: 'Los cursos son excelentes y el contenido es muy completo. La plataforma es intuitiva y los instructores son muy profesionales. ¡Altamente recomendado!'
    },
    {
        name: 'Juan Pérez',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format',
        role: 'Desarrollador Web Junior',
        text: 'Gracias a los cursos de desarrollo web, conseguí mi primer trabajo como programador. Los proyectos prácticos fueron fundamentales para mi aprendizaje.'
    },
    {
        name: 'Ana Martínez',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format',
        role: 'Diseñadora UX/UI',
        text: 'He mejorado significativamente mis habilidades de diseño. Los cursos están muy bien estructurados y el feedback de los instructores es muy valioso.'
    },
    {
        name: 'Carlos Rodríguez',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format',
        role: 'Estudiante de IA',
        text: 'La calidad del contenido en inteligencia artificial es excepcional. Los ejercicios prácticos y casos de estudio son muy relevantes.'
    },
    {
        name: 'Laura Sánchez',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format',
        role: 'Fotógrafa Profesional',
        text: 'El curso de fotografía superó mis expectativas. Aprendí técnicas que ahora uso diariamente en mi trabajo profesional.'
    },
    {
        name: 'Miguel Torres',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&auto=format',
        role: 'Emprendedor Digital',
        text: 'Los cursos de gestión de proyectos y marketing digital transformaron mi negocio. Recomiendo esta plataforma a todos los emprendedores.'
    }
];

// Definición de los cursos
const coursesData = {
    'web-development': {
        title: 'Desarrollo Web Full Stack',
        description: 'Aprende desarrollo web desde cero hasta nivel profesional. Este curso completo te llevará desde los fundamentos hasta las tecnologías más avanzadas utilizadas en la industria actual.',
        price: '200.00',
        duration: '40 horas',
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format',
        curriculum: [
            {
                title: 'Módulo 1: Fundamentos de HTML y CSS',
                lessons: [
                    'Introducción a HTML5',
                    'Estructura básica de una página web',
                    'CSS y diseño responsive'
                ]
            },
            {
                title: 'Módulo 2: JavaScript Moderno',
                lessons: [
                    'Fundamentos de JavaScript',
                    'ES6+ y características modernas',
                    'DOM y eventos'
                ]
            }
        ]
    },
    'digital-marketing': {
        title: 'Marketing Digital',
        description: 'Domina las estrategias de marketing digital moderno. Aprende SEO, redes sociales, email marketing y más.',
        price: '200.00',
        duration: '35 horas',
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format',
        curriculum: [
            {
                title: 'Módulo 1: Fundamentos de Marketing Digital',
                lessons: [
                    'Introducción al Marketing Digital',
                    'Análisis de mercado',
                    'Estrategias de contenido'
                ]
            },
            {
                title: 'Módulo 2: SEO y SEM',
                lessons: [
                    'Optimización para motores de búsqueda',
                    'Google Ads',
                    'Análisis de datos'
                ]
            }
        ]
    },
    'python-data-science': {
        title: 'Python para Data Science',
        description: 'Aprende análisis de datos y machine learning con Python. Desde los fundamentos hasta proyectos avanzados.',
        price: '200.00',
        duration: '45 horas',
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format',
        curriculum: [
            {
                title: 'Módulo 1: Fundamentos de Python',
                lessons: [
                    'Introducción a Python',
                    'Estructuras de datos',
                    'Programación orientada a objetos'
                ]
            },
            {
                title: 'Módulo 2: Data Science',
                lessons: [
                    'Numpy y Pandas',
                    'Visualización de datos',
                    'Machine Learning básico'
                ]
            }
        ]
    },
    'javascript-moderno': {
        title: 'JavaScript Moderno',
        description: 'Domina ES6+ y los frameworks más populares. Aprende React, Vue, y Node.js.',
        price: '200.00',
        duration: '38 horas',
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format',
        curriculum: [
            {
                title: 'Módulo 1: JavaScript Moderno',
                lessons: [
                    'ES6+ características',
                    'Async/Await',
                    'Módulos y bundlers'
                ]
            },
            {
                title: 'Módulo 2: Frameworks',
                lessons: [
                    'React fundamentals',
                    'Estado y props',
                    'Hooks y context'
                ]
            }
        ]
    }
};

// Function to create course cards
function createCourseCard(course) {
    return `
        <div class="course-card" data-category="${course.category}">
            <img src="${course.image}" alt="${course.title}">
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-footer">
                    <span class="price">$${course.price}</span>
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    `;
}

// Function to create testimonial cards
function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                <div class="testimonial-info">
                    <h4 class="testimonial-name">${testimonial.name}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
        </div>
    `;
}

// Function to initialize the page
function initializePage() {
    // Populate featured courses
    const coursesContainer = document.querySelector('.courses-carousel');
    if (coursesContainer) {
        coursesContainer.innerHTML = featuredCourses.map(createCourseCard).join('');
    }

    // Populate testimonials
    const testimonialsContainer = document.querySelector('.testimonials-grid');
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = testimonials.map(createTestimonialCard).join('');
    }

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const coursesLinks = document.querySelectorAll('.courses-link');
    const blogLinks = document.querySelectorAll('.blog-link');
    const contactLinks = document.querySelectorAll('.contact-link');
    
    // Initialize courses functionality
    coursesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSection('courses-section');
        });
    });

    // Initialize blog functionality
    blogLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog.html';
        });
    });

    // Initialize contact functionality
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Add contact form functionality here
        });
    });
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    console.log('Inicializando menú móvil');
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileMenuBtn || !navMenu) {
        console.error('No se encontraron elementos del menú móvil');
        return;
    }

    // Manejar botón de menú móvil
    mobileMenuBtn.addEventListener('click', function(e) {
        console.log('Botón de menú móvil clickeado');
        e.stopPropagation();
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Manejar submenús
    const submenuParents = document.querySelectorAll('.nav-links > li');
    submenuParents.forEach(parent => {
        const link = parent.querySelector('a.has-submenu');
        const submenu = parent.querySelector('.submenu');

        if (link && submenu) {
            link.addEventListener('click', function(e) {
                console.log('Enlace de submenú clickeado');
                e.preventDefault();
                e.stopPropagation();

                // Solo actuar en móvil
                if (window.innerWidth <= 768) {
                    // Cerrar otros submenús
                    submenuParents.forEach(otherParent => {
                        if (otherParent !== parent) {
                            otherParent.classList.remove('submenu-open');
                            const otherSubmenu = otherParent.querySelector('.submenu');
                            if (otherSubmenu) {
                                otherSubmenu.style.display = 'none';
                            }
                        }
                    });

                    // Toggle submenú actual
                    parent.classList.toggle('submenu-open');
                    submenu.style.display = parent.classList.contains('submenu-open') ? 'block' : 'none';
                }
            });
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            console.log('Cerrando menú por clic fuera');
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            
            // Cerrar todos los submenús
            submenuParents.forEach(parent => {
                parent.classList.remove('submenu-open');
                const submenu = parent.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = 'none';
                }
            });
        }
    });

    // Cerrar menú al seleccionar un enlace
    const allLinks = navMenu.querySelectorAll('a');
    allLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Enlace seleccionado, cerrando menú');
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            
            // Cerrar todos los submenús
            submenuParents.forEach(parent => {
                parent.classList.remove('submenu-open');
                const submenu = parent.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = 'none';
                }
            });
        });
    });

    console.log('Menú móvil inicializado correctamente');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeMobileMenu);

// Blog functionality
function initializeBlog() {
    const blogLinks = document.querySelectorAll('.blog-link');
    
    blogLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog.html';
        });
    });

    // Initialize blog category buttons if we're on the blog page
    const categoryBtns = document.querySelectorAll('.category-btn');
    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Here you can add filter functionality
            });
        });
    }

    // Initialize pagination if we're on the blog page
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    if (paginationBtns.length > 0) {
        paginationBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                paginationBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Here you can add pagination functionality
            });
        });
    }

    // Initialize newsletter form if it exists
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            // Here you can add newsletter subscription functionality
            alert('¡Gracias por suscribirte! Te mantendremos informado.');
            newsletterForm.reset();
        });
    }
}

// Courses functionality
function initializeCourses() {
    const coursesLinks = document.querySelectorAll('.courses-link');
    const courseButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    // Handle main navigation course links
    coursesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const currentPath = window.location.pathname.toLowerCase();
            
            // If we're not on curso.html, navigate to it
            if (!currentPath.endsWith('curso.html')) {
                window.location.href = 'curso.html';
            }
        });
    });

    // Handle individual course buttons
    courseButtons.forEach(button => {
        if (button.closest('.course-card') || button.closest('.featured-card')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'curso.html';
            });
        }
    });

    // Handle "Comprar Ahora" buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent.includes('Comprar Ahora')) {
                window.location.href = 'cursos.html';
            }
        });
    });
}

// Initialize course filters
const filterSelects = document.querySelectorAll('.filter-select');
filterSelects.forEach(select => {
    select.addEventListener('change', () => {
        // Add filter functionality here when needed
        console.log('Filter changed:', select.value);
    });
});

// Course page tabs functionality
function initializeCoursePage() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length === 0) return; // Not on course page

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Update course card links to point to course.html
    const courseLinks = document.querySelectorAll('.course-card .btn');
    courseLinks.forEach(link => {
        link.href = 'curso.html';
    });
}

// Home button functionality
function initializeHomeButton() {
    const homeLinks = document.querySelectorAll('.nav-links a[href="#"]');
    const logo = document.querySelector('.logo');

    // Function to handle navigation to home
    const goToHome = (e) => {
        e.preventDefault();
        const currentPath = window.location.pathname.toLowerCase();
        
        // If we're not on index.html, navigate to it
        if (!currentPath.endsWith('index.html') && currentPath !== '/' && currentPath !== '') {
            window.location.href = 'index.html';
            return;
        }

        // If we're already on index.html, scroll to top and show all main sections
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Show all main sections and hide specific sections
        const mainSections = document.querySelectorAll('section:not(.header):not(.footer)');
        const coursesSection = document.getElementById('courses-section');
        
        mainSections.forEach(section => {
            section.classList.remove('hidden');
        });

        // Hide courses section if it exists
        if (coursesSection) {
            coursesSection.classList.add('hidden');
        }

        // Update active state in navigation
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => link.classList.remove('active'));
        homeLinks.forEach(link => link.classList.add('active'));

        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Add click event to home links
    homeLinks.forEach(link => {
        link.addEventListener('click', goToHome);
    });

    // Add click event to logo
    if (logo) {
        logo.addEventListener('click', goToHome);
    }
}

// Contact Form Handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Por favor, complete todos los campos');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido');
        return false;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
    // Clear form
    document.getElementById('contactForm').reset();
    
    return false;
}

// Update contact link functionality
function initializeContactForm() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const currentPath = window.location.pathname.toLowerCase();
            
            // If we're not on contacto.html, navigate to it
            if (!currentPath.endsWith('contacto.html')) {
                window.location.href = 'contacto.html';
            }
        });
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
}

// Course price handling
function initializeCoursePricing() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    
    // Define course prices
    const coursePrices = {
        'web-development': '200.00',
        'digital-marketing': '200.00',
        'python-data-science': '200.00',
        'javascript-moderno': '200.00',
        'ux-ui-design': '200.00'
    };

    // Update price if course ID is provided
    if (courseId && coursePrices[courseId]) {
        const priceElement = document.getElementById('course-price');
        if (priceElement) {
            priceElement.textContent = '$' + coursePrices[courseId];
            priceElement.setAttribute('data-price', coursePrices[courseId]);
        }
    }
}

// Función para cargar el contenido del curso
function loadCourseContent() {
    console.log('Iniciando carga de contenido de curso');
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('curso') || 'web'; // Default to web course
    console.log('ID de curso detectado:', courseId);

    const course = coursesData[courseId];
    if (!course) {
        console.error('Curso no encontrado:', courseId);
        return;
    }

    // Función de validación para establecer contenido de texto
    function safeSetTextContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        } else {
            console.warn(`Elemento no encontrado: ${elementId}`);
        }
    }

    // Función de validación para establecer atributos de imagen
    function safeSetImageSrc(elementId, src) {
        const element = document.getElementById(elementId);
        if (element) {
            element.src = src;
            element.alt = course.title;
        } else {
            console.warn(`Elemento de imagen no encontrado: ${elementId}`);
        }
    }

    // Establecer contenidos con validación
    safeSetTextContent('course-title', course.title);
    safeSetTextContent('course-description', course.description);
    safeSetTextContent('course-duration', `Duración: ${course.duration}`);
    safeSetTextContent('course-level', `Nivel: ${course.level}`);
    safeSetTextContent('course-price', `$${course.price.toFixed(2)}`);

    // Establecer imagen del curso
    safeSetImageSrc('course-image', course.image);

    // Cargar curriculum
    const curriculumContainer = document.getElementById('course-curriculum');
    if (curriculumContainer) {
        curriculumContainer.innerHTML = ''; // Limpiar contenido previo
        course.curriculum.forEach((item, index) => {
            const curriculumItem = document.createElement('div');
            curriculumItem.classList.add('curriculum-item');
            curriculumItem.innerHTML = `
                <span class="curriculum-number">${index + 1}</span>
                <span class="curriculum-text">${item}</span>
            `;
            curriculumContainer.appendChild(curriculumItem);
        });
    } else {
        console.warn('Contenedor de currículum no encontrado');
    }

    console.log('Contenido de curso cargado exitosamente');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    initializeMobileMenu();
    initializeBlog();
    initializeCourses();
    initializeHomeButton();
    loadCourseContent();
});
