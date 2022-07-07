const boxes = document.querySelectorAll('.box');
const playerText = document.getElementById('player');
const startButton = document.getElementById('start');
let gameOver = false;
let winner;

let player = 'X';

const startGame = () => {
  playerText.textContent = `${player}'s turn`;
  boxes.forEach((box) => box.addEventListener('click', () => chooseArea(box)));
};

const chooseArea = (box) => {
  if (box.textContent == '') {
    box.textContent = player;
    turnPlayer();
  }
  checkWin();
  checkDraw();

  if(gameOver) {
    playerText.textContent = `Game is over, ${winner} Won`;
    boxes.forEach((box) => box.style.pointerEvents = 'none')
  }
};

const turnPlayer = () => {
  if (player === 'X') {
    player = 'O';
    playerText.textContent = `${player}'s turn`;
  } else {
    player = 'X';
    playerText.textContent = `${player}'s turn`;
  }
};

const checkWin = () => {
  checkRows();
  checkColumns();
  checkDiagonals();
};

const checkRows = () => {
  let row1 =
    boxes[0].textContent == boxes[1].textContent &&
    boxes[0].textContent == boxes[2].textContent &&
    boxes[0].textContent !== '';
  let row2 =
    boxes[3].textContent == boxes[4].textContent &&
    boxes[3].textContent == boxes[5].textContent &&
    boxes[3].textContent !== '';
  let row3 =
    boxes[6].textContent == boxes[7].textContent &&
    boxes[6].textContent == boxes[8].textContent &&
    boxes[6].textContent !== '';
  if (row1 || row2 || row3) {
    gameOver = true;
  }
  if (row1) {
    return (winner = boxes[0].textContent);
  }
  if (row2) {
    return (winner = boxes[3].textContent);
  }
  if (row3) {
    return (winner = boxes[5].textContent);
  }
};

const checkColumns = () => {
  let col1 =
    boxes[0].textContent == boxes[3].textContent &&
    boxes[0].textContent == boxes[6].textContent &&
    boxes[0].textContent !== '';
  let col2 =
    boxes[1].textContent == boxes[4].textContent &&
    boxes[1].textContent == boxes[7].textContent &&
    boxes[1].textContent !== '';
  let col3 =
    boxes[2].textContent == boxes[5].textContent &&
    boxes[2].textContent == boxes[8].textContent &&
    boxes[2].textContent !== '';
  if (col1 || col2 || col3) {
    gameOver = true;
  }
  if (col1) {
    return (winner = boxes[0].textContent);
  }
  if (col2) {
    return (winner = boxes[1].textContent);
  }
  if (col3) {
    return (winner = boxes[2].textContent);
  }
};

const checkDiagonals = () => {
  let diag1 =
    boxes[0].textContent == boxes[4].textContent &&
    boxes[0].textContent == boxes[8].textContent &&
    boxes[0].textContent !== '';
  let diag2 =
    boxes[2].textContent == boxes[4].textContent &&
    boxes[2].textContent == boxes[6].textContent &&
    boxes[2].textContent !== '';
  if (diag1 || diag2) {
    gameOver = true;
  }
  if (diag1) {
    return (winner = boxes[0].textContent);
  }
  if (diag2) {
    return (winner = boxes[2].textContent);
  }
};

const checkDraw = () => {
  const values = [];
  boxes.forEach(box => values.push(box.textContent));
  if(!values.includes("")) {
    playerText.textContent = "Draw!";
    boxes.forEach(box => box.style.pointerEvents = 'none');
  }
};

startButton.onclick = startGame.bind(this);
