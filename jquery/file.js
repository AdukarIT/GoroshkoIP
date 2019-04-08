$(function () {


    //task 1 ;
    let $gallery = $('.gallery');
    let images = $('img');
    let currentImage = 0;

    $('.prev').click(function (e) {
        currentImage = (currentImage + 3) % images.length;
        $gallery.css('background-image', 'url(' + images[currentImage].src + ')');
    });

    $('.next').click(function (e) {
        currentImage = (currentImage + 1) % images.length;
        $gallery.css('background-image', 'url(' + images[currentImage].src + ')');

    });

    //task 2;
    //Форма обратной связи содержит поля: имя, емейл, телефон, сообщение. Все поля
    //обязательны для заполнения. Сообщение должно быть от 10 до 1000 знаков. 
    //После заполнения каждого из полей рядом с ним должна загораться галочка. 
    //При отправке формы выведите сообщение, если какие-то поля не заполнены, а 
    //также отмените отправку.

    $('#form').submit(function (e) {
        e.preventDefault();        

        if ($('#name').val().trim() == '')
            $('#name').after('<span><i>заполните поле</i></span>');
        else
            $('#name').after('<span class="green">&#10003;</span>');

        let reg_phone = /\+?([0-9]{3}) ?\(?([0-9]{2})\)? ?([0-9]{5})/g;
        if ($('#phone').val().trim() == '')
            $('#phone').after('<span><i>заполните поле</i></span>');
        else if (!(reg_phone.test($('#phone').val())))
            $('#phone').after('<span><i>введите правильный номер телефона</i></span>');
        else
            $('#phone').after('<span class="green">&#10003;</span>');

        let reg_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($('#email').val().trim() == '')
            $('#email').after('<span><i>заполните поле</i></span>');
        else if (!(reg_email.test($('#email'))))
            $('#email').after('<span><i>проверьте корректность введенного email</i></span>');
        else
            $('#email').after('<span class="green">&#10003;</span>');


        if (!(/.{10,100}/.test($('[name=message]').val().trim())))
            $('[name=message]').after('<span><i>введите от 10 до 100 символов</i></span>');
        else
            $('[name=message]').after('<span class="green">&#10003;</span>');


    });




});