addEventListener("DOMContentLoaded", function (event) {

    //практика
    //task 1; Сделайте так, чтобы по нажатию на кнопку выводился alert    

    document.querySelector("button").addEventListener("click", function () {
        alert('My first event');
    });

    //task 2;
    //Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст изменялся на button

    const button = document.createElement('button');
    document.body.appendChild(button);
    button.innerHTML = "any text";
    button.addEventListener("click", function () {
        button.innerHTML = "button";
    });

    //task 3;
    //Создайте форму с полем для ввода и двумя кнопками, сделайте так, чтобы по нажатию на кнопку disable, поле становилось неактивным,
    //в случае с enable - наоборот

    const form = document.createElement('form');
    document.body.appendChild(form);
    const input = document.createElement('input');
    form.appendChild(input);
    const disable = document.createElement('button');
    const enable = document.createElement('button');
    form.appendChild(disable);
    disable.innerHTML = "disable";
    form.appendChild(enable);
    enable.innerHTML = "enable";

    enable.addEventListener("click", function () {
        document.querySelector('input').disabled = false;
    });
    
    disable.onclick = function () {
        document.querySelector('input').disabled = true;
        return false;
    }
    console.log(document);

    //task 4;
    //Нужно создать документ с полем ввода, объектом произвольной формы и цвета. Сделайте так, чтобы в поле ввода можно было 
    //вводить только числовые значения, а объект можно было двигать и узнавать его координаты на странице

    const input4 = document.body.appendChild(document.createElement('input'));
    input4.addEventListener("keydown", function (event) {
        //if(/.\D/.test(event.key)){
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
    });

    const div4 = document.body.appendChild(document.createElement('div'));
    div4.style.cssText = "height: 50px; width: 50px; background: green; position: absolute; margin-top: 15px;";


    div4.addEventListener("mousedown", function (e) {       // перетаскивание блока не работает, позже доделаю
        let box = this.getBoundingClientRect();
        let shiftX = e.pageX - box.left;
        let shiftY = e.pageY - box.top;

        function listener() {
            this.style.left = this.pageX - shiftX + "px";
            this.style.top = this.pageY - shiftY + "px";
        }
        
        this.addEventListener("mousemove", listener);
        
        this.addEventListener("mouseup", function (e) {
            this.removeEventListener("mousemove", listener);
            this.onmouseup = null;
        });
    });
   


    //task 5;
    //Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.

    const div5 = document.body.appendChild(document.createElement('div'));
    div5.style.cssText = "height: 150px; width:200px; margin-top:80px; background: red;";
    const output5 = document.body.appendChild(document.createElement('output'));
    output5.style.cssText = "height: 10px; width: 50px; margin-top: 10px;";
    div5.addEventListener("mousemove", function (e) {
        output5.innerHTML = "(" + e.pageX + ";" + e.pageY + ")";
    });

    //task 6;
    //Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки. Добавьте событие, которое выполняется 
    //при двойном клике на блоке и заменяет фон блока на изображение открытой папки

    const div6 = document.body.appendChild(document.createElement('div'));
    div6.style.cssText = "height: 100px; width:100px; margin: 20px 0 0 20px;";
    div6.style.background = 'url(https://fr.seaicons.com/wp-content/uploads/2016/03/Folder-Close-icon.png)';
    div6.style.backgroundSize = 'contain';

    div6.addEventListener("dblclick", function (e) {
        div6.style.background = 'url(http://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Folder-Open-icon.png)';
        div6.style.backgroundSize = 'contain';
    });

    //task 7;
    //Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона. Добавление элементов выполните
    // с помощью цикла. Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border-radius до круга. 
    //Для замедления эффекта скругления в CSS можно добавить transition.

    const div7 = document.body.appendChild(document.createElement('div'));
    div7.style.width = '1200px';
    for (let i = 0; i < 300; i++) {
        let newBox = div7.appendChild(document.createElement('div'));
        newBox.style.cssText = "height: 30px; width: 30px; display:inline-block; background: blue; margin: 10px; ";
        newBox.addEventListener("mousemove", function (e) {
            newBox.style.borderRadius = "15px";
        })
    }

    //homework
    //task 1;
    //Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

    const input1t = document.body.appendChild(document.createElement('input'));
    input1t.style.margin = '10px';
    const button1t = document.body.appendChild(document.createElement('button'));
    button1t.textContent = "clon input";

    button1t.addEventListener("click", function (e) {
        document.body.appendChild(input1t.cloneNode(true));
    });

    //task 2;
    //Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, при втором клике 
    //удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.

    const table2t = document.body.appendChild(document.createElement('table'));
    let count = 0;
    for (let i = 0; i < 2; i++) {
        let tr = table2t.appendChild(document.createElement('tr'));
        for (let j = 0; j < 3; j++) {
            let td = tr.appendChild(document.createElement('td')).textContent = j + 1;
        }
    }

    function changeClassName(sel, n) {
        if (n == 1) {
            sel.className = 'bordered';
            console.log(sel);
        }
        if (n == 2) {
            sel.className = 'striped';
            console.log(sel);
        }
        if (n == 3) {
            sel.className = 'highlight';
            console.log(sel);
        }
    }

    table2t.addEventListener('click', function () {
        changeClassName(this, ++count); // глобальная переменная меняется, но как по-другому передать счетчик? (с ним само удобно)
    });


    //task 3;
    //Модифицируйте задачу 7. Добавьте три radiobutton. При выборе первого включается класс bordered, при выборе второго отключается 
    //bordered и включается striped, при выборе третьего включается highlight и отключается striped.

    const form3t = document.body.appendChild(document.createElement('form'));

    for (let i = 0; i < 3; i++) {
        form3t.innerHTML += "<label><input type = 'radio' name = 'changeClassName'>" + (i + 1) + "</label>"; //checkbox-ы связываются name, но нужен value
    }

    form3t.addEventListener('input', function (e) {
        let target = e.target;
        let arr = this.querySelectorAll('[name = changeClassName]');
        if (e.target == arr[0]) { //так можно сделать без счетчика...
            table2t.className = 'bordered';
            console.log(table2t);
        } else if (e.target == arr[1]) {
            table2t.className = 'striped';
            console.log(table2t);
        } else {
            table2t.className = 'highlight';
            console.log(table2t);
        }
    });




    //task 4;
    //Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. Вывод осуществлять 
    //с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

    const button4t = document.body.appendChild(document.createElement('button'));
    button4t.textContent = "any text";
    button4t.style.margin = "10px";

    function textInTags() {
        alert(this.textContent);
    }

    button4t.addEventListener('click', textInTags);

    const buttonReset = document.body.appendChild(document.createElement('button'));
    buttonReset.textContent = "reset";

    buttonReset.addEventListener('click', function (e) {
        button4t.removeEventListener('click', textInTags);
    });

    //task 5;
    //Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.

    const div5t = document.body.appendChild(document.createElement('div'));
    div5t.insertAdjacentHTML('afterbegin', "<div>div</div><p>text</p><button>button</button><a href='#'>link</a>");
    div5t.lastChild.addEventListener('click', function (event) {
        event.preventDefault();
    });

    function typeOfElement(event) {
        alert(event.target.tagName);
    }

    Array.from(div5t.childNodes).forEach(function (elem) {
        elem.addEventListener('click', typeOfElement);
        elem.style.cssText = "margin:10px; display: block ";
    });


    //task 6;
    //Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку, 
    //изображение будет заменяться другим изображением. При выходе мыши за пределы изображения, будет восстанавливаться первоначальное 
    //изображение.

    const image6t = document.body.appendChild(document.createElement('img'));
    image6t.style.cssText = "height: 200px; width: 400px;";
    image6t.src = "https://3.bp.blogspot.com/-uPSxxB2qJek/WW0RxefYJgI/AAAAAAAACSY/-ZRa1pFu8t0glg24Luf4y48GsloJFzECwCLcBGAs/s1600/analistas.gif";

    image6t.addEventListener('mouseover', function () {
        this.src = "https://st.depositphotos.com/1429923/4552/v/950/depositphotos_45525083-stock-illustration-vector-illustration-of-website-development.jpg";
    });

    image6t.addEventListener('mouseout', function (e) {
        this.src = "https://3.bp.blogspot.com/-uPSxxB2qJek/WW0RxefYJgI/AAAAAAAACSY/-ZRa1pFu8t0glg24Luf4y48GsloJFzECwCLcBGAs/s1600/analistas.gif";
    });

    //task 7;
    //Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом. 
    //Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.

    const div7t = document.body.appendChild(document.createElement('div'));
    div7t.classList.add('gallery');
    let boxStyle = {
        'position': 'relative',
        'margin-top': '20px',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '600px'
    }
    applyStyles(div7t, boxStyle);

    let imageStyle = {
        'display': 'inline-block',
        'position': '',
        'height': '200px',
        'width': '200px'
    }

    let imageCheckedStyle = {
        'position': 'absolute',
        'height': '300px',
        'width': '300px',
        'top': '50px',
        'left': '650px',
        'zIndex': 2,
        'opacity': ''
    }

    function applyStyles(elem, styles) {
        for (let prop in styles)
            elem.style.setProperty(prop, styles[prop]);
    };

    const imageArr = ['https://scontent-atl3-1.cdninstagram.com/vp/7a66cc1691e7d61641d8f6002e169a45/5D1D7050/t51.2885-15/e35/44322656_593833317714277_4189703656234287104_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
        'https://avatarko.ru/img/kartinka/11/panda_10712.jpg',
        'https://www.kino-teatr.ru/blog/676/17290.jpg',
        'https://avatars.mds.yandex.net/get-pdb/199965/b2af5a08-3386-4346-a8bb-9d7ec4e216d9/orig',
        'http://worldandtravel.ru/uploads/album_photos/_6.jpg',
        'http://multiki-kartinki.narod.ru/madagaskar/Madagascar30.jpg'
    ];

    imageArr.forEach(function (el) {
        let image7t = div7t.appendChild(document.createElement('img'));
        image7t.src = el;
        applyStyles(image7t, imageStyle);
    });

    div7t.onclick = function (event) {
        this.childNodes.forEach(function (el) {
            applyStyles(el, imageStyle);
            el.style.opacity = 0.3;
        });

        let target = event.target;
        if (target == this) {
            event.preventDefault();
        } else
            applyStyles(target, imageCheckedStyle);
    };

    div7t.parentNode.addEventListener('click', function (event) {
        div7t.childNodes.forEach(function (el) {
            applyStyles(el, imageStyle);
            el.style.opacity = 1;
        });
    }, true);

});