//Задание 1

/* let str = 'js';

alert(str.toUpperCase()); */

//Задание 2

/* function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log (filter(['Простая арифметика', 'Угадай число', 'Переверни текст', 'Камень, ножницы, бумага', 'Простая викторина', 'Генератор случайных чисел'], 'про')); */

//Задание 3

/* let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
 */

//Задание 4

/* console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32)); */

//Задание 5

/* function randomNumber() {
    return Math.floor(Math.random() * 11);
}

console.log(randomNumber()); */

//Задание 6

/* function getRandomNumber(num) {
    return Array.from({length:Math.floor(num/2)}, () => Math.floor(Math.random()*num));
}

console.log(getRandomNumber(1)); */

//Задание 7

/* function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10)); */

//Задание 8

/* let currentDate = new Date();
console.log(currentDate);
let currentDate = new Date(); */

//Задание 9

/* let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate); */

//Задание 10

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDay();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
