//task 1 (вывод простых чисел от 2 до x)
/* let x = +prompt("Введите конечное число:");
for (let i = 2; i <= x; i++)
    for (let j = 2; j <= i; j++) {
        if (i == j)
         console.log(i);   
        if (!(i % j))
            break;
    } */

//task 2 (вывод всех четных чисел от x до 0)
/* let x = +prompt("Введите конечное число:");
for (; x >= 0; x--)
    if (!(x % 2))
        console.log(x); */


//task 3 (задача 2 через while)
/* let x = +prompt("Введите конечное число:");
while (x >= 0) {
    if (!(x % 2))
        console.log(x);
    x--;
} */


//task 4 (В доме 5 подъездов по 20 квартир каждый. Получите от пользователя номер квартиры и взамен 
//выдайте в консоль номер подъезда. Учитывайте, что пользователь может ввести число меньше 1 или больше 100)
/* let x;
do
    x = +prompt("Введите номер вашей квартиры (от 1 до 100):");
while (x < 1 || x > 100);
if (!(x % 20))
    x = (x / 20)
else
    x = (x / 20) - (x % 20 / 20) + 1;
console.log("Номер вашего подъезда:", x); */


//task 5 (Получите от пользователя строку с названием марки автомобиля. Напишите конструкцию switch/case,
// которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.) и выдавать в консоль
// введённую строку + страну происхождения автомобиля (например, "Ford – страна происхождения США").
// Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".)
/* let str = prompt("Введите марку машины (с заглавной буквы):");
switch (str) {
    case "Ford":
        console.log("Ford - страна происхождения Америка");
        break;
    case "Toyota":
    case "Nissan":
        console.log(str + " - страна происхождения Япония");
        break;
    case "Hyundai":
        console.log("Hyundai - страна происхождения Корея");
        break;
    case "Mercedes-Benz":
    case "BMW":
    case "Opel":
        console.log(str + " - страна происхождения Германия");
        break;
    default:
        console.log(str, " - страна происхождения неизвестна");
} */



//task 6 (Пользователь вводит год. Определите, является ли этот год високосным.)
/* let year = +prompt("Введите год и узнаете, является ли он високосным:");
if ((!(year % 4) && year % 100) || !(year % 400))
    console.log(year + " - високосный");
else
    console.log(year + " - не високосный"); */


//task 7 (Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа. 
//Например, для числа 7: 7x1=7 7x2=14 ... 7x10=70)
/* let number = +prompt("Введите число от 1 до 20:");
for (let i = 1; i <= 10; i++)
    console.log(numbe + "x" + i + "=" + number * i); */


// task 8 (Выведите в консоль сумму всех нечётных чисел от 1 до 50. Дополнительно: 
//решите эту задачу, используя оператор continue.)
/* let sum = 0;
for (let i = 1; i <= 50; i++)
    if (i % 2)
        sum += i;
console.log("Сумма всех нечетных чисел от 1 до 50 равна:", sum); */


// task 9 (Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.)
/* let x = 0;
let y = 1;
let sum = 0;
console.log("Первые 15 чисел Фибоначчи:");
console.log(x);
console.log(y);
for (let i = 1; i <= 13; i++) {
    sum = x + y;
    x = y;
    y = sum;
    console.log(sum);
} */


// task 10 (Используя циклы (и операцию конкатенации), выведите в консоль "шахматную доску":)

/* let n = +prompt("Введите количество строк в шахматной доске:");
let str = " #";
let j = 2;
for (let i = 0; i < n; i++) {
    for (; j < n - 1; j+=2) {
        str = str + " #";
    }
    console.log(str);
    if (!(i % 2)) {
        str = "#";
        j = 1;
    } else {
        str = " #";
        j = 2;
    }
} */