const button = document.getElementById('myGame1');

button.onclick = startGame;

function startGame() {

let userName = prompt('Как тебя зовут?');

alert(`Привет, ${userName}!`);

function randomNumber() {
    return Math.floor(Math.random() * 101);
}

const arr = [];

for (let i = 0; i < 1; i++) {
    arr.push(randomNumber());
}

console.log(arr);

while (userNumber = prompt('Я загадал число от 1 до 100. Попробуй отгадай!')) {
    if (isNaN(userNumber)){
        alert('Введи число!');
    } else if (userNumber < arr) {
        alert('Не угадал! Твое число меньше.');
    } else if (userNumber > arr) {
        alert('Не угадал! Твое число больше.');
    } else {
        alert('Молодец! Угадал!');
        break;
    }
}
}