addEventListener('DOMContentLoaded', function () {

    // практика
    // task 1;
    // Создайте селект с несколькими опциями, добавьте одну опцию используя Javascript, сделайте так, чтобы по выбору опции выводилось
    // сообщение с данными этой опции

    // делали на занятии

    //task 2;
    // Создайте форму вычисления процентов по вкладу

    //task 3;
    //Создайте регулярное выражение для поиска трёх точек.
    console.log("... -these are three points ...".match(/\.{3}/g));

    //task 4;
    //Создайте regexp, который ищет все положительные числа, в том числе десятичные.

    console.log('4 -5 9.23 12.13.14 -452.1.24.10 123 0.0008 -158.12 0 2'.match(/(?<![-(\d+\.)])(\d+(\.\d+)|[1-9]+)(?!\d?(\.\d+))/g)); //альтернация, чтобы не выводило 0
    // знаю, что сложно, но не могу упростить (даже одинаковые скобки цифрой не заменяются почему-то)

    //task 5;
    //Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd

    console.log('#eee, #asdewr : #eeeddd #eecc'.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/g));

    //task 6;
    //Предложите строку, которая подойдет под выражение ^$

    console.log(/^$/.test(''));

    //task 7;
    //Создайте HTML-форму регистрации с email и паролем. По клику провести 
    //валидацию пароля и email, где пароль должен содержать хотя бы одну цифру, 
    //один спецсимвол и одну букву, а так же быть длиннее 6 знаков. 
    //При прохождении валидации выводить приветственное сообщение, в противном 
    //случае - ошибку.

    const formRegistr = document.querySelector('#registration');

    let password = document.querySelector('#password'),
        password_note = document.querySelector('#password+span');
    let email = document.querySelector('#email'),
        email_note = document.querySelector('#email+span');

    formRegistr.addEventListener('submit', function (event) {

        event.preventDefault();
        if (email_note.innerHTML == '✓' && password_note.innerHTML == '✓')
            alert('данные отправлены');
        else
            alert('ошибка ввода данных');
    });

    email.addEventListener('input', function () {
        if (/^([a-zA-Z0-9_.+-])+@([a-zA-Z0-9-])+\.[a-zA-Z0-9]{2,4}$/g.test(email.value))
            email_note.innerHTML = '✓';
        else
            email_note.innerHTML = '<span>⚠</span>';
    });


    password.addEventListener('input', function () {
        if (/^(?=.*[0-9]+)(?=.*[a-zA-Z]+)(?=.*[!@#$%^&*+/?.,;:-])[0-9a-zA-Z!@#$%^&*+/?.,;:-]{6,}$/g.test(password.value))
            password_note.innerHTML = '✓';
        else
            password_note.innerHTML = '<span>⚠</span>';
    });


    //homework

    //task 1.
    let name1 = document.querySelector('#name'),
        name1_note = document.querySelector('#name+span'),
        minutes1 = document.querySelector('#minutes'),
        minutes1_note = document.querySelector('#minutes+span');

    name1.addEventListener('input', function () {
        if (name1.value == '')
            name1_note.innerHTML = '<span class="red">⚠ заполните поле</span>';
        if (/^[A-Za-zа-яА-ЯёЁ ]{3,}$/g.test(name1.value))
            name1_note.innerHTML = '✓';
        else
            name1_note.innerHTML = '<span class="red>⚠</span>';
    });

    minutes1.addEventListener('input', function () {
        if (minutes1.value == '')
            minutes1_note.innerHTML = '<span class="red">⚠ заполните поле</span>';
        else if (!isNaN(minutes1.value))                 //if (/^[0-9]+$/g.test(minutes1.value))
            minutes1_note.innerHTML = '✓';
        else
            minutes1_note.innerHTML = '<span class="red">⚠</span>';
    });

    function placeOrder() {
        if (name1_note.innerHTML == '✓' && minutes1_note.innerHTML == '✓')
            alert('данные отправлены');
        else
            alert('ошибка ввода данных');
    }

    let form1 = document.querySelector('#task1');

    form1.addEventListener('submit', placeOrder);

    //task 2;

    let btn_clear = document.querySelector('#clear');
    let message = document.querySelector('#message');

    btn_clear.addEventListener('click', function () {
        message.value = '';
    });

    //task 3;

    function validate(id_form) {
        let mail = id_form.querySelector('[type="email"]');
        let text = id_form.querySelectorAll('[type="text"]');

        if (!(mail == null)) {
            mail.insertAdjacentHTML("afterEnd", "<span class='green'></span>");
            mail.addEventListener('input', function () {
                if (/^([a-zA-Z0-9_.+-])+@([a-zA-Z0-9-])+\.[a-zA-Z0-9]{2,4}$/g.test(mail.value))
                    mail.nextSibling.innerHTML = '✓';
                else
                    mail.nextSibling.innerHTML = '';
            });
        }

        if (!(text == null)) {
            text.forEach(function (elem) {
                elem.insertAdjacentHTML("afterEnd", "<span class='green'></span>");
                elem.addEventListener('input', function () {
                    if (/^[A-Za-zа-яА-ЯёЁ ]+$/.test(elem.value))
                        this.nextSibling.innerHTML = '✓';
                    else
                        this.nextSibling.innerHTML = '';
                });
            });
        }

    }

    //task 4;

    function send(id_form) {
        let mail = id_form.querySelector('[type="email"]');
        let text = id_form.querySelectorAll('[type="text"]');
        validate(registration_task3);

        id_form.addEventListener('submit', function (e) {
            e.preventDefault();

            let flag1;
            let flag2;
            if (!(text == null)) {
                flag1 = Array.from(text).every(function (input) {
                    return (input.nextSibling.innerHTML == '✓');
                });
            }

            if (!(mail == null) && mail.nextSibling.innerHTML == '✓')
                flag2 = true;


            let inputs = id_form.querySelectorAll('[type="email"], [type="text"]');
            if (flag1 && flag2){
                alert('Данные отправлены');
                Array.from(inputs).forEach(function(elem){
                    elem.value = '';
                    elem.nextSibling.innerHTML = '';
                    if(elem.classList.contains('light'))
                    elem.classList.remove('light');
                });
            }
            else {
                Array.from(inputs).forEach(function (elem) {
                    if (!(elem.nextSibling.innerHTML == '✓')) {
                        console.log(elem.nextSibling);
                        elem.classList.add('light');
                    }
                });
            }
        });
    }
    send(registration_task3);

//task 5;

console.log(str);
let changed_str = str.innerHTML.replace(/функция/gi, 'ФУКЦИЯ');
btn_chng.addEventListener('click', function(){
    str.innerHTML = changed_str;
});

//task 6;

console.log(/^(0?[1-9]|1[012])(:[0-5]\d) ?[AaPp][mM]$/.test('12:45pm'));

//task 7;

let string = 'Splits given STRING INTO an array by separating the STRING INTO substring.';
result = string.replace(/(\b\w+\b)(?=.*\b\1\b)/ig, '');
console.log(result);



});