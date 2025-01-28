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
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format',
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
