const button2 = document.getElementById('myGame2');

button2.onclick = startGame;

function startGame() {

    const randomeIndex = () => Math.floor(Math.random() * 4);

    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }

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

        if (isNaN(userAnswer)) {
            alert('Введи число!');
        } else if (+userAnswer === result) {
            alert('Молодец, верно!');
            break;
        } else if (userAnswer === null) {
            break;
        }else {
            alert('Не верно. Попробуй еще.');
        }
    }
}