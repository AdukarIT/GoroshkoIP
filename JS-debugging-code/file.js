//task 1.
//Создайте функцию, которая принимает три числа: два первых должны быть длиной сторон катетов 
//прямоугольного треугольника, а третье – длиной гипотенузы. Функция возвращает true, если такой 
//прямоугольный треугольник возможен, и false, если нет.
/* let a = +prompt("Введите длину первого катета:");
let b = +prompt("Введите длину второго катета:");
let c = +prompt("Введите длину гипотенузы:");

function checkTriangle(a, b, c) {
    if ((c ** 2 == a ** 2 + b ** 2) && a>0 && b>0 && c>0)
        return true;
    else
        return false;
}

console.log(checkTriangle(a,b,c)); */


//task 2.
//Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str. 
//По умолчанию n=2, str — пустая строка.

/* let str="\n";
let n=2;

function repeat(str, n){
    let rez="";
    for(let i=0; i<2; i++)
    rez+=str;
    return rez;
}
console.log(repeat(str,n)); */


//task 3.
//Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт 
//в кабинете. Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».

/* let a = +prompt("Количество учеников в классе:");
let b = +prompt("Количество парт в классе:");

function numberOfDesk(a, b) {
    let n = 0;
    let str;
    n = ~~(a / 2) + a % 2;
    if (n == b)
        str = "Вы ввели нужное количество парт";
    if (n > b)
        str = "Не хватает " + (n-b) + " парт";
    if (n < b)
        str = "лишних парт: " + (b-n);
    return str;
}

console.log(numberOfDesk(a, b)); */



//task 4.
//Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. 
//Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание.

/* let mark = +prompt("Введите отметку от 1 до 10:");

function textMark(mark) {
    let str;
    if (mark >= 1 && mark <= 10) {
        switch (mark) {
            case 1:
            case 2:
                str = "Unsatisfactory";
                break;
            case 3:
            case 4:
                str = "Satisfactory";
                break;
            case 5:
                str = "Almost good";
                break;
            case 6:
                str = "Good";
                break;
            case 7:
                str = "Very good";
                break;
            case 8:
                str = "Almost excellent";
                break;
            case 9:
                str = "Excellent";
                break;
            case 10:
                str = "Brilliant";
                break;
            default:
                str = "error";
        }
    } else
        str = "error";
    return str;
}

console.log(textMark(mark)); */



//task 5.
//Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), 
//пока не будет введено число 0.

/* function number() {
    let n;
    do {
        n = +prompt("Введите число (для окончания 0):");
    } while (!(n == 0))
}
number(); */


//task 6.
//Перепишите функцию из задачи 3 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, 
//выводила эту сумму в консоль, а возвращала количество введённых чисел.

/* function number() {
    let x;
    let n=0;
    let sum = 0;
    do {
        x = +prompt("Введите число (пока их сумма < 100):");        
        sum +=x;
        n++;
    } while (sum < 100)
    console.log(sum);
    return n;
}
console.log(number()); */



//task 7.
//Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.

/* let x = +prompt("Введите число, чтобы узнать, простое ли оно:");

function simple(x) {
    for (let i = Math.floor(Math.sqrt(x)); i > 1; i--) {
        if (!(x % i))
            return "Введенное число не является простым";
    }
    return "Введенное число - простое";
}
console.log(simple(x)); */



//task 8.
// Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому
//номеру месяца. Если месяц с таким номером существует, функция возвращает имя сезона 
//(лето, осень, зима, весна), к которому относится месяц. Если нет –сообщение об ошибке.

/* let number = +prompt("Введите номер месяца, чтобы узнать пору года:");

function month(number) {
    switch (number) {   
        case 12:
        case 1:
        case 2:
            return "winter";          
        case 3:
        case 4:
        case 5:
            return "spring";           
        case 6:
        case 7:
        case 8:
            return "summer";           
        case 9:
        case 10:
        case 11:
            return "autumn";           
        default:
            return "error";
    }
}

console.log(month(number)); */



//task 9.
//Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 
//или делящиеся на 7 (в убывающем порядке).

/* function seven() {
    for (let i = 99; i > 9; i--)
        if (i % 10 == 7 || !(i % 7))
            console.log(i);
}
seven(); */

//task 10.
//Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители,
//а возвращает количество делителей.

/* let x;
let n = 1;

function divider(x) {
    let str = x;
    console.log("Делители числа " + x + ":");
    for (let j = Math.floor(x / 2); j >= 1; j--)
        if (!(x % j)) {
            str = str + "  " + j + " ";
            n++;
        }
    console.log(str);
    return n;
}

for (let i = 2; i < 21; i++) {
    n = 1;  
    console.log(divider(i));
} */

//task 11.
//Решите задачу 10 в общем виде: вместо 2 и 20 – аргументы x и y.

//не поняла условие...


//task 12.
//Создайте функцию с параметрами size (число) и unit (строка). В unit передаются единицы измерения 
//информации («Кб», «Мб», «Гб»), в size – количество таких единиц. Функция возвращает количество байт в size.

/* let unit = prompt("Введите единицы измерения информации: Кб, Мб или Гб");
let size = +prompt("Введите количество таких единиц информации:");

function info(size, unit) {
    if (unit == "Кб"||unit == "КБ"||unit == "кб"||unit == "Килобайты"||unit == "килобайты")
        size *=2**10 ;
    else if (unit == "Мб"||unit == "МБ"||unit == "мб"||unit == "Мегабайты"||unit == "мегабайты")
        size *= 2**20;
    else if (unit == "Гб"||unit == "ГБ"||unit == "гб"||unit == "Гигабайты"||unit == "гигабайты")
        size *= 2**30;
    else
        size = "error";
    return size;
}

console.log(info(size, unit)+ " байт"); */



//task 13.
//Создайте функцию, которая ищет наибольший общий делитель двух чисел.

/* let x = +prompt("Введите первое число:");
let y = +prompt("Введите второе число:");
console.log("НОД(" + x + ";" + y + "):");

let rez = 1;

function GrCommonDev(x, y) {
    for (let i = 1; i <= x; i++)
        if (!(x % i) && !(y % i)) {
            rez *= i;
            x /= i;
            y /= i;
            i = 1;
        }
}

GrCommonDev(x, y);

console.log(rez); */


//task 14.
//Решите задачу 13 через рекурсию.

/* let x = +prompt("Введите первое число:");
let y = +prompt("Введите второе число:");
console.log("НОД(" + x + ";" + y + "):");

let rez = 1;
let i = 1;

function GrCommonDev(x, y, i) {
    if (i < x) {
        i++;
        if (!(x % i) && !(y % i)) {
            rez *= i;
            GrCommonDev(x / i, y / i, 1);
        } else
            GrCommonDev(x, y, i++);
    }
}

GrCommonDev(x, y, i);

console.log(rez); */

//task 15.
//Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n, 
//будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).

/* let n = +prompt("Введите количество карандашей");

function words(n) {
    if (n < 0)
        console.log("error");
    if (n % 100 > 10 && n % 100 <= 20)
        console.log(n + " карандашей");
    else {
        if (n % 10 == 1)
            console.log(n + " карандаш");
        if (n % 10 > 1 && n % 10 <= 4)
            console.log(n + " карандаша");
        if (n % 10 >= 5 || n % 10 == 0)
            console.log(n + " карандашей");
    }
}

words(n); */



//task 16.
//Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов 
//двух целых однозначных чисел.

/* let number = +prompt("Введите число для проверки на его представление в виде суммы квадратов целых однозначных чисел:");
let p = 0;

function square(number) {
    for (let i = 1; i < 10; i++)
        for (let j = i; j < 10; j++)
            if (number == (i * i + j * j))
                console.log(number + " = " + i + "^2 + " + j + "^2");
            else
                p++;
    if (p == 45)
        console.log("Число " + number + " не может быть представлено в виде суммы квадратов двух целых однозначных чисел");
}

square(number); */
