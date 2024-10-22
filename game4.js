const button4 = document.getElementById('myGame4');

const randommIndex = () => Math.floor(Math.random() * 3);

button4.onclick = startGame;

let check, a, b;

function startGame() {

    const answers = [
        'камень',
        'ножницы',
        'бумага'
    ];

    let answerComp = answers[randommIndex()];

    let sec = true;
    let userChoice;

    do {
        userChoice = prompt('Выбери:\nкамень, ножницы, бумага');

        userChoice = userChoice.toLowerCase();

        for (let i = 0; i < 3; i++) {
            if (userChoice === answers[i]) {
                sec = false;
            };
        };
        if (sec) {
            alert('Ошибка, попробуйте еще раз!');
        };
    } while (sec);

    for (let i = 0; i < 3; i++) {
        if (answerComp === answers[i]) {
            a = i;
        };
        if (userChoice === answers[i]) {
            b = i;
        };
    };
    /*
    a - компьютер
    b - игрок
    0 - камень
    1 - ножницы
    2 - бумага
    */
    if (a === b) {
        check = 2;
    } else if (a === 0 && b === 1) {
        check = 0;
    } else if (a === 0 && b === 2) {
        check = 1;
    } else if (a === 1 && b === 2) {
        check = 0;
    } else if (a === 1 && b === 0) {
        check = 1;
    } else if (a === 2 && b === 0) {
        check = 0;
    } else if (a === 2 && b === 1) {
        check = 1;
    };

    console.log(check);

    alert(`Ваш выбор: ${userChoice}\n Выбор компьютера: ${answerComp}`);

    if (check === 1) {
        alert('Вы победили');
    } else if (check === 0) {
        alert('Вы проиграли');
    } else if (check === 2) {
        alert('Ничья');
    };
}