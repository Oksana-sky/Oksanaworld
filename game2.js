const button2 = document.getElementById('myGame2');
const button7 = document.getElementById('myGame2.1');
const button12 = document.getElementById('myGame2.2');

const randomeIndex = () => Math.floor(Math.random() * 4);

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

button2.onclick = startGame;
button7.onclick = startGame;
button12.onclick = startGame;

function startGame() {

    const signs = ['+', '-', '*', '/'];
    const firstValue = randomNumber();
    const secondValue = randomNumber();

    const sign = signs[randomeIndex()];

    const mathExp = `${firstValue} ${sign} ${secondValue}`

    const result = eval(mathExp);

    console.log(result);

    while (true) {
        alert(mathExp);
        const userAnswer = prompt("Посчитай и выведи ответ")

        if (isNaN(Number(userAnswer))) {
            alert('Введи число!');
        } else if (+userAnswer === result) {
            alert('Молодец, верно!');
            break;
        } else if (userAnswer === null) {
            break;
        } else {
            alert('Не верно. Попробуй еще.');
        }
    }
}