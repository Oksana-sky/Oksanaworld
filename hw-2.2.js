//Задание 1
// let a =10;
// alert(a);
// a=20;
// alert(a);

//Задание 2
//const dateIphone = 2010;
//alert(dateIphone);

//Задание 3
//const nameCreatorJS = 'Брендан Эйх';
//alert(nameCreatorJS);

//Задание 4
// let a =10;
// let b=2;
// alert(a+b);
// alert(a-b);
// alert(a*b);
// alert(a/b);

//Задание 5
//let result = 2 ** 5;
//alert(result);

//Задание 6
let a = 9;
let b = 2;
let rest = a % b;
alert(rest);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//Задание 8
let age = prompt('Сколько вам лет?');
alert(age);

//Задание 9
const user = {
    name: 'Oksana',
    age: 18,
    isAdmin: true,
}

//Задание 10
let userName = prompt('Твое имя?');
alert(`Привет, ${userName}`);

//Дополнительное задание (Доп.задание)

let namber = prompt('Загадай число');
alert(namber);
let product = namber*2;
alert(`Ваше число умножаем на 2 получаем ${product}`);
let sum = product+10;
alert(`Прибавляем 10 получаем ${sum}`);
let quotient = sum/2;
alert(`Делим на 2 получаем ${quotient}`);
let difference = quotient-namber;
alert(`Вычитаем Ваше число и в результате должны получить 5! Получили? ${difference}  Здорово!!!`);
