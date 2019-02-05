//практика 
//task 1.
//Создайте массив из чисел от 1 до 35. Вырежьте из него первые 10 элементов, а затем добавьте их 
//в конец массива. Разверните в обратном порядке элементы с 11 по 20. Удалите элементы с 21 по 25, 
//на их место вставьте пять первых степеней двойки. Элементы с 26 по 30 замените на единицы. 
//Элементы с 31 по 35 склейте в одну строку, разделяя пробелами, и замените на итоговую строку.

/* let arr=[];

for(let i=0; i<35; i++){
    arr[i]=i+1;
}
console.log(arr);   //массив из чисел от 1 до 35.

arr = arr.concat(arr.splice(0,10));   //вырезали из него первые 10 эл-в, а затем добавили их в конец массива.
console.log(arr);

arr = arr.splice(0,10).reverse().concat(arr);  //Развернули в обратном порядке элементы с 11 по 20.
console.log(arr);

for(i=10; i<15; i++){       //вместо элементов с 21 по 25 вставили пять первых степеней двойки
    arr[i] = 2**(i%10+1);
}
console.log(arr);

arr.fill(1,15,20);   //элементы с 26 по 30 заменили на единицы 
console.log(arr);

arr.splice(20,5, arr.slice(20,25).join(" "));   //эл-ты с 31 по 35 склеиваем в одну строку и вставляем ее вместо этих элементов
console.log(arr); */


//task 2
//Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.

/* let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 3 + 1);
}
console.log(array);

let repeat;

function delRepeat() {
    for (let i = 0; i < array.length; i++) {
        repeat = array[i];
        for (let j = array.length-1; j > i; j--) {
            if (repeat == array[j])
                array.splice(j, 1);
        }
    }
    return array;
}
array = console.log(delRepeat()); */

//task 3
//Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.

/* let array = [];

for (let i = 0; i < 8; i++) {
    array[i] = Math.floor(Math.random() * 3); //создаем рандомный массив из 0, 1, 2
}

let j = 0;
while (j < 2) {
    array.splice(Math.floor(Math.random() * 8), 0, NaN); //добавляем в массив (на произвольные места) два значения NaN
    j++;
}
j = 0;
while (j < 2) {
    array.splice(Math.floor(Math.random() * 8), 0, "str"); //добавляем в массив (на произвольные места) два значения "str"
    j++;
}
console.log(array); // массив готов

function delRepeat() {
    for (let i = array.length - 1; i > -1; i--) {
        if (!array[i])
            array.splice(i, 1);
    }
    return array;
}
array = console.log(delRepeat()); */


//homework
//task 1;
//Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len), 
//которая возвращает массив случайных чисел длиной len.
console.log("\n");

let len = +prompt("Введите длину массива:");
let arr = [];

function getRandomArray(len) {
    for (let i = 0; i < len; i++)
        arr[i] = Math.floor(Math.random() * 20);
    return arr;
}

console.log(getRandomArray(len));


//task 2;
//Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.

let str = "";

function average(arr, len) {
    let rez = 0;
    for (let i = 0; i < len; i++)
        rez += arr[i];
    console.log(rez / len + " - среднее арифметическое чисел массива");
    for (let i = 0; i < len; i++)
        if (arr[i] > rez / len)
            str = str + arr[i] + " ";
    return str;
}

console.log(average(arr, len) + " - элементы массивы, которые больше среднего арифметического его чисел");

//task 3;
//Найдите два наименьших элемента массива.

str = "";
let nextMin = arr[0];
let previousMin = -Infinity;

function mintwo(arr, len) {
    for (let i = 0; i < len; i++) {
        if (arr[i] < nextMin && arr[i] > previousMin) {
            nextMin = arr[i];
        }
    }
    str = str + nextMin + " ";
    previousMin = nextMin;
    for (let i = 0; i < len; i++) {
        if (!(arr[i] == nextMin)) {
            nextMin = arr[i];
            break;
        }
    }
    return str;
}

for (let j = 0; j < 2; j++) {
    mintwo(arr, len);
}
console.log(str + " - два наименьших элемента массива");


//task 4;
//Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд, 
//а на освободившиеся места вставьте нули.
console.log("\n");
let arr2 = [];

function getRandomArray2() {
    for (let i = 0; i < len; i++)
        arr2[i] = Number(Math.random().toFixed(4));
    return arr2;;
}

console.log(getRandomArray2());
let count = 0;

function deleteLessElement() {
    for (let i = 0; i < len; i++)
        if (arr2[i] < 0.5) {
            arr2.splice(i, 1);
            count++;
        }
    for (let i = len - 1, j = 0; j < count; i--, j++)
        arr2[i] = 0;

    return arr2;
}

console.log(deleteLessElement());

//task 5;
//Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2,
//второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.

console.log("\n");
console.log("Массив 1: ", getRandomArray(len));
console.log("Массив 2: ", getRandomArray2());

let arrSum = [];

function arraySum() {
    for (let i = 0; i < len; i++)
        arrSum[i] = arr[i] + arr2[len - 1 - i];
    return arrSum;
}
console.log("Их сумма: ", arraySum());


//task 6;
//Отсортируйте массив методом пузырька.
console.log("\n");
console.log(getRandomArray(len), " - исходный массив для сортировки пузырьком");
let flag;
let buf;

function bubbleSort() {
    for (let i = 0; i < arr.length; i++) {
        flag = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                buf = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = buf;
                flag = 1;
            }
        }
        if (flag == 0)
            break;
    }
    return arr;
}

console.log(bubbleSort(), " - отсортированный массив");

//task 7;
//Проверьте, есть ли в массиве два числа, сумма которых очень близка к 1 (0.999 < sum < 1.001). 
//Если такая пара (или такие пары) есть, выведите их в консоль.

console.log("\nМассив:", getRandomArray2());

let sum = 0;

function sumIsOne() {
    for (let i = 0; i < arr2.length; i++)
        for (let j = arr2.length - 1; j > i + 1; j--) {
            sum = arr2[i] + arr2[j];
            if (sum > 0.9 && sum < 1.1)
                console.log(arr2[i] + " + " + arr2[j] + " = " + sum);
        }
}
console.log("Пары чисел, сумма которых близка к 1:");
sumIsOne();


//task 8;
//Создайте массив той же длины, что исходный. На месте самого большого числа исходного массива 
//в новом вставьте число 1, на месте второго по величине – 2 и так далее.

let seq = [];
let seq2 = [];
let arr10 = [19, 7, 8, 15, 14, 5, 15, 14];
console.log("\nМассив:", arr10);
//console.log("\nМассив:", getRandomArray(len));
let z = 1;

function orderMax() {
    for (let i = 0; i < arr10.length; i++) {
        seq[i] = arr10[i];
        seq2[i] = arr10[i];
    }

    for (let i = 0; i < arr10.length; i++) {
        //flag = 0;
        for (let j = 0; j < arr10.length - i; j++) {
            if (arr10[j] > arr10[j + 1]) {
                buf = arr10[j];
                arr10[j] = arr10[j + 1];
                arr10[j + 1] = buf;
                //flag = 1;
            }
        }
        let p = 0;
        for (let k = 0; k < arr10.length; k++) {
            if (seq[k] == arr10[arr10.length - i - 1]) {
                seq2[k] = z;
                p++;
            }
        }
        if (i == 0)
            z++;
        else if (!(arr10[arr10.length - i - 1] == arr10[arr10.length - i]))
            //if (p == 1)
            z++;

        /*  if (flag == 0)
             break; */
    }

    return seq2;

}

console.log(orderMax());