let currentPlayer = 'X';
const winningCombinations = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [2, 4, 6],
  [3, 4, 5], [6, 7, 8]
];
const cells = document.querySelectorAll('.case');
const playerText = document.getElementById('playerText');
const restartBtn = document.querySelector('.restartBtn');
const restartDIV = document.querySelector(".restartDIV");

// Fonction pour gérer le clic sur une case
function handleCellClick(e) {
  const selectedCell = e.target;
  if (selectedCell.textContent !== '') {
    return;
  }
  selectedCell.textContent = currentPlayer;
  if (checkWin()) {
    playerText.textContent = `${currentPlayer} a gagné !`;
    playerText.style.color = "#7DB86F";
    playerText.style.borderRadius = "15px";
    restartDIV.style.display = "flex"
    return;
  }
  if (checkTie()) {
    playerText.textContent = "Match nul !";
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  playerText.textContent = `Au tour de : ${currentPlayer}`;
}

// Fonction pour vérifier si un joueur a gagné
function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer) {
      return true;
    }
  }
  return false;
}

// Fonction pour vérifier si la partie est terminée avec un match nul
function checkTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      return false;
    }
  }
  return true;
}

// Ajout d'un gestionnaire d'événements pour chaque case
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleCellClick);
}

// Ajout d'un gestionnaire d'événements pour le bouton "Restart"
restartBtn.addEventListener("click", click => {
    window.location.reload();
})

// Affichage du joueur actuel au démarrage du jeu
playerText.textContent = `Joueur actuel : ${currentPlayer}`;
