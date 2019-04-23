addEventListener('DOMContentLoaded', function () {

    //const localhost = "http://localhost:21546";
    const remoteServer = "http://re.iek.ru:8888";

    //вывод всех фильмов из JSON строки


    function fillingData(data, div) {
        //console.log(div);
        //console.log(div.querySelector('.film-title'));
        div.querySelector('.film-title a').textContent = data.title;
        div.querySelector('.film-year').textContent = data.year;
        div.querySelector('.film-country').textContent = createCountry(data.countryAlpha2Code);
        div.querySelector('.film-genre').textContent = createGenre(data.genre);
        div.querySelector('.image').setAttribute('src', "http://re.iek.ru:8888/" + data.image);
        div.querySelector('.film-description').textContent = data.description;
        div.querySelector('.film-duration').textContent = data.duration;
        div.querySelector('.film-producer').textContent = data.author;
        div.querySelector('.edit').setAttribute("id", data.id);
        div.querySelector('.remove').setAttribute("id", data.id);
        //show(div);
        //clickOnBtnEdit(div);
        let film_id = data.id;
        deleteFilm(div, film_id);
    }

    //преобразование цифры в жанр и наоборот
    function createGenre(number) {
        switch (number) {
            case 1:
                return 'боевик';
            case 2:
                return 'вестерн';
            case 3:
                return 'детектив';
            case 4:
                return 'драма';
            case 5:
                return 'исторический';
            case 6:
                return 'комедия';
            default:
                return "";

        }
    }

    function createNumberGenre(str) {
        switch (str) {
            case 'боевик':
                return 1;
            case 'вестерн':
                return 2;
            case 'детектив':
                return 3;
            case 'драма':
                return 4;
            case 'исторический':
                return 5;
            case 'комедия':
                return 6;
            default:
                return "";

        }
    }
    //преобразование countryAlpha2Code в название страны и наоборот

    function createCountry(countryAlpha2Code) {
        switch (countryAlpha2Code) {
            case 'us':
                return 'США';
            case 'gb':
                return 'Великобритания';
            case 'de':
                return 'Германия';
            case 'fr':
                return 'Франция';
            case 'ch':
                return 'Швейцария';
            case 'es':
                return 'Испания';
            default:
                return "";

        }
    }

    function createCountryAlpha2Code(str) {
        switch (str) {
            case 'США':
                return 'us';
            case 'Великобритания':
                return 'gb';
            case 'Германия':
                return 'de';
            case 'Франция':
                return 'fr';
            case 'Швейцария':
                return 'ch';
            case 'Испания':
                return 'es';
            default:
                return "";

        }
    }


    // динамическое создание первого блока

    function createFirstDivOfFilm() {
        let listOfFilms = document.querySelector('.list');
        listOfFilms.innerHTML += `<div class='add-film'>
        <h2 class='film-title'><a href='#'></a></h2>
        <div class='film-data'>
            <a href='#' class='image-link'>
                <img class='image' src='' >
            </a>
            <p class='note-about-film'>
                <span class='film-description'></span>
                <br>
                <br>
                <br>
                <b>Год выпуска: </b><span class='film-year'></span>
                <br>
                <b>Страна: </b><span class='film-country'></span>
                <br>
                <b>Жанр: </b><span class='film-genre'></span>
                <br>
                <b>Продолжительность: </b><span class='film-duration'></span>
                <br>
                <b>Режиссер: </b><span class='film-producer'>
            </p>
        </div>
        <div class='wrapper_btn'>
            <div class='appeared-btns invisible '>
                <button class='btn edit inl-blk'>edit</button>
                <button class='btn remove inl-blk'>remove</button>
            </div>
            <button class='show-btns'>&#8230;</button>
        </div>
    </div>`;

    }



    function listOfFilms(data) {
        data.forEach(function (elem, i) {
            createFirstDivOfFilm();
            let newDiv = document.querySelectorAll('.add-film');
            fillingData(elem, newDiv[newDiv.length - 1]);
        });
    }

    function deleteAllFilms() {
        let film = document.querySelectorAll('.add-film');
        Array.from(film).forEach(function (elem, index) {
            elem.remove();

        });
    }


    //получение списка всех фильмов с сервера

    function getFilms(page) {
        $.ajax({
            url: remoteServer + "/api/film?page=" + page + "&pagesize=5",
            method: "get",
            dataType: "json",
            success: function (data) {
                console.log(data);
                listOfFilms(data.items);
            }
        });
    }

    // пагинация
    function myPagination() {
        $('#dark-pagination').pagination({
            items: 25,
            itemsOnPage: 5,
            cssStyle: 'dark-theme',
            onPageClick: function (pageNumber) {
                $('.add-film').hide();
                console.log(pageNumber);
                getFilms(pageNumber);
            }
        });
    }
    myPagination();


    getFilms(1);

    function getFilmsByParams(params) {
        $.ajax({
            url: remoteServer + "/api/film?" + params,
            method: "get",
            dataType: "json",

            success: function (data) {
                console.log(data);
                deleteAllFilms()
                listOfFilms(data.items);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }

        });
    }



    function searchClick() {
        $('.search').submit(function (e) {
            let film = {
                title: $('.search-text').val()
            }
            e.preventDefault();
            console.log($(this).serialize());
            getFilmsByParams($(this).serialize());
        });
    }

    searchClick();

    // поиск фильмов по select-ам

    function searchClickSelect() {
        $('.form-select-data').submit(function (e) {
            e.preventDefault();
            let url = createSerialize($(this).serializeArray());
            console.log(url);
            getFilmsByParams(url);
        });
    }

    searchClickSelect();


    //строка serialize()
    function createSerialize(arrSer) {
        let newArr = arrSer.filter(function (elem) {
            return elem.value;
        });
        let str = '';
        newArr.forEach(function (elem, index) {
            if (index == newArr.length - 1)
                str += elem.name + '=' + elem.value;
            else
                str += elem.name + '=' + elem.value + '&';
        });
        return str;

    }


    //добавление фильма 

    function postFilms(film) {
        console.log(film);
        $.ajax({
            type: "post",
            url: "http://re.iek.ru:8888/api/film/",
            contentType: "application/json",
            //dataType: "json",
            data: JSON.stringify(film),
            success: function () {
                getFilms(1);
                window.location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }


    //загрузка картинки на сервер
    function uploadImage() {
        let input = document.getElementById('image');
        let image = input.files[0];
        console.log(input);
        console.log(image);
        let form = new FormData();
        form.append("file", image);
        console.log(form);

        $.ajax({
            url: remoteServer + "/api/film/upload",
            data: form,
            processData: false,
            contentType: false,
            type: "POST",
            success: function (data) {
                alert("Files Uploaded!");
                console.log(data);
                $('#imagesrc').attr('src', data.path);
            }
        });
    }

    function clickAddImage() {
        $('#image').on('change', uploadImage);
    }
    clickAddImage();






    //собираем данные из формы 
    function handler(e) {
        e.preventDefault();
        let film = {
            title: $('.form-for-add-film input[name="title"]').val(),
            year: +$('.form-for-add-film input[name="year"]').val(),
            description: $('.form-for-add-film [name="description"]').val(),
            author: $('.form-for-add-film input[name="author"]').val(),
            genre: +$('.form-for-add-film [name="genre"]').val(),
            countryAlpha2Code: $('.form-for-add-film [name="countryAlpha2Code"]').val(),
            duration: $('.form-for-add-film input[name="duration"]').val(),
            image: $('.form-for-add-film img').attr("src")
        };
        console.log('в image');
        console.log($('.form-for-add-film img').attr("src"));
        postFilms(film);

    }
    //отправляем данные из формы по клику
    function collectDataFromForm() {
        $('.form-for-add-film').submit(handler);

    }
    collectDataFromForm();

    // отмена ввода данных в форму
    function cancelCollectDataFromForm() {
        $('.cancel-send').on('click', function (e) {
            e.preventDefault();
            let form = document.querySelector('.container-for-popup-form');
            form.classList.add('unvis');
        });
    }
    cancelCollectDataFromForm();

    // появление формы добавления фильма при нажатии на кнопку

    function appearForm() {
        let btnForAppearForm = document.querySelector('.btn-for-appear-form');
        btnForAppearForm.addEventListener('click', function () {
            let form = document.querySelector('.container-for-popup-form');
            form.classList.remove('unvis');
        });
    }

    appearForm();


    //клик на любую кноеку на add-film

    function anyClick() {
        $('.list').on('click', function (event) {
            let thistarget = $(event.target);
            console.log(thistarget);
            if (thistarget.hasClass('show-btns')) {
                thistarget.parent().find('.appeared-btns').toggleClass('inl-blk');
                console.log('я тут');
            }
            if (thistarget.hasClass('edit')) {
                console.log('что я передаю в edit()' + thistarget);
                clickOnBtnEdit(thistarget);
            }

        });

    }
    anyClick();





    // клик на edit

    function clickOnBtnEdit(div) {
        console.log('что я получаю в edit()' + div);
        let film_id = div.attr('id');
        console.log('id: ' + film_id);
        $('.container-for-popup-form').removeClass('unvis');
        $('.send').addClass('unvis');
        $('.change').removeClass('unvis');
        $('.title-for-form-add-film').addClass('unvis');
        $('.title-for-form-change-film').removeClass('unvis');
        console.log(div);
        let parent_div = div.parent().parent().parent();
        console.log(parent_div);
        let film = collectDataFromDiv(parent_div);
        fillingFormChangedFilm(film, film_id);

    }


    //создание объекта редактирования

    function collectDataFromDiv(div) {
        let film = {
            title: div.find('.film-title a').text(),
            year: +div.find('.film-year').text(),
            description: div.find('.film-description').text(),
            author: div.find('.film-producer').text(),
            genre: +createNumberGenre(div.find('.film-genre').text()),
            countryAlpha2Code: createCountryAlpha2Code(div.find('.film-country').text()),
            duration: div.find('.film-duration').text(),
            image: div.find('.image').attr('src')
        };
        console.log('это то, чем я заполняю форму редактирования');
        console.log(film);
        return film;
    }

    //заполнение формы данными изменяемого фильма

    function fillingFormChangedFilm(film, film_id) {
        let form = $('.form-for-add-film');
        form.find('[name="title"]').val(film.title);
        form.find('[name="countryAlpha2Code"]').val(film.countryAlpha2Code);
        form.find('[name="year"]').val(film.year);
        form.find('[name="genre"]').val(film.genre);
        form.find('[name=duration]').val(film.duration);
        form.find('[name=author]').val(film.author);
        form.find('[name=description]').val(film.description);
        form.find('#imagesrc').attr('src', film.image);
        console.log('это то, что записалось из блока в форму');
        console.log(film.image);
        console.log(form.find('#imagesrc').attr('src'));
        let btn_change = form.find('.change');
        btn_change.on('click', function (e) {
            e.preventDefault();
            let changed_film = {};
            form.find('[name]').each(function (index, node) {
                if (node.name == "image")
                    changed_film[node.name] = form.find('#imagesrc').attr('src');
                else
                    changed_film[node.name] = node.value;

            });
            console.log("клик на кнопку изменить");
            console.log('отправляем на сервер для изменения');
            console.log(changed_film);

            editFilm(changed_film, film_id);
        });
    }


    // отправление данных об изменении фильма по клику

    function editFilm(film, film_id) {
        console.log('это то, что я отправляю на сервер');
        console.log(film);
        console.log("http://re.iek.ru:8888/api/film/" + film_id);
        $.ajax({
            method: "put",
            url: "http://re.iek.ru:8888/api/film/" + film_id,
            contentType: "application/json",
            //dataType: "text",
            data: JSON.stringify(film),
            success: function () {
                console.log('ошибок нет');
                window.location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Заполните все поля');
                console.log(textStatus, errorThrown);
            }
        });
    }

    // удаление фильма
    function deleteFilm(div, film_id) {
        let btn_delete = div.querySelector('.remove');
        btn_delete.addEventListener('click', function (e) {
            if (confirm("Удалить фильм?")) {} else {
                window.location.reload();
                return;
            }
            e.preventDefault();
            console.log("http://re.iek.ru:8888/api/film/");
            $.ajax({
                type: "delete",
                url: "http://re.iek.ru:8888/api/film/" + film_id,
                contentType: "application/json",
                success: function () {
                    window.location.reload();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
            // alert("фильм удален");                    
        });
    }


    // появление расширенного поиска

    function expandSearch() {
        $('.search-expand').on('click', function () {
            $('.form-select-data').toggleClass('inl-blk');
            $(this).html($(this).html() == '▼' ? '▲' : '▼');
        });

    }
    expandSearch();

    // валидация 

    function myValidation() {
        $("#form-for-add-film").validate({
            rules: {
                title: {
                    required: true,
                    minlength: 3,
                    maxlength: 20,
                },
                countryAlpha2Code: {
                    required: true,
                },
                year: {
                    digits: true,
                    range: [1980, 2020],
                },
                genre: {
                    required: true,
                },
                duration: {
                    format: true,
                },
                image: {
                    accept: ""
                },
                description: {
                    required: true,
                    minlength: 10,
                    maxlength: 250,
                }

            },
            messages: {
                title: {
                    required: "Это поле обязательно для заполнения",
                 minlength: "Название должно быть минимум 3 символа",
                 maxlength: "Максимальное число символов - 20",
                },
                countryAlpha2Code: {
                    required: "Это поле обязательно для заполнения",
                },
                year: {
                    digits: "Введите цифры",
                    range: "От 1980 до 2020 года",
                },
                genre: {
                    required: "Это поле обязательно для заполнения",
                },
                duration: {
                    format: "Это поле обязательно для заполнения",
                },
                image: {
                    accept: ""
                },
                description: {
                    required: "Это поле обязательно для заполнения",
                    minlength: "Минимальное число символов - 10",
                    maxlength: "Максимальное число символов - 250",
                }
            }
        });
    }

    $.validator.addMethod(
        "format",
        function (value, element) {            
            return value.match(/^\d\d?\:\d\d?\(:\d\d)$/g);
        },
        "Please enter a date in the format hh:mm():ss)"
    );
    myValidation();



});