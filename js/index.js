const toTop = document.querySelector('.scrolltop');

const menu = document.querySelector('header');
// console.log(menu);
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
        toTop.style.display = "block";
        toggleMenu(1);
    } else {
        toTop.style.display = "none";
        toggleMenu();
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTop = 0;
}


function toggleMenu(bool) {
    if (bool) {
        menu.style.backgroundColor = "rgba(45, 45, 45, .8)";
    } else {
				menu.style.backgroundColor = "rgb(45, 45, 45)";
    }
}


