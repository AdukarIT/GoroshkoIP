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

    let name = $('#name'),
        email = $('#email'),
        phone = $('#phone'),
        message = $('#message');

    let name_note = $('#name+span'),
        email_note = $('#email+span'),
        phone_note = $('#phone+span'),
        message_note = $('#message+span');



    $('[name]').on('input', function (e) {

        if ($(e.target)[0] == name[0]) {
            if (name.val().trim().length > 2)
                name_note.html('<span class="green">&#10003;</span>');
            else
                name_note.html('');
        }

        if ($(e.target)[0] == email[0]) {
            let reg_email = /^([a-zA-Z0-9_.+-])+@([a-zA-Z0-9-])+\.[a-zA-Z0-9]{2,4}$/g;
            if (reg_email.test(email.val()))
                email_note.html('<span class="green">&#10003;</span>');
            else
                email_note.html('');
        }

        if ($(e.target)[0] == phone[0]) {
            let reg_phone = /^\+[0-9]{3} ([0-9]{2}) ([0-9]{7})$/g;
            if (reg_phone.test(phone.val()))
                phone_note.html('<span class="green">&#10003;</span>');
            else
                phone_note.html('');
        }

        if ($(e.target)[0] == message[0]) {
            if (/.{10,100}/.test(message.val()))
                message_note.html('<span class="green">&#10003;</span>');
            else
                message_note.html('');
        }

    });

    $('#form').submit(function (e) {
        e.preventDefault();

        if (name.val().trim() == '')
            $('#name+span').html("<i>заполните поле</i>");
        else if (!($('#name+span').html() == '<span class="green">✓</span>'))
            $('#name+span').html("<i>введите больше 2х символов</i>");


        if (phone.val().trim() == '')
            phone_note.html("<i>заполните поле</i>");
        else if (!($('#phone+span').html() == '<span class="green">✓</span>'))
            phone_note.html('<i>введите номер телефона в виде +ХХХ ХХ ХХХХХХХ</i>');

        if (email.val().trim() == '')
            email_note.html('<i>заполните поле</i>');
        else if (!(email_note.html() == '<span class="green">✓</span>'))
            email_note.html('<i>проверьте корректность введенного email</i>');


        if (message.val().trim() == '')
            message_note.html("<i>заполните поле</i>");
        else if (!($('#message+span').html() == '<span class="green">✓</span>'))
            message_note.html('<i>введите от 10 до 100 символов</i>');

    });


});