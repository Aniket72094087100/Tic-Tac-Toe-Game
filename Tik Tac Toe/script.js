let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let turnO = true //playerX, playerY

let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')


let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "0";
            turnO = true;
        }
        box.style.pointerEvents = "none";
        checkWinner();
    });
});
const resetGame = () => {
    turnO = true
    enableBoxes();
    msgContainer.classList.add("hide")
}

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false
        box.innerText = ''
    }
}

let showWinner = (winner) => {
    msgContainer.innerText = `Congratulation, winner is ${winner}`
    msgContainer.style.display = "block"
    disableBoxes()
}

const checkWinner = () => {

    for (const element of winPatterns) {

        let posi1Val = boxes[element[0]].innerText
        let posi2Val = boxes[element[1]].innerText
        let posi3Val = boxes[element[2]].innerText
        if (posi1Val != '' && posi2Val != '' && posi3Val != '') {
            if (posi1Val === posi2Val && posi2Val === posi3Val) {
                console.log("winner");

                showWinner(posi1Val)
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)