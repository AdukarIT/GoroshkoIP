//homework
//task 1; Дан элемент #elem. Добавьте ему класс "www".

document.getElementById('elem').className = "www";
console.log(document);

//task 2; Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

if (document.getElementById("elem").classList.contains("www"))
    document.getElementById("elem").classList.remove("www");
console.log(document.body);


//task 3; Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, а возвращает массив из всех 
//элементов соответствующих этому тегу. Поиск идет в теге body

function recursiveSearchTags(a, b) { //почему recursive??
    let body = a.body;
    return body.querySelectorAll(b);
}
console.log(recursiveSearchTags(document, "div"));

//task 4; Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
//Сделайте так, чтобы четные позиции имели красный фон.


const arr = ["this", "is", "task", "4;", "the", "end", "is", "comming", "soon"];

let ul = document.querySelector('ul');
arr.forEach(function (elem, index) {
    ul.insertAdjacentHTML('beforeEnd', '<li>' + elem + '</li>');
    if (index % 2) ul.childNodes[index].style.background = 'red';
});

console.log(ul);

//task 5; Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

console.log(document.querySelector('#elem').previousElementSibling.innerHTML += "!");

//task 6; Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст
//в параграф

/* function wrapInParagraph() {                                  //не работает ...пока
    let arr = document.querySelectorAll('div');     
    arr.forEach(function (elem) {
        for (let i = elem.firstChild, j=0; j<3; j++, i = elem.nextSibling) {
            if (i.nodeType == 3){
                console.log(i);
                i.toString().replace(/.+/, "<p>"+i+"</p>");
            }            
        }
       
    });
    return (arr);

}
 */
//console.log(wrapInParagraph());



//task 7;
//Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице. В данном случае это означает 
///что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter


function normalizeClassNames() {
    let arr = document.querySelectorAll('[class*="-"]');
    for (let i = 0; i < arr.length; i++) {
        arr[i].className = arr[i].className.split('-').map(function (elem, index) {
            return (index != 0) ? elem[0].toLocaleUpperCase() + elem.slice(1) : elem;
        }).join("");
    }
}
normalizeClassNames();
console.log(document);