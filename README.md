🎮 Piedra, Papel o Tijera
Un juego interactivo del clásico Piedra, Papel o Tijera desarrollado con HTML, CSS y JavaScript puro.

Link a Git Pages: https://beta.adalab.es/modulo-2-evaluacion-intermedia-mcocapelaz/

Descripción
Este proyecto es una implementación del clásico juego de Piedra, Papel o Tijera donde el jugador compite contra la computadora. El juego incluye un sistema de puntuación, límite de rondas y reseteo automático.​

✨ Características:

🎲 Generación aleatoria de jugadas de la computadora

📊 Sistema de puntuación en tiempo real

🔄 Reseteo automático después de 10 rondas

✅ Validación de selección del jugador

🎨 Interfaz amigable y responsive

💬 Mensajes dinámicos de resultados (Ganaste, Perdiste, Empate)

🛠️ Tecnologías Utilizadas
Este proyecto fue desarrollado con las siguientes tecnologías:​

HTML5 - Estructura del juego

CSS3 - Estilos y diseño responsive

JavaScript (ES6) - Lógica del juego y manipulación del DOM

📁 Estructura del Proyecto
text
piedra-papel-tijera/
├── index.html           # Estructura HTML del juego
├── main.css            # Estilos del proyecto
├── main.js             # Lógica del juego en JavaScript
└── README.md           # Documentación del proyecto
💻 Instalación
Sigue estos pasos para ejecutar el proyecto localmente:​

🎯 Cómo Jugar
Abre el archivo index.html en tu navegador

Selecciona tu jugada del menú desplegable (Piedra, Papel o Tijera)

Haz clic en el botón "Jugar"

El resultado aparecerá en el botón "Vamos a Jugar!"

Los marcadores se actualizarán automáticamente

Después de 10 rondas, el juego se reinicia automáticamente

⚙️ Funcionalidades
Lógica del Juego
Piedra 🪨 gana a Tijera ✂️

Tijera ✂️ gana a Papel 📄

Papel 📄 gana a Piedra 🪨

Si ambos eligen lo mismo, es Empate 🤝

Sistema de Puntuación
javascript
// Los puntos se actualizan automáticamente
playerScore++;        // Cuando gana el jugador
computerScore++;      // Cuando gana la computadora
Límite de Rondas
El juego permite jugar exactamente 10 rondas antes de resetear automáticamente.
