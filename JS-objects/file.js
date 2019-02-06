//практика
//task 1
//Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите в консоль элемент с ключом 'c' двумя способами:
//через квадратные скобки и через точку. Затем выведите все свойства объекта через цикл for..in.


let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(obj.c + " " + obj["c"]);

for (let key in obj) {
    console.log(obj[key]);
}

//task 2;
//Создайте объект city, добавьте ему свойства name (название города, строка) и population (население, число).
console.log("\n");

let city = new Object();

city.name = "Minsk";
city.population = 1982500;

console.log(city);

//task 2;
//Создайте массив из шести объектов такого же вида, как city из задачи 2 – по одному для каждого
//областного города Беларуси.
console.log("\n");

let Minsk = {
    name: "Minsk",
    population: 1982500
}
let Vitsebsk = {
    name: "Vitsebsk",
    population: 377960
}
let Grodno = {
    name: "Grodno",
    population: 370919
}
let Gomel = {
    name: "Gomel",
    population: 535693
}
let Brest = {
    name: "Brest",
    population: 347576
}
let Mogilev = {
    name: "Mogilev",
    population: 381353
}
let arr = [Minsk, Vitsebsk, Grodno, Gomel, Brest, Mogilev];

//task 4;
//Напишите функцию, которая принимает массив из задачи 3 в качестве параметра и выводит в консоль 
//информацию о каждом городе.

function cityInfo(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("CityName: " + arr[i].name + " with population " + arr[i].population);
    }
}
cityInfo(arr);

//task 5;
//Создайте в объектах с городами из задачи 3 метод getInfo, который возвращает строку с информацией 
//о городе (например, в таком формате: "Город Добруш, население – 18760 человек").

for(let i = 0; i < arr.length; i++){
    arr[i].getInfo = function(){
        return "\nГород "+ this.name + ",  население - " + this.population + " человек";
    }
}
console.log(Minsk.getInfo()); // проверка

//task 6;
//Создайте объект с информацией о себе (имя, фамилия, любимое занятие). Добавьте в него метод, 
//который выводит эту информацию в консоль в удобочитаемом формате.

let aboutMe = {
    firstName: "Irina",
    lastName: "Goroshko",
    hobby: "sleep"
}
aboutMe.output = function(){
    console.log("\nMy name is " + this.firstName + " " + this.lastName + ". I like to " + this.hobby + ".");
}
aboutMe.output();

//homework
//task 1
//Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет,
//есть ли в этом объекте свойство с именем, равным этой строке.
console.log("\n");

let house = {
    inCity: "Minsk",
    floor: 10,
    numberEntr: 4,
    color: "grey"

}

let str = "floor";

function check(house, str) {
    for (let i in house) {
        if (i == str) {
            return true;
        }
    }
}

console.log(check(house, str));


//task 2;
//Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название,
//ингредиенты и их необходимое количество (в виде вложенного объекта), а также количество порций (больше 1). 
//Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию, 
//выводит информацию об этом в консоль.
console.log("\n");

let salad = {
    name: "Caesar",
    ingredients: {
        greenSalad: 1,
        tomatoes: 0.5,
        chickenFillet: 150,
        whiteBread: 3,
        sauceCaesar: "to taste"
    },
    numberOfPortion: 2
}

function recipe(salad) {
    salad.ingredientsForOne = {};
    for (let i in salad.ingredients) {
        salad.ingredientsForOne[i] = salad.ingredients[i];
    }

    for (let key in salad.ingredients) {
        if (typeof salad.ingredients[key] == "number") {
            salad.ingredientsForOne[key] = (salad.ingredients[key]) / (salad.numberOfPortion);
        }
    }
    return salad.ingredientsForOne;
}

console.log(recipe(salad));

//task 3;
//Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает 
//объём цилиндра (используя this).

let cylinder = {
    radius: 5,
    height: 10
}

function volume() {
    return Math.PI * (this.radius ** 2) * this.height;
}
cylinder.volume = volume;

console.log("\nОбъем цилиндра: ", cylinder.volume());

//task 4;
//Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта 
//(не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту свойство canFly. 
//Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина,
// и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли 
//пингвин летать, и сообщает об этом в консоль.
console.log("\n");

let skipper = {
    creator: "DreamWorks",
    cartoon: "ThePenguinsOfMadagascar",
    voice: "Tom McGrath"
}

skipper.canFly = false;
skipper.sayHello = function () {
    console.log("Hi! My name is Skipper!");
}
skipper.fly = function () {
    if (this.canFly == false)
        console.log("Skipper can't fly");
    else
        console.log("Skipper can fly!");
}

console.log(skipper);
skipper.sayHello();
skipper.fly();