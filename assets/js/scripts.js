var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

var main = { 
    init : function() {
        $(window).scroll(function() {
            if ($(".header").offset().top > 100) {
                $(".header").addClass("top-nav-short");
            } else {
                $(".header").removeClass("top-nav-short");
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', main.init);
