var btn = document.querySelector('.btn');
var menu = document.querySelector('.menu');


btn.addEventListener('click',function () {
    menu.classList.toggle('active');

});


var navlinks = document.querySelectorAll('ul li');
navlinks.forEach(function (link) {
    navlink[i].addEventListener('click', function () {
        menu.classList.remove('active')
    });
});