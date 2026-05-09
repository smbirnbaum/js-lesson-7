const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endGameContainer = document.getElementById("end-game-container");

const words = [
    "cat",
    "pizza",
    "javascript",
    "computer",
    "keyboard",
    "school",
    "flower",
    "banana",
    "goblin",
    "coffee"
];

let randomWord;
let score = 0;
let time = 10;

text.focus();

function addWordToDOM() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    word.textContent = randomWord;
}

function updateScore() {
    score = score + 1;
    scoreElement.textContent = score;
}

function updateTime() {
    time = time - 1;
    timeElement.textContent = time;

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    endGameContainer.style.display = "flex";
    endGameContainer.innerHTML = `
        <h1>Game Over</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Restart</button>
    `;
}

text.addEventListener("input", function () {
    const typedText = text.value;

    if (typedText === randomWord) {
        updateScore();
        addWordToDOM();
        time = time + 5;
        timeElement.textContent = time;
        text.value = "";
    }
});

addWordToDOM();

const timeInterval = setInterval(updateTime, 1000);