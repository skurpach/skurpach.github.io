const sendToTelegram = (name, phone) => {
    const TOKEN = '5810763734:AAHOE_ad4xNdIPI5DOg07MW9kIeD5Wf-CKM';
    const CHAT_ID = '-1001878092836';
    const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const message = `<b>Запись</b>\nИмя клиента: ${name}, Телефон: ${phone}`;

    window.axios.post(API_URL, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
}

(function () {
    const links = document.querySelectorAll(".callback-link");

    const popup = document.querySelector(".modal-callback");
    const close = popup.querySelector(".modal-close");

    const form = popup.querySelector("form");
    const username = popup.querySelector("[name=username]");
    const phone = popup.querySelector("[name=phone]");

    links.forEach(function (el) {
        el.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
        });
    });

    close.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!username.value || !phone.value) {
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            sendToTelegram(username.value, phone.value);
            popup.classList.remove("modal-show");
        }
    });

    window.addEventListener("keydown", function (e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            }
        }
    });
}());