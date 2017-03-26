document.addEventListener("DOMContentLoaded", function() {
    var toggle = true;
    document.querySelector(".main-nav__button").addEventListener("click", function() {
        if (toggle) {
            document.querySelector(".main-nav__list").classList.add("toggle");
            toggle = false;
        } else {
            document.querySelector(".main-nav__list").classList.remove("toggle");
            toggle = true;
        }
    });
});

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    var regexp_card_num = /^\d{4}$/;
    var regexp_card_code = /^\d{3}$/;
    var regexp_card_placeholder = /^[a-zA-Z]{4,}$/;
    validate(document.paymentForm.CardPlaceholder, regexp_card_placeholder);
    validate(document.paymentForm.CardCode, regexp_card_code);
    var cardNum = document.querySelectorAll('.card-num');
    for (var i = cardNum.length - 1; i >= 0; i--) {
        validate(cardNum[i], regexp_card_num);
    }

    function validate(item, regexp) {
        if (regexp.test(item.value) === false) {
            item.focus();
            item.style.outline = '1px solid red';
            e.preventDefault();
            return false;
        } else {
            item.style.outline = 'none';
        }
    }
    return true;
});
