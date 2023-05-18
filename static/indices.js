window.addEventListener('load', function () {
    if (sessionStorage.getItem('indices')) {
        var elements_1 = document.querySelectorAll('.marco');
        var parent_1 = elements_1[0].parentNode;
        var indices = JSON.parse(sessionStorage.getItem('indices'));
        indices.forEach(function (i) { return parent_1.appendChild(elements_1[i]); });
    }
});
