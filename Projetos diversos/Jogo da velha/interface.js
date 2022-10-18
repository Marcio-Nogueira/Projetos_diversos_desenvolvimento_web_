// iniciar variaveis 
let x = 0;
let o = 0;

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleclick);
    })

})

// atribuir vencedor
function whoWins() {

    let winner = "No winner";

    if (playerTime == 1) {
        winner = "Jogador O";
    } else if (playerTime == 0) {
        winner = "Jogador X";
    } else {
        winner = "No winner";
    }
    return winner;

}

function handleclick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(" O Jogo Acabou - O vencedor foi " + whoWins())
        }, 10);
        score();

    };
    updateSquare(position);

}

// versão atualizada, atualiza um quadrado por vez
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

//versão antiga do codigo dava update em todos os quadrados
// function updateSquares() {

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != '') {
//             square.innerHTML = `<div class='${symbol}'></div>`
//         }
//     })
// }


// Recomeçar o jogo
let restartButton = document.getElementById("restartGame");

restartButton.addEventListener("click", restart);

function restart(event) {

    gameOver = false;
    clear();

}

function clear() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        board[position] = '';
        square.innerHTML = '';
    })
}

function score() {

    while (gameOver != false) {

        if (whoWins() == "Jogador O") {
            o++;
            document.getElementById("inputO").value = o;
            gameOver = false;

        } else if (whoWins() == "Jogador X") {
            x++;
            document.getElementById("inputX").value = x;
            gameOver = false;
        } else {
            return "error"
        }
    }
}