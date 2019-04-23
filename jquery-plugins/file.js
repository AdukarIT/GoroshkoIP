$(function () {

    let table = $('table');
    let form = $('#modal');

    let dialog = $("#dialog").dialog({
        autoOpen: false,
        draggable: true,
        modal: true,
        buttons: [{
            text: "отмена",
            click: function () {
                clearDialog();
                dialog.dialog("close");
                validator.resetForm();
            }
        },
        {
            text: "добавить",
            click: function () {
                validator.form();
                if (form.valid()) {
                    addDataToTable();
                    dialog.dialog("close");
                    clearDialog();
                }
            }

        }]
    });


    $("#openButton").click(function () {
        dialog.dialog("open");
    });

    function clearDialog() {
        $('form')[0].reset();
    }

    function addDataToTable() {
        console.log($('.name'));
        $($('.empty .name')[0]).text($('#name').val());
        $($('.empty .phone')[0]).text($('#phone').val());
        $($('.empty .date')[0]).text($('#date').val());
        $($('.empty .type')[0]).text($('#type').val());
        $($('.empty')[0]).removeClass('empty');
    }


    let validator = $('#modal').validate({
        rules: {
            name: 'required',
            phone: {
                required: true,
                regxp: /^\+[0-9]{3} ([0-9]{2}) ([0-9]{7})$/g
            },
            date: 'required',
            type: 'required'

        },
        messages: {
            name: 'This field is required',
            phone: { required: 'This field is required' },
            date: 'This field is required',
            type: 'This field is required'
        },
        onsubmit: false

    });

    $.validator.addMethod('regxp', function (value, element, regexp) {
        return regexp.test(value);
    }, 'Please enter phone number in format +XXX XX XXXXXXX');

    /*    task 2   */

    table.on('click', function (event) {
        let $target = $(event.target);
        let index_row = $target.closest("tr").index();
        let $tr = $('tr').eq(index_row);
        $tr.toggleClass('active');

    });


    let dialog_delete = $("#dialog_del").dialog({
        autoOpen: false,
        draggable: true,
        modal: true,
        buttons: [{
            text: "отмена",
            click: function () {
                $('.active').removeClass('active');
                dialog_delete.dialog("close");
            }
        },
        {
            text: "OK",
            click: function () {  
                $('.active').remove();
                dialog_delete.dialog("close");                
            }

        }]
    });

    $('#delete').on('click', function (e) {
        dialog_delete.dialog("open");
    });

    
});