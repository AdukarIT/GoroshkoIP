//практика
//task 1;
//Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов, 
//каждый из которых – случайное число от 1 до 50.
let arr = [];

function getRandomArray() {
    for (let i = 0; i < 15; i++)
        arr[i] = +(Math.random() * 50 + 1).toFixed(4);
    return arr;
}
console.log(getRandomArray());

//task 2;
//Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива,
//минимальное и максимальное значения элементов.


let array = [];
/* let n = +prompt("Введите длину массива:");
let min = +prompt("Введите минимальное значение элементов массива:");
let max = +prompt("Введите максимальное значение элементов массива:"); */

function RandomArray(n, min, max) {
    for (let i = 0; i < n; i++)
        array[i] = +(Math.random() * (max - min) + min).toFixed(3);
    return array;
}
//console.log(RandomArray(n, min, max)); 

//task 3;
//Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html.
//Если оба условия выполнены, функция возвращает true, в ином случае – false.

let str = "https://www.scintilla.org/SciTERegEx.html";
let string = "https://www.scintilla.org";

function check(str) {
    if (str.indexOf("https://") == 0 && str.indexOf(".html") == str.length - 5)
        return true;
    else
        return false;
}
console.log("\n");
console.log(check(str));
console.log(check(string));


//task 4;
//Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.

/* str = "The most common languages used for Web programming are XML, HTML, JavaScript, Perl 5 and PHP.";
let symbol = prompt("Введите символ, который вы хотите найти в строке:");
let flag = 0;

function count(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == symbol) {
            flag++;
        }
    }
    return flag;
}
console.log("\n" + str);
console.log("Количество вхождений символа \""+ symbol + "\" в строке: " + count(str,symbol)); */

//task 5;
//Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же 
//символом (например, 'A' == 'a').

/* let symbol = prompt("Введите символ, который вы хотите найти в строке:");*/
let flag = 0;

function count(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == symbol.toLowerCase()) {
            flag++;
        }
    }
    return flag;
}
/*console.log("\n" + str);
console.log("Количество вхождений символа \""+ symbol + "\" в строке: " + count(str,symbol)); */

//task 6;
//Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».

let date = new Date();
console.log(date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));


//task 7;
//Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.


function numberOfSecond(date) {
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
console.log("\n" + numberOfSecond(date) + " - столько секунд прошло с начала текущего дня");


//task 8;
//Напишите функцию, которая принимает от пользователя строку. Если эта строка не содержит буквы «ф», 
//сгенерируйте собственную ошибку. Вызовите функцию так, чтобы при возникновении «поймать» ошибку в try/catch.

/* str = prompt("Введите строку с символом \"ф\"");

function testStr(str) {
    if (str.indexOf("ф") == -1)
        throw new Error("\nОшибка! Символ \"ф\" отсутствует");
    console.log("\nСтрока введена верно");
    console.log("Количество вхождений символа \"ф\" в строке: " + count(str, "ф"));
}

try {
    testStr(str);
} catch (e) {
    console.log(e.message);
} */


//homework
//task 1;

let o = 6;
let MIN = 1;
let MAX = 10;
let arrObj = RandomArray(o, MIN, MAX);


function createArrObj(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        let prom = arrObj[i];
        arrObj[i] = {};
        arrObj[i]["initial"] = prom;
        arrObj[i]["sqrt"] = Math.sqrt(prom);
        if (Math.floor(prom) == Math.round(prom)) // если число целое, то Math.floor = Math.ceil = true,
            arrObj[i]["floor"] = true; //если NaN , то Math.floor = Math.ceil = false,
        else //потому оставляю такие if  
            arrObj[i]["floor"] = false;
        if (Math.ceil(prom) == Math.round(prom))
            arrObj[i]["ceil"] = true;
        else
            arrObj[i]["ceil"] = false;
    }
    return arrObj;
}

console.log(arrObj);
console.log(createArrObj(arrObj));

//task 2;
//Добавьте в каждый элемент массива из задачи 3 ещё одно свойство: значение sqrt, округлённое до сотых.
//описка в условии?? может из задачи 1? в задаче 3 нет массива

for (let i = 0; i < arrObj.length; i++) {
    arrObj[i]["sqrt2"] = +(arrObj[i]["sqrt"]).toFixed(2);
}
console.log(arrObj);

//task 3;
//Напишите функцию, которая определяет, является ли строка палиндромом.

/* let phrase = prompt("Введите полиндром:");
let mark = 0;
let label = 0;

function palindrom(phrase) {
    for (let i = 0, j = phrase.length - 1; i < phrase.length / 2, j > (phrase.length - 1) / 2; i++, j--) {
        if (mark == 1)
            j++;
        if (label == 1)
            i--;
        if (phrase[i].toLowerCase() != phrase[j].toLowerCase()) {
            if (phrase[i] == " " || phrase[i] == "," || phrase[i] == "-")
                mark = 1;
            if (phrase[j] == " " || phrase[j] == "," || phrase[j] == "-" || phrase[j] == "." || phrase[j] == "!")
                label = 1;
            if (mark != 1 && label != 1)
                return "Введенная строка не является палиндромом.";
        } else {
            mark = 0;
            label = 0;
        }
    }
    return "\nВведенная строка является палиндромом.";
}

console.log(palindrom(phrase)); */

//task 4;
//Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего.
//Если таких символов несколько, функция должна возвращать строку из этих символов.

/* let seq = prompt("Введите строку");
let max = 0;
let str1 = "";
let repeat = [];

function oftenChar(seq) {

    for (let i = 0; i < seq.length; i++) {
        flag = 0;
        for (let j = 0; j < seq.length; j++) {
            if (seq[i] == seq[j])
                flag++;
        }
        repeat[i] = flag;  // массив, который каждому символу ставит в соответствие количество его повторений в строке

        if (flag > max)
            max = flag;
    }

    for (let i = 0; i <repeat.length; i++) {
        if (repeat[i] == max && str1.indexOf(seq[i]) == -1)
            str1 += seq[i];
    }
    return str1;
}

console.log("\n" + seq);
console.log(oftenChar(seq)); */


//task 5;
//Напишите функцию, которая получает в аргументы три строки – str, search, replace. Функция ищет 
//ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.



let str2 = "The indexOf() returns -1 if the value is not found. The indexOf() method is case sensitive.";
let search = "The indexOf()";
let replace = "The lastIndexOf()";
let substrBef, substrAfter;

function replaceSubstr(str2, search, replace) {
    while (str2.indexOf(search) != -1) {
        substrBef = str2.slice(0, str2.indexOf(search));
        substrAfter = str2.substr(str2.indexOf(search) + search.length);
        str2 = substrBef + replace + substrAfter;
    }
    return str2;
}

console.log(str2);
console.log(replaceSubstr(str2, search, replace));


//task 6;
//Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.

function replAtBigLet(str2) {
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] == " ") {
            substrBef = str2.slice(0, i + 1);
            substrAfter = str2.slice(i + 2);
            str2 = substrBef + str2[i + 1].toUpperCase() + str2.slice(i + 2);
        }
    }
    return str2;
}

console.log("\n" + str2);
console.log(replAtBigLet(str2));


//task 7;
//Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. Например, 
//строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".

let str3 = "Web programming, web development, web applications.";

//let str3  = prompt("введите строку");

function asterisk(str3) {
    for (let i = 0; i < str3.length - 1; i++) {
        for (let j = i + 1; j < str3.length; j++) {
            if (str3[j].toLowerCase() == str3[i].toLowerCase() && str3[j] != " " && str3[j] != "*") {
                substrBef = str3.slice(0, j);
                substrAfter = str3.slice(j + 1);
                str3 = substrBef + "*" + substrAfter;
            }
        }
    }
    return str3;
}

console.log("\n" + str3);
console.log(asterisk(str3));

//task 8;
//Напишите функцию, которая возвращает текущий день недели на русском языке.

let date2 = new Date();

function dateWeekdayRu(date2) {
    date2 = date2.toLocaleString('ru', {
        weekday: 'long'
    });
    return date2;
}

console.log("\n" + date2.toDateString());
console.log(dateWeekdayRu(date2));

//task 9;
//Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, используя функцию
//из задачи 8, выдаёт в консоль день недели для этой даты.

/* date2 = prompt("Введите дату в формате \"ДД-ММ-ГГГГ\"");
console.log("\n" + date2);

function weekdayNow(date2) {
    let DD = date2[0] + date2[1] + date2[2];
    substrBef = date2.slice(3, 6);
    substrAfter = date2.slice(6);
    date2 = substrBef + DD + substrAfter;
    date2 = new Date(date2);
    console.log(date2);
    date2 = dateWeekdayRu(date2);
    return date2;
}
console.log(weekdayNow(date2)); */

//task 10;
//Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит
//в консоль количество дней, оставшихся до его дня рождения. Напишите функцию, которая возвращает дату, 
//в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).

/* date2 = prompt("Введите свой день рождения \"ДД-ММ-ГГГГ\"");
let date3 = new Date();
let remainder;

console.log("\n" + date2);

function changeInputDate(date2) {
    let DD = date2[0] + date2[1] + date2[2];
    substrBef = date2.slice(3, 6);
    substrAfter = date2.slice(6);
    date2 = substrBef + DD + substrAfter;
    return date2;
}

function beforeBirthday(date2) {
    date2 = new Date(date2);

    if (date2.getMonth() > date3.getMonth() || (date2.getMonth() == date3.getMonth() && date2.getDate() > date3.getDate()))
        date2.setFullYear(date3.getFullYear());

    if (date2.getMonth() < date3.getMonth() || (date2.getMonth() == date3.getMonth() && date2.getDate() < date3.getDate()))
        date2.setFullYear(date3.getFullYear() + 1);

    remainder = date2 - date3; //получаем миллисекунды
    remainder /= 1000; //получаем секунды
    remainder /= 60; //получаем минуты
    remainder /= 60; //получаем часы
    remainder /= 24; //получаем дни
    return Math.floor(remainder);
}
date2 = changeInputDate(date2);
console.log("Количество дней до вашего дня рождения: " + beforeBirthday(date2));


function afterBirthday(date2) {
    date2 = new Date(date2);

    remainder = (date3 - date2) / 1000 / 3600 / 24; // количество дней, прошедших с дня рождения
    let i = remainder + (1000 - remainder % 1000); //ближайший 1000-дневный юбилей
    console.log("Ближайший 1000-дневный юбилей: " + i);
    remainder = Math.floor(i - remainder);
    return remainder;
}

console.log("Количество дней до ближайшего 1000-дневного юбилея через: " + afterBirthday(date2)); */

//task 11;

RandomArray(7, 1, 9);

for (let i = 0; i < array.length; i++)
    array[i] = Math.floor(array[i]);
console.log(array);

function checkSqrt(a) {
    if (Math.sqrt(a) == Math.floor(Math.sqrt(a)))
        return Math.sqrt(a);
    else
        throw new Error("Ошибка! Корень из числа не дает целый результат");
}


for (let i = 0; i < array.length; i++) {
    try {
        console.log(checkSqrt(array[i]));
    } catch (e) {
        console.log(e.message);
    } 
}