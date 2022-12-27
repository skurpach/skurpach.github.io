(function () {
    function initialize(elem, option) {
        document.addEventListener('click', (e) => {
            if (e.target.matches(elem + ' .a-btn')) {
                if (!e.target.parentElement.classList.contains('active')) {
                    if (option) {
                        var elementList = document.querySelectorAll(elem + ' .a-container');
                        Array.prototype.forEach.call(elementList, (e) => {
                            e.classList.remove('active');
                        });
                    }
                    e.target.parentElement.classList.add('active');
                } else {
                    e.target.parentElement.classList.remove('active');
                }
            }
        });
    }

    initialize('.accordion', true);
})();
