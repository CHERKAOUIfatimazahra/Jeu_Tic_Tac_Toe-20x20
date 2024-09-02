# Tic Tac Toe 20x20

This is a Tic Tac Toe game developed using HTML, CSS, and JavaScript. The game allows two players to compete on a customizable grid, with the goal of aligning symbols (X or O) in a row, column, or diagonal to win.

## Features

- **Customizable Grid Size:** The game can be played on different grid sizes, defined by the `tableSize` variable.
- **Turn Indicator:** The current player's turn is displayed.
- **Score Tracking:** The game tracks the number of wins for each player.
- **Modal for Game Results:** A modal appears to display the winner or if the round ends in a tie.
- **New Round and Reset Options:** Players can start a new round or reset the game from the menu.

## Technologies Used

- **HTML** for the structure of the game.
- **CSS** for styling and layout.
- **JavaScript** for game logic and interactivity.

## How to Play

1. Open the `index.html` file in a web browser.
2. The game will start with player X.
3. Click on a square in the grid to place your symbol.
4. The turn alternates between players X and O.
5. The game checks for a winner after each turn. If a player aligns the required number of symbols (e.g., 3 in a row), they win, and their score increases.
6. If all squares are filled and no player wins, the game ends in a tie.
7. Use the "New Round" button to start a new game or "Reset" to reset the scores and start fresh.

## Game Logic

- The game checks for a winning combination after each move.
- The winner is determined by checking rows, columns, and diagonals for consecutive symbols.
- The game logic is implemented in JavaScript, with event listeners attached to each grid square to handle player actions.

## Customization

- You can change the grid size by modifying the `tableSize` variable in `script.js`.
- The number of symbols required to win can be adjusted by changing the `winner` variable.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/CHERKAOUIfatimazahra/Jeu_Tic_Tac_Toe-20x20
