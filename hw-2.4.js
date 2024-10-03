/* //Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет!')
}

//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (const key in obj) {
    console.log (`${key} - ${obj[key]} долларов`);
} */

//Задание 5

/* let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}

console.log(`Количество циклов: ${num}`);

//Задание 6

let dayFridey = 4;

let allDay = 31;

for (let i = dayFridey; i < allDay; i+=7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    
} */

//Дополнительное задание

//Задание 1

/* let k = 100;

let iterations = 0;

while (k >= 0) {
    k -= 7;
    console.log(k);
    iterations++;
}

console.log(`Количество циклов: ${iterations}`);

//Задание 2

const months = {
    январь: 1,
    февраль: 2,
    март: 3,
    апрель: 4,
    май: 5,
    июнь: 6,
    июль: 7,
    август: 8,
    сентябрь: 9,
    октябрь: 10,
    ноябрь: 11,
    декбрь: 12
}

for (const key in months) {
    console.log(`${key} - ${months[key]}`);
}

//Задание 3

const book = {
    название: 'Сны ктулху',
    автор: 'Говард Лавкрафт',
    'год издания': '2022',
    жанр: 'мистика'
}

for (const key in book) {
    console.log(`${key} - ${book[key]}`);
}

//Задание 4

const number = [10, 54, 29, 15, 24, 106, 8, 84, 5, 100];

let minimum = number[0];

for (const item of number) {
    if (item < minimum) {
        minimum = item;
    }
}

console.log(minimum); */