$.validator.setDefaults({
    // onclick: false,
    ignore: [],
    rules: {
        email: {
            iemail: true
        },
        password: {
            minlength: 6
        },
        'g-recaptcha-response': {
            required: function () {
                if (typeof grecaptcha != 'undefined' && grecaptcha.getResponse() == '') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    messages: {
        'g-recaptcha-response': {
            required: "Подтвердите, что вы человек!"
        }
    },
    highlight: function(element) {
        $(element).closest('label').removeClass('has-success').addClass('has-error');
        $(element).closest('fieldset').removeClass('has-success').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('label').removeClass('has-error').addClass('has-success');
        $(element).closest('fieldset').removeClass('has-error').addClass('has-success');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        var parent = element.parent();
        if (element.parent('.input-group').length || element.hasClass('selectpicker') || parent.hasClass('custom-file')) {
            element.parent().siblings('.help-block').remove();
            error.insertAfter(element.parent());
        } else if (parent.hasClass('custom-control') && !parent.closest('fieldset').length) {
            error.appendTo(element.siblings('.custom-control__description'));
        } else if (parent.closest('fieldset').length) {
            error.appendTo(parent.closest('fieldset'));
        } else if(element.hasClass('g-recaptcha-response')) {
            error.insertAfter(element.closest('.captcha'));
        } else {
            element.siblings('.help-block').remove();
            error.insertAfter(element);
        }
    }
});

$.validator.addMethod("iemail", function(value, element) {
    return this.optional(element) || /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value) || /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(value);
}, "Пожалуйста, введите корректный адрес электронной почты.");

$.validator.addMethod("alphabetic", function(value, element) {
    return this.optional(element) || /^[a-zA-Za-яёА-ЯЁ\- ]+$/.test(value);
}, "Некорректный ввод");

$.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^[a-zA-Za-яёА-ЯЁ0-9 ]+$/.test(value);
}, "Некорректный ввод");

$(function() {
    $('input[type=tel]').mask('+7(999) 999-9999');
    
    //message form validate and sumbit
    $('#message-form').validate({
      rules: {
        fio: {
          minlength: 2,
          maxlength: 50,
          required: true,
          alphabetic: true
        },
        tel: {
          required: true
        },
        email: {
          email: true
        },
        is_agreement: {
          required: true
        }
      },
      submitHandler: function submitHandler(form) {
        var form = $('#message-form');
        var data = form.serialize();

        //on ajax success show message-finish
        $('#message-finish-tab').tab('show');
        // $.ajax({
        //     type: 'POST',
        //     url: '/',
        //     // dataType: 'json',
        //     data: data,
        // })
        // .done(function(result) {
        // })
        // .fail(function() {
        // });
      }
    });
});
