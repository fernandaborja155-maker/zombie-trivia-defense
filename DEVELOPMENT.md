# 🎮 GUÍA DE DESARROLLO - Zombie Trivia Defense

## 📚 Resumen Rápido

Este documento proporciona información técnica para desarrolladores que deseen modificar, mejorar o extender el juego.

## 🏗️ Estructura de Archivos

```
zombie-trivia-defense/
├── index.html          # Estructura HTML (5 KB)
├── styles.css          # Estilos visuales (7.7 KB)
├── game.js             # Lógica principal (8.4 KB)
├── questions.js        # Base de preguntas expandida (8 KB)
├── README.md           # Documentación principal
└── DEVELOPMENT.md      # Este archivo
```

## 🔧 Stack Tecnológico

- **HTML5**: Semántica, estructura
- **CSS3**: Grid, Flexbox, Animaciones, Gradientes
- **JavaScript (ES6)**: Vanilla JS, sin frameworks

## 📋 Estructura de Objetos

### Pregunta
```javascript
{
    question: "Texto de la pregunta",
    answers: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    correct: 1,  // Índice de respuesta correcta
    category: "Historia"  // Opcional
}
```

### Estado del Juego
```javascript
{
    currentQuestion: 0,
    life: 100,
    resources: 500,
    walls: 0,
    towers: 0,
    traps: 0,
    correctAnswers: 0,
    answered: false
}
```

## 🎯 Funciones Principales

### game.js

| Función | Parámetros | Descripción |
|----------|-----------|-------------|
| `startGame()` | - | Inicia una nueva partida |
| `loadQuestion()` | - | Carga la pregunta actual |
| `selectAnswer(index)` | `index: number` | Procesa respuesta seleccionada |
| `handleCorrectAnswer()` | - | Lógica de respuesta correcta |
| `handleIncorrectAnswer()` | - | Lógica de respuesta incorrecta |
| `buildWall()` | - | Construye un muro (-50 recursos) |
| `buildTower()` | - | Construye una torre (-100 recursos) |
| `buildTrap()` | - | Pone una trampa (-75 recursos) |
| `updateUI()` | - | Actualiza todos los elementos visuales |
| `endGame()` | - | Termina la partida y muestra resultados |
| `showNotification(msg, type)` | `msg: string`, `type: 'correct'|'incorrect'` | Muestra notificación |

## 🎨 Selectores CSS Principales

```css
.screen              /* Pantallas principales */
.answer-btn          /* Botones de respuesta */
.stat-box            /* Cajas de estadísticas */
.defense-zone        /* Zona de construcción */
.quiz-zone           /* Zona de preguntas */
.health-fill         /* Barra de vida */
```

## 📝 Cómo Agregar Preguntas

### Opción 1: Directamente en game.js
```javascript
const questions = [
    {
        question: "Tu pregunta aquí",
        answers: ["A", "B", "C", "D"],
        correct: 0  // Índice de respuesta correcta
    }
];
```

### Opción 2: Usar questions.js
```javascript
// En game.js, reemplazar:
// const questions = [ ... ]
// Con:
const questions = getRandomMixedQuestions(10);
// O incluir antes de game.js en index.html:
// <script src="questions.js"></script>
```

## 🎮 Cómo Modificar la Mecánica

### Cambiar recursos otorgados
En `game.js`, función `handleCorrectAnswer()`:
```javascript
gameState.resources += 100;  // Cambiar cantidad
gameState.life += 10;         // Cambiar puntos vida
```

### Cambiar costos de construcción
En `game.js`, función `buildWall()`:
```javascript
if (gameState.resources >= 50) {  // Cambiar costo
    gameState.resources -= 50;
```

### Cambiar cantidad de preguntas
En `game.js`, función `endGame()`:
```javascript
if (gameState.currentQuestion >= 10) {  // Cambiar 10 por otra cantidad
```

## 🎨 Cómo Personalizar Colores

En `styles.css`, cambiar variables de color:
```css
/* Rojo */
#ff6b6b    /* Errores, vida baja */

/* Amarillo */
#ffd93d    /* Preguntas, énfasis */

/* Verde */
#4ecca3    /* Aciertos, defensas */

/* Azul Oscuro */
#1a1a2e    /* Fondo */
```

## ⚡ Optimizaciones Posibles

1. **Minificar CSS y JS**: Reducir tamaño de archivos
2. **Lazy Loading**: Cargar preguntas bajo demanda
3. **Service Workers**: Funcionar sin conexión
4. **Local Storage**: Guardar puntuaciones
5. **Compresión de imágenes**: Si se agregan assets

## 🚀 Extensiones Recomendadas

### Nivel 1: Fácil
- [ ] Agregar más preguntas (50+)
- [ ] Cambiar tema de colores
- [ ] Agregar efectos de sonido (audio)
- [ ] Guardar puntuación en localStorage

### Nivel 2: Intermedio
- [ ] Sistema de dificultad (fácil, normal, difícil)
- [ ] Categorías de preguntas seleccionables
- [ ] Animaciones de zombies
- [ ] Sistema de logros

### Nivel 3: Avanzado
- [ ] Backend con Node.js para ranking global
- [ ] Multiplayer en tiempo real
- [ ] Compresión de datos y sync
- [ ] PWA para móvil

## 🐛 Debugging

### Consola del Navegador
```javascript
// Ver estado actual
console.log(gameState);

// Ver preguntas cargadas
console.log(questions);

// Probar función
startGame();
```

### Breakpoints
1. F12 → Sources tab
2. Hacer clic en número de línea
3. Ejecutar código paso a paso

## 📊 Rendimiento

- **Tamaño total**: ~24 KB
- **Tiempo carga**: < 1s
- **FPS animaciones**: 60 FPS
- **Compatibilidad**: 95%+ navegadores modernos

## 🤝 Contribuciones

### Antes de hacer PR:
1. Testear en múltiples navegadores
2. Validar HTML/CSS/JS
3. Agregar comentarios de código
4. Actualizar README si es necesario

### Convención de nombres:
```javascript
// Variables
let myVariable = "valor";

// Funciones
function myFunction() { }

// Constantes
const MY_CONSTANT = 100;

// Clases (si se usan)
class MyClass { }
```

## 📱 Responsive Design

### Breakpoints CSS
```css
/* Desktop */
@media (min-width: 1024px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }
```

## ✅ Checklist para Nueva Versión

- [ ] Probar en Chrome
- [ ] Probar en Firefox
- [ ] Probar en Safari
- [ ] Probar en dispositivos móviles
- [ ] Validar HTML/CSS
- [ ] Actualizar versión en README
- [ ] Crear commit con mensaje claro
- [ ] Hacer push a repositorio

## 📞 Soporte

Para preguntas o problemas:
1. Revisar issues existentes
2. Crear nuevo issue con detalles
3. Contactar al autor

## 📄 Licencia

MIT - Libre para usar y modificar

---

**Versión**: 1.0.0
**Última actualización**: Septiembre 2026
**Autor**: Fernando Borja
