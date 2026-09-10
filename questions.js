// Preguntas adicionales de cultura general
// Este archivo puede ser usado para expandir la base de datos de preguntas

const additionalQuestions = [
    // Historia
    {
        question: "¿En qué año cayó el Muro de Berlín?",
        answers: ["1987", "1989", "1991", "1993"],
        correct: 1,
        category: "Historia"
    },
    {
        question: "¿Cuál fue el imperio más grande de la historia?",
        answers: ["Imperio Romano", "Imperio Persa", "Imperio Británico", "Imperio Mongol"],
        correct: 2,
        category: "Historia"
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        answers: ["1937", "1938", "1939", "1940"],
        correct: 2,
        category: "Historia"
    },

    // Geografía
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correct: 1,
        category: "Geografía"
    },
    {
        question: "¿Cuántos países hay en la Unión Europea?",
        answers: ["25", "27", "29", "31"],
        correct: 1,
        category: "Geografía"
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        answers: ["K2", "Monte Everest", "Kangchenjunga", "Lhotse"],
        correct: 1,
        category: "Geografía"
    },

    // Ciencia
    {
        question: "¿Cuántos huesos tiene un adulto humano?",
        answers: ["186", "206", "226", "246"],
        correct: 1,
        category: "Ciencia"
    },
    {
        question: "¿Cuál es el planeta más cercano al Sol?",
        answers: ["Venus", "Mercurio", "Marte", "Tierra"],
        correct: 1,
        category: "Ciencia"
    },
    {
        question: "¿Cuál es el elemento más abundante en el universo?",
        answers: ["Oxígeno", "Hidrógeno", "Helio", "Carbono"],
        correct: 1,
        category: "Ciencia"
    },

    // Literatura
    {
        question: "¿Quién escribió Don Quijote?",
        answers: ["Lope de Vega", "Miguel de Cervantes", "García Lorca", "Jorge Luis Borges"],
        correct: 1,
        category: "Literatura"
    },
    {
        question: "¿Quién escribió 1984?",
        answers: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Isaac Asimov"],
        correct: 2,
        category: "Literatura"
    },
    {
        question: "¿Cuántas novelas principales escribió Agatha Christie?",
        answers: ["66", "73", "85", "92"],
        correct: 2,
        category: "Literatura"
    },

    // Arte
    {
        question: "¿En qué museo se encuentra la Mona Lisa?",
        answers: ["Galería de los Uffizi", "Museo del Prado", "Louvre", "Vaticano"],
        correct: 2,
        category: "Arte"
    },
    {
        question: "¿Cuál fue el movimiento artístico de Pablo Picasso?",
        answers: ["Surrealismo", "Cubismo", "Impresionismo", "Expresionismo"],
        correct: 1,
        category: "Arte"
    },
    {
        question: "¿Quién esculpió el David?",
        answers: ["Gian Lorenzo Bernini", "Michelangelo", "Donatello", "Leonardo da Vinci"],
        correct: 1,
        category: "Arte"
    },

    // Música
    {
        question: "¿Cuántas sinfonías compuso Ludwig van Beethoven?",
        answers: ["7", "8", "9", "10"],
        correct: 2,
        category: "Música"
    },
    {
        question: "¿De qué país es originaria la música clásica del Tango?",
        answers: ["Brasil", "Chile", "Argentina", "Uruguay"],
        correct: 2,
        category: "Música"
    },
    {
        question: "¿Cuál es el instrumento musical más antiguo del mundo?",
        answers: ["Flauta", "Tambor", "Lira", "Arpa"],
        correct: 0,
        category: "Música"
    },

    // Cine
    {
        question: "¿En qué año se estrenó la primera película de Harry Potter?",
        answers: ["2000", "2001", "2002", "2003"],
        correct: 1,
        category: "Cine"
    },
    {
        question: "¿Cuál es la película más taquillera de todos los tiempos?",
        answers: ["Titanic", "Avatar", "Avatar: El Camino del Agua", "Avengers: Endgame"],
        correct: 2,
        category: "Cine"
    },
    {
        question: "¿Cuántos Oscars ganó Titanic?",
        answers: ["11", "13", "15", "17"],
        correct: 1,
        category: "Cine"
    },

    // Deporte
    {
        question: "¿Cuántas veces ha ganado Messi la Copa del Mundo?",
        answers: ["1", "2", "3", "0"],
        correct: 0,
        category: "Deporte"
    },
    {
        question: "¿En qué año se jugó la primera Copa del Mundo de Fútbol?",
        answers: ["1930", "1932", "1934", "1936"],
        correct: 0,
        category: "Deporte"
    },
    {
        question: "¿Cuánto tiempo debe durar un partido de fútbol?",
        answers: ["80 minutos", "90 minutos", "100 minutos", "120 minutos"],
        correct: 1,
        category: "Deporte"
    },

    // Tecnología
    {
        question: "¿En qué año se inventó internet?",
        answers: ["1965", "1969", "1973", "1977"],
        correct: 1,
        category: "Tecnología"
    },
    {
        question: "¿Quién inventó el teléfono?",
        answers: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
        correct: 1,
        category: "Tecnología"
    },
    {
        question: "¿En qué año se lanzó el primer iPhone?",
        answers: ["2006", "2007", "2008", "2009"],
        correct: 1,
        category: "Tecnología"
    },

    // Naturaleza
    {
        question: "¿Cuál es el animal terrestre más rápido?",
        answers: ["Caballo", "Gacela", "Guepardo", "Avestruz"],
        correct: 2,
        category: "Naturaleza"
    },
    {
        question: "¿Cuál es el animal más grande del mundo?",
        answers: ["Elefante Africano", "Jirafa", "Ballena Azul", "Rinoceronte"],
        correct: 2,
        category: "Naturaleza"
    },
    {
        question: "¿Cuántas patas tiene una araña?",
        answers: ["6", "8", "10", "12"],
        correct: 1,
        category: "Naturaleza"
    },

    // Mitología
    {
        question: "¿Cuál es el rey de los dioses en la mitología griega?",
        answers: ["Poseidón", "Zeus", "Hades", "Apolo"],
        correct: 1,
        category: "Mitología"
    },
    {
        question: "¿Cuántos trabajos tenía que realizar Heracles?",
        answers: ["10", "12", "14", "16"],
        correct: 1,
        category: "Mitología"
    },

    // Política
    {
        question: "¿Cuántos continentes reconoce las Naciones Unidas?",
        answers: ["5", "6", "7", "8"],
        correct: 1,
        category: "Política"
    },
    {
        question: "¿Cuál es la ciudad más poblada del mundo?",
        answers: ["Nueva York", "Tokio", "Nueva Delhi", "Shangái"],
        correct: 2,
        category: "Política"
    }
];

// Función para obtener preguntas aleatorias
function getRandomQuestions(count = 10) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Función para obtener preguntas por categoría
function getQuestionsByCategory(category, count = 10) {
    const filtered = additionalQuestions.filter(q => q.category === category);
    return filtered.slice(0, count);
}

// Función para mezclar preguntas de múltiples categorías
function getRandomMixedQuestions(count = 10) {
    const categories = ['Historia', 'Geografía', 'Ciencia', 'Literatura', 'Arte'];
    const mixed = [];
    
    categories.forEach(category => {
        const categoryQuestions = getQuestionsByCategory(category, count / categories.length);
        mixed.push(...categoryQuestions);
    });
    
    return mixed.slice(0, count).sort(() => 0.5 - Math.random());
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        additionalQuestions,
        getRandomQuestions,
        getQuestionsByCategory,
        getRandomMixedQuestions
    };
}
