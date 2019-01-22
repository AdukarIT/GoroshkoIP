// task 1. 
//Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
/* let x = +prompt("Введите первое число");
let y = +prompt("Введите второе число");
let z = +prompt("Введите третье число");

function min(x, y, z) {
    let rez = 0;
    if (x < y && x < z)
        rez = x;
    else if (y < z)
        rez = y
    else
        rez = z;
    return rez;
}
console.log(min(x,y,z)); */


//task 2.
//Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, 
//а возвращает соответствующее им количество секунд.

/* let x = +prompt("Введите количество дней:");
let y = +prompt("Введите количество часов:");
let z = +prompt("Введите клоичество минут:");

function reverse(x,y,z){
    let rez=0;
    rez=x*86400+y*3600+z*60;
    return rez;
}
console.log(reverse(x,y,z) + ' секунд'); */


//task 3.
//Напишите рекурсивную функцию для подсчёта факториала числа.
/* let x;
do {
    x = +prompt("Введите натуральное число: ");
} while ((x < 0) || (x%1))

function getFact(x) {
    if (x == 1)
        return 1;
    else
        return x * getFact(x - 1);
}

let rez = getFact(x);
console.log(rez);  */


//task 4.
//Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд. 
//Например, если на вход функция получает 1234, вернуть она должна 4321.

/* let x = +prompt("Введите число");
let prom = +0;
let rez = +0;

function numberReverse(x) {
    if (Math.abs(x) >= 1) {
        prom = x % 10;
        rez = rez + prom;
        if (Math.abs(x) >= 10)
            rez *= 10;        
        numberReverse((x - prom) / 10);
    }    
    return rez;
}
console.log(numberReverse(x)); */


//task 5.
//Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать 
//коэффиценты a, b и c, возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии)
// функция должна выводить в консоль. Примечание 1. Ищем только решения в действительных числах, 
//комплексные не нужны! Примечание 2. Для получения квадратного корня используйте стандартную 
//функцию JS: Math.sqrt().

/* let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");

function qEquation(a, b, c) {
    let D, n, x1, x2;
    D = b * b - 4 * a * c;    
    if (D > 0)
        n = 2;
    if (D < 0)
        return 0;
    if (D == 0)
        n = 1;
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    if (n == 2)
        console.log("Корни уравнения:", x1, x2);
    else
        console.log("Корень уравнения:", x1);
    return n;
}

console.log(qEquation(a, b, c)); */

