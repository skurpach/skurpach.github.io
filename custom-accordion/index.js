(function () {
    function findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    function initialize(elem, option) {
        document.addEventListener('click', (e) => {
            if (e.target.matches(elem + ' .a-btn')) {
                if (!findAncestor(e.target, 'a-container').classList.contains('active')) {
                    if (option) {
                        var elementList = document.querySelectorAll(elem + ' .a-container');
                        Array.prototype.forEach.call(elementList, (e) => {
                            e.classList.remove('active');
                        });
                    }
                   findAncestor(e.target, 'a-container').classList.add('active');
                } else {
                   findAncestor(e.target, 'a-container').classList.remove('active');
                }
            }
        });
    }

    initialize('.accordion', true);
})();
