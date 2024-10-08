const tableSize = 3;
const winner = 3;
const tour = 3;

// create our grid
function grid(tableSize) {
  const contentTable = document.querySelector(".grid");
  contentTable.innerHTML = "";

  for (let i = 0; i < tableSize * tableSize; i++) {
    const gameTable = document.createElement("div");
    gameTable.className = "square";
    gameTable.dataset.index = i;
    gameTable.addEventListener("click", gameTableClikHundle);
    contentTable.appendChild(gameTable);
  }

  contentTable.style.gridTemplateColumns = `repeat(${tableSize}, 1fr)`;
} 

// add player symbole in table
let player = "X";
let arrayGrid = Array(tableSize * tableSize).fill(null);

function gameTableClikHundle(event) {
  const tableIndex = event.target;
  const index = parseInt(tableIndex.dataset.index);
  arrayGrid[index] = player;
  tableIndex.textContent = player;

  tableIndex.removeEventListener("click", gameTableClikHundle);

  if (theWinner(index)) {
        document.getElementById("result").textContent = `Player ${player} wins!`;
        document.querySelector(".modal").classList.remove("hidden");
      
    // count the nombre of winnig for each player
    let player1Wins = localStorage.getItem("player1Wins") ? parseInt(localStorage.getItem("player1Wins")): 0;
    let player2Wins = localStorage.getItem("player2Wins") ? parseInt(localStorage.getItem("player2Wins")) : 0;
    let WinsTour = localStorage.getItem("WinsTour") ? parseInt(localStorage.getItem("WinsTour")) : 0;

    if (player === "X") {
      player1Wins++;
      WinsTour++;
      document.getElementById("player1-stats").textContent = `${player1Wins} Wins`;
      localStorage.setItem("player1Wins", player1Wins);
      document.getElementById("tour").textContent = `${WinsTour}`;
      localStorage.setItem("WinsTour", WinsTour);

      if ((WinsTour === tour)) {
        localStorage.setItem("player1Wins", 0);
        localStorage.setItem("player2Wins", 0);
        localStorage.setItem("WinsTour", 0);
        document.getElementById(
          "player1-stats"
        ).textContent = `0 Wins`;
        document.getElementById(
          "player2-stats"
        ).textContent = `0 Wins`;
        document.getElementById("tour").textContent = `0`;
        newRound();
      }

    } else {
      player2Wins++;
      WinsTour++;
      document.getElementById(
        "player2-stats"
      ).textContent = `${player2Wins} Wins`;
      localStorage.setItem("player2Wins", player2Wins);
      document.getElementById("tour").textContent = `${WinsTour}`;
      localStorage.setItem("WinsTour", WinsTour);
    }

  } else {
      
    // change the player
    player = player === "X" ? "O" : "X";
    document.getElementById(
      "player-turn"
    ).textContent = `Player ${player}, you're up!`;
  }

  // no player winne
  if (!arrayGrid.includes(null)) {
    document.getElementById("result").textContent = `No winner in this round!`;
    document.querySelector(".modal").classList.remove("hidden");
  }
}

function theWinner(index) {
  const row = Math.floor(index / tableSize);
  const col = index % tableSize;

  // Vérifier la ligne
  let count = 0;
  for (let i = 0; i < tableSize; i++) {
    if (arrayGrid[row * tableSize + i] === player) {
      // console.log(player);
      count++;
      // console.log(count)
    } else {
      count = 0;
    } 
    if (count === winner) {
      return true;
    }
  }

  // Vérifier la colonne
  count = 0;
  for (let i = 0; i < tableSize; i++) {
    if (arrayGrid[i * tableSize + col] === player) {
      // console.log(player)
      count++;
      // console.log(count);
    } else {
      count = 0;
    }
    if (count === winner) {
      return true;
    }
  }

  // de haut-gauche à bas-droite
  count = 0;
  for (let i = 0; i < tableSize; i++) {
    if (arrayGrid[i * tableSize + i] === player) {
      console.log(player);
      count++;
      console.log(count);
    } else {
      count = 0;
    }
    if (count === winner) {
      return true;
    }
  }

  //de haut-droit à bas-gauche
  count = 0;
  for (let i = 0; i < tableSize; i++) {
    if (arrayGrid[i * tableSize + (tableSize - 1 - i)] === player) {
      console.log(player);
      count++;
      console.log(count);
    } else {
      count = 0;
    }
    if (count === winner) {
      return true;
    }
  }
}

function newRound() {
  arrayGrid.fill(null);
  document.getElementById("result").textContent = "";
  document.querySelector(".modal").classList.add("hidden");

  player = "X";
  document.getElementById("player-turn").textContent = `Player ${player}, you're up!`;

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.textContent = "";
    square.addEventListener("click", gameTableClikHundle);
  });

}

grid(tableSize);