//практика
//task 1;
//Напишите функцию counterFactory(start, step), которая при вызове возвращает другую функцию – счётчик tictoc().
//start – стартовое значение счётчика, step – его шаг. При каждом вызове tictoc увеличивает значение счётчика 
//на step.

function counterFactory(start, step) {
    return function tictoc() {
        start += step;
        return start;
    };
}

let tictoc = counterFactory(0, 5);

console.log(tictoc())
console.log(tictoc());
console.log(tictoc());


//task 2;
//Напишите функцию take(tictoc, x), которая вызывает функцию f заданное число (x) раз и возвращает массив
//с результатами вызовов.

function take(f, x) {
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr[i] = f();
    }
    return arr;
}
console.log(take(tictoc, 5));


//task 3;
//Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите 
//в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём 
//массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее 
//количество букв с во всех элементах массива.

let str = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива."
console.log(str);

function createArrFromStr(string) {
    let arr = [];
    string = string.replace(/[.!?;]$/, "");
    arr = string.split(/[,.]?\s+/);
    return arr;
}
let array = createArrFromStr(str);
console.log(array);

function sortAndRev(arr) {
    arr = arr.sort(function (a, b) {
        return a.length - b.length;
    });
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("");
    }
    return arr;
}
console.log(sortAndRev(array));

function countLet(arr) {
    return arr.join("").length;
}
console.log("\nКоличество букв: " + countLet(array));

//task 4;
//Дан код: ...
//Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'Привет, Иванов Иван'. Слово 'привет' возьмите 
//из свойства объекта obj, а 'Иванов' и 'Иван' задайте как параметры функциями.

let obj = {
    greeting: "Привет"
};

function func(surname, name) {
    alert(this.greeting + ', ' + surname + ' ' + name);
}
//func.call(obj, 'Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'

//task 5;
//Перепишите задачу так, чтобы вместо call применялся apply.

//func.apply(obj, ['Иванов', 'Иван', 'Иванович']);

//homework
//task 1;
//Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. Подсчитайте количество таких 
//символов во всех элементах массива, как в задаче 3 из первой части практики.

function countSymbUnicode(uniCode) {
    return arguments[1].join("").match(new RegExp(String.fromCharCode(uniCode), 'g')).length;
}
console.log(countSymbUnicode("и".charCodeAt(), array));


// task 2;
//Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, фиксируя искомый символ. 

function symbUnicode(uniCode) {
    function countSymbInString(arr) {
        return arr.join("").match(new RegExp(String.fromCharCode(uniCode), 'g')).length;
    }
    return countSymbInString;
}

let searchSymb = symbUnicode("и".charCodeAt());
let count = searchSymb(array);
console.log(count + " - найдено с помощью частичной функции");

//task 3;
//Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния, которые с 2000 по 2013 выросли в населении.

console.log(data);

let filterFirst = data.filter(function (elem) {
    return elem.state == "California" && +(elem["growth_from_2000_to_2013"].replace(/%/, "")) > 0;
});
console.log(filterFirst);

//task 4;
//Подсчитайте, сколько миллионов населения живёт во всех городах на широте от 25 до 30 градусов.

let sum = data.reduce(function (currSum, item) {
    return item["latitude"] > 25 && item["latitude"] < 30 ? currSum += +item.population : currSum;
}, 0);

console.log(sum);

//task 5;
//Создайте массив только из тех городов, которые начинаются на букву D, при этом отсортируйте элементы этого массива по названию города.

let cityD = data.filter(function (item) {
    return /^D/.test(item["city"]);
});
console.log(cityD); // выводится сразу отсортированный

let sort = cityD.sort(function (a, b) { // это по идее не нужно
    return a["city"] > b["city"] ? 1 : -1;
});
console.log(sort);

//task 6;
//Преобразуйте представленный массив "Города" в объект "Штаты":
//для каждого штата – отдельное свойство объекта (ключ = название штата);
//значение каждого свойства – массив городов;
//каждый элемент массива – название города, население и место в общем рейтинге (rank).



function createObjState(arr) {
    let setState = [];
    let stateObj = {};

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i].state in setState)) {
            setState[i] = arr[i].state;
            stateObj[arr[i].state] = [];
        }
    }
    for (let key in stateObj) {
        let j = 0;
        for (let i = 0; i < arr.length; i++) {
            if (key == arr[i].state) {
                stateObj[key][j++] = {
                    "city": arr[i].city,
                    "population": arr[i].population,
                    "rank": arr[i].rank
                };
            }
        }
    }

    return stateObj;
}
console.log(createObjState(data));