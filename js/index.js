const toTop = document.querySelector('.scrolltop');

const menu = document.querySelector('header');



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
        // toTop.style.display = "block";
        toTop.classList.add('scrolltop-vis');
        toTop.classList.remove('scrolltop-hide');
        toggleMenu(1);
    } else {
        // toTop.style.display = "none";
        toTop.classList.add('scrolltop-hide');
        toTop.classList.remove('scrolltop-vis');
        toggleMenu();
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTop = 0;
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
$(window)
    .on('load', function() {
        $('#goTop')
            .on('click', function() {
                $('html, body').animate({ scrollTop: 0 }, 1000);
            });
    });

// Scroll to anchor without changing url
$(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 800);

        return false;
    });
});
