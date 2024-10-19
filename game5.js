const button5 = document.getElementById('myGame5');

button5.onclick = startGame;

function startGame() {

    const quiz = [{
        question: "Какой цвет неба?",
        options: [
            "1. Красный",
            "2. Синий",
            "3. Зеленый"
        ],
        correctAnswer: 2

    }, {
        question: "Сколько дней в неделе?",
        options: [
            "1. Шесть",
            "2. Семь",
            "3. Восемь"
        ],
        correctAnswer: 2
    }, {
        question: "Сколько у человека пальцев на одной руке?",
        options: [
            "1. Четыре",
            "2. Пять",
            "3. Шесть"
        ],
        correctAnswer: 2
    }];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = prompt(`Вопрос:\r${quiz[i].question} \n Варианты ответа:\r${quiz[i].options.map((option)=>{
        return option+"\n";
        }).join("")}\rВаш ответ:`);
        if (+userAnswer === quiz[i].correctAnswer) {
            alert('Верно');
            score++;    
        } else {
            alert('Не верно');
        }

    }
    let answerText = "\nВсего правильных ответов: " + score + "\n";
    alert(answerText);
}