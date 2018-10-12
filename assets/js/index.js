const toTop = document.querySelector('.scrolltop');

const menu = document.querySelector('header');

// Mobile menu
const mobMenu = document.querySelector('.mob-menu');
const showMobMenu = document.querySelector('#openMenu');
const closeMobMenu = document.querySelector('#closeMenu');


$('#openMenu').on('click', function() {
    toggleMobMenu(1);
});

$('#closeMenu').on('click', function() {
    toggleMobMenu();
});

$('.mob-menu').find('a').on('click', function(e) {
    e.preventDefault();
    toggleMobMenu();
});

toTop.addEventListener('click', scrollToTop);

window.onscroll = function() {
    showHideScroll();
};

window.onload = function() {
    showHideScroll();
};


// When the user scrolls down 125px from the top of the document, show the button
function showHideScroll() {
    let offset = window.pageYOffset;

    if (offset > 125) {
        toTop.classList.add('vis');
        toTop.classList.remove('hide');
        toggleMenu(1);
    } else {
        toTop.classList.add('hide');
        toTop.classList.remove('vis');
        toggleMenu();
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTop = 0;
}

// Change opacity of top menu on scroll
function toggleMobMenu(bool) {
    if (bool) {
        mobMenu.classList.add('vis');
        mobMenu.classList.remove('hide');
    } else {
        mobMenu.classList.add('hide');
        mobMenu.classList.remove('vis');
    }
}

// Change opacity of top menu on scroll
function toggleMenu(bool) {
    if (bool) {
        menu.classList.add('menu-scroll');
        menu.classList.remove('menu-fixed');
    } else {
        menu.classList.add('menu-fixed');
        menu.classList.remove('menu-scroll');
    }
}

// Scroll to top
$('#goTop').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});

// Scroll to anchor without changing url
$(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        let elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 800);

        return false;
    });
});