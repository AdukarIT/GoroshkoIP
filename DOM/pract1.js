addEventListener("DOMContentLoaded", function(){

//практика (найдите на странице...)
//task 1. Все элементы label внутри таблицы. Должно быть 3 элемента.
console.log(document.querySelectorAll('table label'));
console.log(document.getElementById('age-list').getElementsByTagName('label'));

//task 2. Первую ячейку таблицы (со словом "Возраст").
console.log(document.querySelector('table td'));

//task 3. Вторую форму в документе.
console.log(document.querySelectorAll('form')[1]);

//task 4. Форму с именем search, без использования её позиции в документе.
console.log(document.querySelector('form'));

//task 5. Элемент input в форме с именем search. Если их несколько, то нужен первый.
console.log(document.querySelector('form[name="search"] input'));

//task 6. Элемент с именем info[0], без точного знания его позиции в документе.
console.log(document.getElementsByName("info[0]"));

//task 7. Элемент с именем info[0], внутри формы с именем search-person.
console.log(document.querySelector('form[name="search-person"] [name=info\\[0\\]]'));

});