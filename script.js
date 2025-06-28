/**
 * Simon Dice - Juego de Memoria
 * Un juego clásico donde debes recordar y repetir la secuencia de colores
 */

// Elementos del DOM
const round = document.getElementById("round");
const simonButtons = document.getElementsByClassName("square");
const startButton = document.getElementById("startButton");

class Simon {
  constructor(simonButtons, startButton, round) {
    // Estado del juego
    this.round = 0;
    this.userPosition = 0;
    this.totalRounds = 10;
    this.sequence = [];
    this.speed = 1000;
    this.blockedButtons = true;

    // Elementos del DOM
    this.buttons = Array.from(simonButtons);
    this.display = {
      startButton,
      round,
    };

    // Sonidos del juego
    this.errorSound = new Audio("./musica/sounds_error.wav");
    this.buttonSounds = [
      new Audio("./musica/sounds_1.mp3"),
      new Audio("./musica/sounds_2.mp3"),
      new Audio("./musica/sounds_3.mp3"),
      new Audio("./musica/sounds_4.mp3"),
    ];
  }

  /**
   * Inicializa el juego y configura el botón de inicio
   */
  init() {
    this.display.startButton.onclick = () => this.startGame();
    // Mostrar mensaje inicial
    this.display.round.textContent = "¡Presiona Iniciar!";
  }

  /**
   * Comienza el juego: reinicia variables y genera secuencia
   */
  startGame() {
    this.display.startButton.disabled = true;
    this.updateRound(0);
    this.userPosition = 0;
    this.sequence = this.createSequence();
    this.speed = 1000; // Reinicia la velocidad al iniciar nuevo juego

    // Configura los botones y elimina efectos de victoria
    this.buttons.forEach((element, i) => {
      element.classList.remove("winner");
      element.onclick = () => this.buttonClick(i);
    });

    // Muestra la primera secuencia
    setTimeout(() => this.showSequence(), 500);
  }

  /**
   * Actualiza el número de ronda y el texto mostrado
   */
  updateRound(value) {
    this.round = value;
    this.display.round.textContent = `Ronda ${this.round + 1} de ${
      this.totalRounds
    }`;
  }

  /**
   * Crea una secuencia aleatoria de colores
   */
  createSequence() {
    return Array.from({ length: this.totalRounds }, () =>
      this.getRandomColor()
    );
  }

  /**
   * Genera un número aleatorio entre 0 y 3 (para los 4 colores)
   */
  getRandomColor() {
    return Math.floor(Math.random() * 4);
  }

  /**
   * Maneja el clic en un botón si no están bloqueados
   */
  buttonClick(value) {
    if (!this.blockedButtons) {
      this.validateChosenColor(value);
    }
  }

  /**
   * Valida si el color elegido corresponde al de la secuencia
   */
  validateChosenColor(value) {
    if (this.sequence[this.userPosition] === value) {
      // Reproduce sonido y muestra efecto visual
      this.buttonSounds[value].play();
      this.toggleButtonStyle(this.buttons[value]);
      setTimeout(() => this.toggleButtonStyle(this.buttons[value]), 300);

      // Verifica si completó la ronda actual
      if (this.userPosition === this.round) {
        this.updateRound(this.round + 1);
        this.speed /= 1.02; // Aumenta la velocidad gradualmente
        this.isGameOver();
      } else {
        this.userPosition++;
      }
    } else {
      this.gameLost();
    }
  }

  /**
   * Verifica si el juego ha terminado
   */
  isGameOver() {
    if (this.round === this.totalRounds) {
      this.gameWon();
    } else {
      this.userPosition = 0;
      setTimeout(() => this.showSequence(), 1000);
    }
  }

  /**
   * Muestra la secuencia de colores que el jugador debe repetir
   */
  showSequence() {
    this.blockedButtons = true;
    let sequenceIndex = 0;
    let timer = setInterval(() => {
      const button = this.buttons[this.sequence[sequenceIndex]];
      this.buttonSounds[this.sequence[sequenceIndex]].play();
      this.toggleButtonStyle(button);
      setTimeout(() => this.toggleButtonStyle(button), this.speed / 2);
      sequenceIndex++;
      if (sequenceIndex > this.round) {
        this.blockedButtons = false;
        clearInterval(timer);
      }
    }, this.speed);
  }

  /**
   * Aplica/quita el estilo activo a un botón
   */
  toggleButtonStyle(button) {
    button.classList.toggle("active");
  }

  /**
   * Maneja el final del juego cuando el jugador pierde
   */
  gameLost() {
    this.errorSound.play();
    this.display.startButton.disabled = false;
    this.blockedButtons = true;
    this.display.round.textContent = "¡Has perdido! Inténtalo de nuevo";
  }

  /**
   * Maneja el final del juego cuando el jugador gana
   */
  gameWon() {
    this.display.startButton.disabled = false;
    this.blockedButtons = true;
    this.buttons.forEach((element) => {
      element.classList.add("winner");
    });
    this.display.round.textContent = "🏆 ¡Has ganado! 🏆";
  }
}

// Inicializa el juego
const simon = new Simon(simonButtons, startButton, round);
simon.init();
