//window.addEventListener('DOMContentLoaded', function() {
//    window.onload = function () {
//task 1;

function User(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getFullName = function () {
        return this.name + ' ' + this.surname;
    };
}

function Student(name, surname, year_start) {
    User.apply(this, arguments);

    let year = year_start;
    let cur_year = (new Date()).getFullYear();
    this.getCourse = function () {
        let rez = cur_year - year;
        let str;
        if (rez > 5)
            str = 'Закончил(а) ВУЗ в ' + (year + 5);
        else
            str = 'Студент ' + rez + ' курса';
        return str;
    }

}

let student = new Student('Irina', 'Goroshko', 2010);
console.log(student.getFullName());
console.log(student.getCourse());


//task 2; Напишите программу, расчиытвающую стоимость и калорийность гамбургеров (чисбургер, бигмак и тд), 
//используя ООП подход.

function Burger() {
    this.i = 5;
    this.ingredient = {
        bread: {
            cost: 0.4,
            cal: 100
        },
        beef: {
            cost: 0.8,
            cal: 70
        },
        chicken: {
            cost: 0.5,
            cal: 50
        },
        cheese: {
            cost: 0.35,
            cal: 20
        },
        fish: {
            cost: 0.7,
            cal: 45
        },
        onion: {
            cost: 0.1,
            cal: 3
        },
        salad: {
            cost: 0.2,
            cal: 3
        },
        vegetables: {
            cost: 0.3,
            cal: 5
        },
        sous: {
            cost: 0.3,
            cal: 15
        }
    }
}

Burger.prototype.burgerCost = function (obj) {
    let sum_cost = 0;
    for (prop in obj)
        sum_cost += obj[prop]['cost'];
    console.log('стоимость ' + this.constructor.name + ': ' + sum_cost.toFixed(2));
}

Burger.prototype.burgerCal = function (obj) {
    let sum_cal = 0;
    for (prop in obj)
        sum_cal += obj[prop]['cal'];
    console.log('ккал ' + this.constructor.name + ': ' + sum_cal);
}

/* гамбургер */
function Gamburger() {
    Burger.apply(this);
    this.ingr = ['bread', 'beef', 'onion', 'vegetables', 'sous'];
}

Gamburger.prototype = Object.create(Burger.prototype);
Gamburger.prototype.constructor = Gamburger;

Gamburger.prototype.createObj = function () {
    this.obj = {}
    for (prop in this.ingredient) {
        if (this.ingr.indexOf(prop) != -1)
            this.obj[prop] = this.ingredient[prop];
    }
}

Gamburger.prototype.cost = function () {
    Gamburger.prototype.createObj.apply(this);
    Burger.prototype.burgerCost.call(this, this.obj);
}
Gamburger.prototype.cal = function () {
    Burger.prototype.burgerCal.call(this, this.obj);
}

/* чизбургер */
function Сheeseburger() {
    Burger.apply(this);
    this.ingr = ['bread', 'beef', 'onion', 'cheese', 'sous'];
}

Сheeseburger.prototype = Object.create(Burger.prototype);
Сheeseburger.prototype.constructor = Сheeseburger;

Сheeseburger.prototype.cost = function () {
    Gamburger.prototype.createObj.apply(this);
    Сheeseburger.prototype.burgerCost.call(this, this.obj);
}
Сheeseburger.prototype.cal = function () {
    Burger.prototype.burgerCal.call(this, this.obj);
}

// и т. д. ...

let gamburger = new Gamburger();
gamburger.cost();
gamburger.cal();

let cheeseburger = new Сheeseburger();
cheeseburger.cost();
cheeseburger.cal();

//task 3;

addEventListener('DOMContentLoaded', function () {
    document.getElementById('hour').addEventListener("keypress", function (event) {
        if (/\D/.test(event.key)) {
            event.preventDefault();
        }
    });
    document.getElementById('minute').addEventListener("keypress", function (event) {
        if (/\D/.test(event.key)) {
            event.preventDefault();
        }
    });
    document.getElementById('remind-form').addEventListener('submit', function () {
        event.preventDefault();
        let now = new Date();
        let hour_now = now.getHours();
        let minutes_now = now.getMinutes();
        let hour_input = document.getElementById('hour').value;
        let minutes_input = document.getElementById('minute').value;

        let delay = Math.abs(hour_input - hour_now) * 3600000 + Math.abs(minutes_input - minutes_now) * 60000;
        console.log(delay);


        function func() {
            document.getElementById('audio').play();
            confirm(document.getElementById('user-info').value);
        }
        window.setTimeout(func, delay);

    });

});

//});
