//Задание 1

const min = (a, b) => (a<b) ? a:b;

console.log (min(8,4));
console.log (min(6,6));

//Задание 2

function isEven(n){
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
       return 'Число нечетное'; 
    }
}

console.log(isEven(2));
console.log(isEven(3));

//Задание 3

const up = (n) => n**2;

console.log(up(3));

//Задание 4

function age() {
    let age = + prompt('Сколько тебе лет?');
    if (age<0) {
        alert ('Вы ввели неправильное значение');
    } else if (age>=0 && age<=12) {
        alert ('Привет, друг!');
    } else {
        alert ('Добро пожаловать!');
    }
}

age();

//Задание 5

function calc(a,b){
    if (isNaN(a)  || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a*b;
    }
}

console.log(calc(8,4));
console.log(calc('word','word'));
console.log(calc('word',4));

//Задание 6

function getNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `n в кубе равняется ${number ** 3}`;
    }
}

console.log(getNumber());

//Задание 7

function getArea() {
    return Math.PI*this.radius ** 2;
}

function getPerimetr() {
    return 2 * Math.PI*this.radius;
}

const circle1 = {
    radius:10,
    methodGetArea: getArea,
    methodGetPerimetr: getPerimetr,

}

const circle2 = {
    radius:5,
    methodGetArea: getArea,
    methodGetPerimetr: getPerimetr,
}

console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());