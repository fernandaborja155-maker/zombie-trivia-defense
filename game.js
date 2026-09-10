// Base de datos de preguntas
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: ["Londres", "París", "Berlín", "Madrid"],
        correct: 1
    },
    {
        question: "¿En qué año llegó el hombre a la luna?",
        answers: ["1965", "1967", "1969", "1971"],
        correct: 2
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Saturno", "Marte", "Júpiter", "Venus"],
        correct: 2
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        answers: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Donatello"],
        correct: 1
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        answers: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        correct: 2
    },
    {
        question: "¿En qué país se encuentra la Estatua de la Libertad?",
        answers: ["Francia", "Reino Unido", "Estados Unidos", "Canadá"],
        correct: 2
    },
    {
        question: "¿Cuántos continentes hay en la Tierra?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "¿Cuál es la moneda de Japón?",
        answers: ["Won", "Yuan", "Yen", "Rupia"],
        correct: 2
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correct: 1
    },
    {
        question: "¿Cuál es el elemento químico con símbolo Au?",
        answers: ["Plata", "Cobre", "Oro", "Aluminio"],
        correct: 2
    }
];

// Variables del juego
let gameState = {
    currentQuestion: 0,
    life: 100,
    resources: 500,
    walls: 0,
    towers: 0,
    traps: 0,
    correctAnswers: 0,
    answered: false
};

// Iniciar juego
function startGame() {
    gameState = {
        currentQuestion: 0,
        life: 100,
        resources: 500,
        walls: 0,
        towers: 0,
        traps: 0,
        correctAnswers: 0,
        answered: false
    };
    
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    
    loadQuestion();
}

// Cargar pregunta
function loadQuestion() {
    if (gameState.currentQuestion >= questions.length) {
        endGame();
        return;
    }

    gameState.answered = false;
    const question = questions[gameState.currentQuestion];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionNumber').textContent = 
        `${gameState.currentQuestion + 1}/${questions.length}`;
    
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });

    updateUI();
}

// Seleccionar respuesta
function selectAnswer(index) {
    if (gameState.answered) return;
    
    gameState.answered = true;
    const question = questions[gameState.currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === index && index !== question.correct) {
            btn.classList.add('incorrect');
        }
    });

    if (index === question.correct) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }

    setTimeout(() => {
        gameState.currentQuestion++;
        loadQuestion();
    }, 2000);
}

// Respuesta correcta
function handleCorrectAnswer() {
    gameState.correctAnswers++;
    gameState.life = Math.min(gameState.life + 10, 100);
    gameState.resources += 100;
    
    showNotification('✅ ¡CORRECTO! +100 recursos, +10 vida', 'correct');
}

// Respuesta incorrecta
function handleIncorrectAnswer() {
    gameState.life -= 20;
    gameState.resources = Math.max(gameState.resources - 50, 0);
    
    showNotification('❌ INCORRECTO! -50 recursos, -20 vida', 'incorrect');
    
    if (gameState.life <= 0) {
        setTimeout(() => {
            endGame();
        }, 2000);
    }
}

// Notificación
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'correct' ? '#4ecca3' : '#ff6b6b'};
        color: white;
        border-radius: 8px;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.5s ease-in;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Construir muro
function buildWall() {
    if (gameState.resources >= 50) {
        gameState.resources -= 50;
        gameState.walls++;
        updateUI();
        showNotification('🛡️ ¡Muro construido!', 'correct');
    } else {
        showNotification('❌ Recursos insuficientes', 'incorrect');
    }
}

// Construir torre
function buildTower() {
    if (gameState.resources >= 100) {
        gameState.resources -= 100;
        gameState.towers++;
        updateUI();
        showNotification('🏹 ¡Torre construida!', 'correct');
    } else {
        showNotification('❌ Recursos insuficientes', 'incorrect');
    }
}

// Poner trampa
function buildTrap() {
    if (gameState.resources >= 75) {
        gameState.resources -= 75;
        gameState.traps++;
        updateUI();
        showNotification('⚡ ¡Trampa instalada!', 'correct');
    } else {
        showNotification('❌ Recursos insuficientes', 'incorrect');
    }
}

// Actualizar UI
function updateUI() {
    // Actualizar vida
    const life = gameState.life;
    document.getElementById('lifePoints').textContent = life;
    document.getElementById('healthFill').style.width = life + '%';
    
    // Cambiar color de la barra de vida según el nivel
    const healthFill = document.getElementById('healthFill');
    if (life > 60) {
        healthFill.style.background = 'linear-gradient(90deg, #4ecca3 0%, #45b393 100%)';
    } else if (life > 30) {
        healthFill.style.background = 'linear-gradient(90deg, #ffd93d 0%, #ffc93d 100%)';
    } else {
        healthFill.style.background = 'linear-gradient(90deg, #ff6b6b 0%, #ff4757 100%)';
    }

    // Actualizar recursos
    document.getElementById('resources').textContent = gameState.resources;

    // Actualizar defensas
    document.getElementById('wallCount').textContent = gameState.walls;
    document.getElementById('towerCount').textContent = gameState.towers;
    document.getElementById('trapCount').textContent = gameState.traps;

    // Deshabilitar botones si no hay suficientes recursos
    document.querySelector('.btn-build').disabled = gameState.resources < 50;
    document.querySelectorAll('.btn-build')[1].disabled = gameState.resources < 100;
    document.querySelectorAll('.btn-build')[2].disabled = gameState.resources < 75;
}

// Terminar juego
function endGame() {
    const totalDefenses = gameState.walls + gameState.towers + gameState.traps;
    
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('gameOverScreen').classList.add('active');
    
    document.getElementById('finalLife').textContent = gameState.life;
    document.getElementById('finalResources').textContent = gameState.resources;
    document.getElementById('finalCorrect').textContent = gameState.correctAnswers;
    document.getElementById('finalDefenses').textContent = totalDefenses;

    const gameOverTitle = document.getElementById('gameOverTitle');
    if (gameState.life > 0) {
        gameOverTitle.textContent = '🎉 ¡GANASTE!';
        gameOverTitle.style.color = '#4ecca3';
    } else {
        gameOverTitle.textContent = '☠️ GAME OVER';
        gameOverTitle.style.color = '#ff6b6b';
    }
}

// Inicializar UI al cargar
window.onload = () => {
    updateUI();
};
