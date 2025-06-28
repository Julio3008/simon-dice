# Simón Dice - Juego de Memoria

Un juego clásico de memoria donde debes recordar y repetir la secuencia de colores y sonidos. ¡Pon a prueba tu memoria y concentración!

## 📋 Descripción

"Simón Dice" es una versión digital del famoso juego de memoria donde el jugador debe repetir una secuencia de colores y sonidos que se va haciendo más larga y rápida con cada ronda. El juego cuenta con:

- Interfaz gráfica moderna y atractiva
- Efectos visuales y sonoros
- Dificultad progresiva (la velocidad aumenta en cada ronda)
- Animaciones de victoria y derrota

## 🎮 Cómo jugar

1. Presiona el botón "Iniciar" para comenzar el juego
2. Observa y escucha la secuencia de colores que se iluminan
3. Repite la secuencia haciendo clic en los colores en el mismo orden
4. Si aciertas, pasarás a la siguiente ronda con una secuencia más larga
5. Si fallas, perderás y tendrás que volver a empezar
6. ¡Completa las 10 rondas para ganar!

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura del juego
- **CSS3**: Estilos, animaciones y efectos visuales
- **JavaScript**: Lógica del juego y manipulación del DOM
- **Font Awesome**: Iconos para mejorar la interfaz

## 🚀 Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Julio3008/simon-dice.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd simon-dice
   ```

3. Abre el archivo `index.html` en tu navegador favorito

## 📁 Estructura del proyecto

```
simon-dice/
├── index.html          # Estructura HTML del juego
├── style.css           # Estilos y animaciones
├── script.js           # Lógica del juego
├── musica/             # Archivos de audio
│   ├── sounds_1.mp3    # Sonido para el botón rojo
│   ├── sounds_2.mp3    # Sonido para el botón amarillo
│   ├── sounds_3.mp3    # Sonido para el botón azul
│   ├── sounds_4.mp3    # Sonido para el botón verde
│   └── sounds_error.wav # Sonido de error
└── README.md           # Este archivo
```

## 🔧 Personalización

Puedes personalizar el juego modificando:

- **Colores**: Cambia los colores de los botones en el archivo `style.css`
- **Sonidos**: Reemplaza los archivos de audio en la carpeta `musica/`
- **Dificultad**: Modifica la variable `totalRounds` en `script.js` para cambiar el número de rondas
- **Velocidad**: Ajusta la variable `speed` en `script.js` para cambiar la velocidad inicial

## 📈 Posibles mejoras

- Añadir diferentes niveles de dificultad
- Implementar un sistema de puntuación
- Guardar récords de puntuación
- Añadir modo multijugador
- Crear versión para dispositivos móviles con soporte para pantallas táctiles

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles

## 🎁 Agradecimientos

- Inspirado en el juego clásico "Simon" de Milton Bradley
- Gracias a todos los que han probado y dado feedback sobre el juego
