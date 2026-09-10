# 🧟 ZOMBIE TRIVIA DEFENSE 🧟

Un juego interactivo de cultura general donde debes responder preguntas correctamente para construir defensas contra zombies y mantener tu vida.

## 📋 Descripción del Juego

**Zombie Trivia Defense** es un juego educativo y entretenido que combina:
- 🎯 **Preguntas de Cultura General**: 10 preguntas sobre historia, geografía, ciencia y más
- 🏗️ **Sistema de Recursos**: Gana recursos respondiendo correctamente
- 🛡️ **Sistema de Defensas**: Construye muros, torres y trampas con tus recursos
- ❤️ **Sistema de Vida**: Mantén tu vida por encima de 0 para no perder

## 🎮 Mecánica de Juego

### Ganancia de Puntos
- **Respuesta Correcta**: +100 recursos 🏗️ | +10 vida ❤️
- **Respuesta Incorrecta**: -50 recursos 🏗️ | -20 vida ❤️

### Sistema de Construcción

| Defensa | Costo | Tipo |
|---------|-------|------|
| 🛡️ Muro | 50 recursos | Defensa Básica |
| 🏹 Torre | 100 recursos | Defensa Avanzada |
| ⚡ Trampa | 75 recursos | Defensa Especial |

### Estadísticas del Juego
- **Vida Inicial**: 100 ❤️
- **Recursos Iniciales**: 500 🏗️
- **Total de Preguntas**: 10
- **Duración Aproximada**: 5-10 minutos

## 🚀 Cómo Jugar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a internet (opcional)

### Instrucciones

1. **Abre el juego**: Accede al archivo `index.html` en tu navegador
2. **Lee las instrucciones**: Comprende las reglas y el sistema de puntos
3. **Haz clic en "COMENZAR JUEGO"**: Inicia tu partida
4. **Responde preguntas**: Selecciona una opción de respuesta
5. **Construye defensas**: Usa tus recursos para fortalecer tu base
6. **Sobrevive**: Mantén tu vida y derrota a los zombies
7. **Termina el juego**: Completa las 10 preguntas o pierde toda tu vida

## 📁 Estructura del Proyecto

```
zombie-trivia-defense/
├── index.html          # Interfaz HTML del juego
├── styles.css          # Estilos CSS del juego
├── game.js             # Lógica del juego (JavaScript)
└── README.md           # Este archivo
```

### index.html
- Define la estructura del juego
- Tres pantallas principales:
  - **Pantalla de Inicio**: Instrucciones y botón de inicio
  - **Pantalla de Juego**: Preguntas, respuestas y construcción
  - **Pantalla de Game Over**: Estadísticas finales

### styles.css
- Estilos responsive para escritorio y móvil
- Tema oscuro con colores vibrantes
- Animaciones y transiciones suaves
- Diseño centrado en la experiencia del usuario

### game.js
- **Base de datos de preguntas**: 10 preguntas con 4 opciones cada una
- **Lógica del juego**: Gestión de vida, recursos y defensas
- **Funciones principales**:
  - `startGame()`: Inicia una nueva partida
  - `loadQuestion()`: Carga la siguiente pregunta
  - `selectAnswer()`: Procesa la respuesta seleccionada
  - `buildWall()`, `buildTower()`, `buildTrap()`: Construye defensas
  - `endGame()`: Finaliza la partida y muestra resultados

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Rojo | #ff6b6b | Errores y vida baja |
| Amarillo | #ffd93d | Preguntas y énfasis |
| Verde | #4ecca3 | Aciertos y defensas |
| Azul Oscuro | #1a1a2e | Fondo principal |

## 📊 Características Principales

✅ **Interfaz Intuitiva**: Fácil de usar y entender
✅ **Diseño Responsivo**: Compatible con móviles y escritorio
✅ **Animaciones Suaves**: Transiciones visuales atractivas
✅ **Sistema de Retroalimentación**: Notificaciones claras de acciones
✅ **Preguntas Variadas**: Cubre múltiples áreas de conocimiento
✅ **Juego Replayable**: Puedes jugar múltiples veces

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica del juego
- **CSS3**: Estilos avanzados y animaciones
- **JavaScript (Vanilla)**: Lógica del juego sin dependencias externas

## 📈 Cómo Ganar

Para ganar el juego debes:
1. Responder correctamente el máximo de preguntas
2. Mantener tu vida por encima de 0 durante todas las 10 preguntas
3. Construir defensas estratégicamente

**Consejos de Estrategia**:
- 🎯 Enfócate en responder bien las preguntas
- 💰 Ahorra recursos para defensas importantes
- ⚖️ Equilibra vida y recursos
- 🧠 Usa el conocimiento general adquirido

## 🔍 Extensiones Futuras

Posibles mejoras al juego:
- Más preguntas (50+ preguntas)
- Niveles de dificultad
- Animaciones de zombies atacando
- Sistema de sonido y música
- Puntuaciones guardadas
- Modo multijugador
- Diferentes categorías de preguntas

## 📝 Ejemplo de Uso

1. Descarga o clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Juega y diviértete!

```bash
# Para clonar el repositorio
git clone https://github.com/fernandaborja155-maker/zombie-trivia-defense.git

# Navega al directorio
cd zombie-trivia-defense

# Abre index.html en tu navegador
# Windows: start index.html
# macOS: open index.html
# Linux: xdg-open index.html
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Fernando Borja** - [@fernandaborja155-maker](https://github.com/fernandaborja155-maker)

## 🎯 Objetivo Educativo

Este juego fue creado con el propósito de:
- Mejorar el conocimiento de cultura general
- Hacer el aprendizaje divertido e interactivo
- Demostrar habilidades en desarrollo web (HTML, CSS, JavaScript)
- Crear una experiencia de usuario atractiva y responsiva

## 📞 Contacto

Si tienes preguntas, sugerencias o reportes de bugs, por favor:
- Abre un issue en GitHub
- Contacta al autor a través de GitHub

## 🎉 ¡Diviértete Jugando!

Espero que disfrutes del juego tanto como disfruté creándolo. 

**¿Estás listo para defender tu base contra los zombies?** 🧟‍♂️

---

**Última actualización**: Septiembre 2026
**Versión**: 1.0.0
