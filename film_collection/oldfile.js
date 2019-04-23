addEventListener('DOMContentLoaded', function () {

    //const localhost = "http://localhost:21546";
    const remoteServer = "http://re.iek.ru:8888";

    //вывод всех фильмов из JSON строки


    function fillingData(data, div) {
        div.querySelector('.film-title a').textContent = data.title;
        div.querySelector('.film-year').textContent = data.year;
        div.querySelector('.film-country').textContent = data.countryAlpha2Code;
        div.querySelector('.film-genre').textContent = data.genre;
        div.querySelector('.poster').src = data.image;
        div.querySelector('.film-description').textContent = data.description;
        div.querySelector('.film-duration').textContent = data.duration;
        div.querySelector('.film-producer').textContent = data.author;
        div.querySelector('.edit').setAttribute("id", data.id);
        div.querySelector('.remove').setAttribute("id", data.id);
        show(div);
        clickOnBtnEdit(div);
        let film_id = data.id;
        deleteFilm(div, film_id);
    }

    function listOfFilms(data) {
        let newDiv;
        let firstDiv = document.querySelector('.add-film');
        firstDiv.classList.remove('unvis');
        data.forEach(function (elem, i) {
            if (i == 0)
                newDiv = firstDiv;
            else
                newDiv = firstDiv.cloneNode(true);
            fillingData(elem, newDiv);
            firstDiv.parentNode.insertBefore(newDiv, firstDiv.nextSibling);
        });
    }

    function deleteAllFilms() {
        let film = document.querySelectorAll('.add-film');
        Array.from(film).forEach(function (elem, index) {
            if (index != 0) {
                elem.remove();
            }
        });
    }


    //получение списка всех фильмов с сервера

    function getFilms(page) {
        $.ajax({
            url: remoteServer + "/api/film?page=" +page+ "&pagesize=5",
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
                $('.add-film').remove();
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
                listOfFilms(data);
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
            let uri = encodeURI(url);
            console.log(uri);
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
            duration: $('.form-for-add-film input[name="duration"]').val()
        };
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


    //появление кнопок edit, delete;

    function show(div) {
        let show = div.querySelector('.show-btns');
        let btns = div.querySelector('.appeared-btns');

        show.addEventListener("click", function () {
            btns.classList.toggle('inl-blk');
        });
    }



    // клик на edit

    function clickOnBtnEdit(div) {
        let btn_edit = div.querySelector('.edit');
        let film_id = btn_edit.id;
        btn_edit.addEventListener('click', function (e) {
            e.preventDefault();
            $('.container-for-popup-form').removeClass('unvis');
            $('.send').addClass('unvis');
            $('.change').removeClass('unvis');
            $('.title-for-form-add-film').addClass('unvis');
            $('.title-for-form-change-film').removeClass('unvis');
            let parent_div = this.parentNode.parentNode.parentNode;
            let film = collectDataFromDiv(parent_div);
            fillingFormChangedFilm(film, film_id);
        });
    }


    //создание объекта редактирования

    function collectDataFromDiv(div) {
        let film = {
            title: div.querySelector('.film-title a').textContent,
            year: +div.querySelector('.film-year').textContent,
            description: div.querySelector('.film-description').textContent,
            author: div.querySelector('.film-producer').textContent,
            genre: +div.querySelector('.film-genre').textContent,
            countryAlpha2Code: div.querySelector('.film-country').textContent,
            duration: div.querySelector('.film-duration').textContent
        };
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
        let btn_change = form.find('.change');
        btn_change.on('click', function (e) {
            e.preventDefault();
            let changed_film = {};
            form.find('[name]').each(function (index, node) {
                changed_film[node.name] = node.value;
            });
            console.log("клик на кнопку изменить");
            editFilm(changed_film, film_id);
        });
    }


    // отправление данных об изменении фильма по клику

    function editFilm(film, film_id) {
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
                console.log(textStatus, errorThrown);
            }
        });
    }

    // удаление фильма
    function deleteFilm(div, film_id) {
        let btn_delete = div.querySelector('.remove');
        btn_delete.addEventListener('click', function (e) {
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


    //пагинация

    /* $(function () {
        $('#dark-pagination').pagination({
            items: 25,
            itemsOnPage: 5,
            cssStyle: 'dark-theme'
        });

    });

    $(function () {
        $('.add-film').pagination('selectPage', 5);
    });

    $('#example').pagination({

        ajax: function (options, refresh, $target) {
            $.ajax({
                url: 'data.json',
                data: {
                    current: options.current,
                    length: options.length
                },
                dataType: 'json'
            }).done(function (res) {
                console.log(res.data);
                refresh({
                    total: res.total, // optional
                    length: res.length // optional
                });
            }).fail(function (error) {

            });
        }

    }); */





});