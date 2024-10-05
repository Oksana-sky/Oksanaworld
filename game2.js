const button2 = document.getElementById('myGame2');

button2.onclick = startGame;

function startGame() {

    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }

    const firstValue = randomNumber();

    const secondValue = randomNumber();

    function getExample() {
        return `${firstValue} + ${secondValue}`
    }

    alert(getExample());
   
    const result = firstValue + secondValue;

    console.log(result);

    while (userAnswer = prompt("Посчитай и выведи ответ")) {
        if (isNaN(userAnswer)) {
            alert('Введи число!');
        } else if (+userAnswer === result) {
            alert('Молодец, верно!');
            break;
        } else {
            alert('Не верно. Попробуй еще.');
        }
    }

    const firstValue2 = randomNumber();

    const secondValue2 = randomNumber();

    function getExample2() {
        return `${firstValue2} - ${secondValue2}`
    }

    alert(getExample2());
   
    const result2 = firstValue2 - secondValue2;

    console.log(result2);

    while (userAnswer = prompt("Посчитай и выведи ответ")) {
        if (isNaN(userAnswer)) {
            alert('Введи число!');
        } else if (+userAnswer === result2) {
            alert('Молодец, верно!');
            break;
        } else {
            alert('Не верно. Попробуй еще.');
        }
    }

    const firstValue3 = randomNumber();

    const secondValue3 = randomNumber();

    function getExample3() {
        return `${firstValue3} * ${secondValue3}`
    }

    alert(getExample3());
   
    const result3 = firstValue3 * secondValue3;

    console.log(result3);

    while (userAnswer = prompt("Посчитай и выведи ответ")) {
        if (isNaN(userAnswer)) {
            alert('Введи число!');
        } else if (+userAnswer === result3) {
            alert('Молодец, верно!');
            break;
        } else {
            alert('Не верно. Попробуй еще.');
        }
    }

    const firstValue4 = randomNumber();

    const secondValue4 = randomNumber();

    function getExample4() {
        return `${firstValue4} / ${secondValue4}`
    }

    alert(getExample4());
   
    const result4 = firstValue4 / secondValue4;

    console.log(result4);

    while (userAnswer = prompt("Посчитай и выведи ответ")) {
        if (isNaN(userAnswer)) {
            alert('Введи число!');
        } else if (+userAnswer === result4) {
            alert('Молодец, верно!');
            break;
        } else {
            alert('Не верно. Попробуй еще.');
        }
    }
}