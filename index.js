const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const rebutton = document.querySelector("#restart");

const wining = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const options = new Array(9).fill("");
let currentPlayer = "X";
let running = false;

startGame();

function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  rebutton.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] !== "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner()
  }

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
  
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let winner = false;

  for (let cel of wining) {
    const condition = cel;
    let celA = options[condition[0]];
    let celB = options[condition[1]];
    let celC = options[condition[2]];

    if (celA == "" && celB == "" && celC == "") continue;
    else if (celA == celB && celB == celC) {
      winner = true;
      break;
    }
  }
  if (winner) {
    statusText.textContent = `${currentPlayer} wins ✌️`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = `Draw!!`;
    running = false;
  } else changePlayer();
}
function restartGame() {
   currentPlayer="X"
   options.fill("")
   statusText.textContent=`${currentPlayer}'s turn`
   cells.forEach(cell=>cell.textContent="")
   running=true
}
