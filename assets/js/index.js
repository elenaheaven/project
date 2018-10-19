// GoTop
const toTop = document.querySelector('.scrolltop');
// Header
const header = document.querySelector('header');

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



window.onscroll = function() {
    showHideScroll();
};

window.onload = function() {
    showHideScroll();
};


// When the user scrolls down 125px from the top of the document, show the button
function showHideScroll() {

    let offset = window.pageYOffset;

    if (offset > 75) {
        toTop.classList.add('vis');
        toTop.classList.remove('hide');
        toggleMenu(1);
    } else {
        toTop.classList.add('hide');
        toTop.classList.remove('vis');
        toggleMenu();
    }
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

// Change opacity & size of header on scroll
function toggleMenu(bool) {
    if (bool) {
        header.classList.add('header-scroll');
        header.classList.remove('header-fixed');
    } else {
        header.classList.add('header-fixed');
        header.classList.remove('header-scroll');
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

        $('html, body').animate({ scrollTop: destination }, 1000);

        return false;
    });
});

// Submit form
$('#contactMe').on('submit', function(event) {
    event.preventDefault();

    // Clean form
    $(this).trigger('reset');

    // Toggle accordion
    let accordion = UIkit.accordion(UIkit.$('#formAccordion'));

    accordion.toggleItem(UIkit.$('[data-wrapper]'), true, false);

    // Check
    UIkit.notify("<i class='uk-icon-check'></i> Повідомлення надіслано!", { pos: 'bottom-center' });
});


// Toggle services on hover
$(function() {


    $('.services-container').mouseenter(function() {

        $(this).find('.services-hover').css("display", "flex")
            .hide()
            .fadeIn()
            .find('.services-hover-block > *')
            .addClass('show-services');

    }).mouseleave(function() {
        $(this).find('.services-hover').fadeOut();
    });



});