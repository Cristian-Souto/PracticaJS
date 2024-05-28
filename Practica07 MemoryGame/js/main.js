let cardFlip = 0;
let firstCard = null;
let secondCard = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let hitIncrement = 0;
let timer = 30;
let initialtimer = timer;
let temporizador = false;
let timeBack = null;

//seleccionar elementos que muestran la informacion
let showMoves = document.getElementById('moves');
let showTime = document.getElementById('time');
let showHit = document.getElementById('hit');

//voy a generar un numero aleatorios
const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const randomNumbers = numbers.sort(() => Math.random() - 0.5);

//funcione para decrementar el tiempo del juego

const countDown = () => {
  timeBack = setInterval(() => {
    timer--;
    showTime.innerHTML = `Time: ${timer} seconds`;
    if (timer === 0) {
      clearInterval(timeBack);
      blockCards();
    }
  }, 1000);
}

//funcion para bloquar las cartas
const blockCards = () => {
  clearInterval(timeBack);
  temporizador = false;
  showTime.innerHTML = `Time: ${timer} seconds`;
}

// Obtener el tablero del juego
const gameBoard = document.getElementById('game-board');

// Crear las cartas en el tablero
randomNumbers.forEach((value, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  /* card.textContent = value; */
  card.addEventListener('click', () => flipCard(card, index));
  gameBoard.appendChild(card);
});

//funcion para voltear las cartas

const flipCard = (card, index) => {
  cardFlip++;
  if (!temporizador) {
    temporizador = true;
    countDown();
  }
  if (cardFlip === 0) {
    // Primer clic
    cardFlip++;
    firstCard = { card, index };
    card.classList.add('flipped'); // Puedes agregar una clase para estilizar la carta volteada
  } else if (cardFlip === 1) {
    // Segundo clic
    cardFlip = 0;
    secondCard = { card, index };
    card.classList.add('flipped'); // Agregar clase para estilizar la segunda carta volteada

    // Verificar si las cartas coinciden
    if (randomNumbers[firstCard.index] === randomNumbers[secondCard.index]) {
      // Coincidencia, realizar acciones necesarias
      handleMatch();
    } else {
      // No coinciden, voltear las cartas después de un breve período
      setTimeout(() => {
        firstCard.card.classList.remove('flipped');
        secondCard.card.classList.remove('flipped');
      }, 800);
    }
  }
};

// Función para manejar las acciones cuando las cartas coinciden
const handleMatch = () => {
  // Realizar acciones necesarias para cartas coincidentes
  hitIncrement++;
  showHit.innerHTML = `Hit: ${hitIncrement}`;

  // Por ejemplo, incrementar el contador de aciertos, verificar si se completó el juego, etc.
};


