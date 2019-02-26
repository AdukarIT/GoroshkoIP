//практика
//task 2;
//Нужно создать пустой html документ и заполнить его используя различные методы работы с документом. Тело документа должно содержать следующий код:
/* <ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul> */
//Сделайте красными все внешние ссылки (имеющие начало с http://), поменяйте местами два произвольных элемента списка


addEventListener("DOMContentLoaded", function () {
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    let str = "";
    for (let i = 0; i < 6; i++)
        str += "<li><a></a></li>";
    ul.insertAdjacentHTML('afterBegin', str);
    let arrA = document.querySelectorAll('a');
    arrA[0].text = arrA[0].href = "http://google.com";
    arrA[1].text = arrA[1].href = "/tutorial";
    arrA[2].text = arrA[2].href = "local/path";
    arrA[3].text = arrA[3].href = "ftp://ftp.com/my.zip";
    arrA[4].text = arrA[4].href = "http://nodejs.org";
    arrA[5].text = arrA[5].href = "http://internal.com/test";

    document.querySelectorAll('a[href^="http://"]').forEach(function(elem){elem.style.color = "red"});

    ul.insertBefore(ul.children[1], ul.firstChild);

    console.log(ul);

});