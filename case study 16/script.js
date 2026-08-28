let board = [];
let emptyIndex = 15;

function createBoard() {

    board = [];

    for (let i = 1; i <= 15; i++) {
        board.push(i);
    }

    board.push(0);

    emptyIndex = 15;

    displayBoard();
}

function displayBoard() {

    let boardElement = document.getElementById("board");

    boardElement.innerHTML = "";

    board.forEach(function(tile, index) {

        let div = document.createElement("div");

        div.className = "tile";

        if (tile === 0) {
            div.classList.add("empty");
        } else {
            div.textContent = tile;

            div.onclick = function() {
                moveTile(index);
            };
        }

        boardElement.appendChild(div);
    });
}

function moveTile(index) {

    let row = Math.floor(index / 4);
    let col = index % 4;

    let emptyRow = Math.floor(emptyIndex / 4);
    let emptyCol = emptyIndex % 4;

    let isAdjacent =
        (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
        (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (isAdjacent) {

        board[emptyIndex] = board[index];
        board[index] = 0;

        emptyIndex = index;

        displayBoard();

        checkWin();
    }
}

function shuffle() {

    for (let i = 0; i < 100; i++) {

        let possibleMoves = [];

        let row = Math.floor(emptyIndex / 4);
        let col = emptyIndex % 4;

        if (row > 0) {
            possibleMoves.push(emptyIndex - 4);
        }

        if (row < 3) {
            possibleMoves.push(emptyIndex + 4);
        }

        if (col > 0) {
            possibleMoves.push(emptyIndex - 1);
        }

        if (col < 3) {
            possibleMoves.push(emptyIndex + 1);
        }

        let randomIndex =
            possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

        board[emptyIndex] = board[randomIndex];
        board[randomIndex] = 0;

        emptyIndex = randomIndex;
    }

    document.getElementById("message").textContent = "";

    displayBoard();
}

function checkWin() {

    for (let i = 0; i < 15; i++) {

        if (board[i] !== i + 1) {
            return;
        }
    }

    if (board[15] === 0) {
        document.getElementById("message").textContent =
            "🎉 Congratulations! You solved the puzzle!";
    }
}

createBoard();
