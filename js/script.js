
// language button
const bgLang = document.querySelector('.bg_lang');
const enLang = document.querySelector('.en_lang');

bgLang.addEventListener('click', () => {
	bgLang.classList.toggle('act');

	if (!bgLang.classList.contains('act')) {
		bgLang.classList.add('act');
	}
	if (enLang.classList.contains('act')) {
		enLang.classList.remove('act');
	}
});

enLang.addEventListener('click', () => {
	enLang.classList.toggle('act');

	if (!enLang.classList.contains('act')) {
		enLang.classList.add('act');
	}
	if (bgLang.classList.contains('act')) {
		bgLang.classList.remove('act');
	}
}
);

// read more button

const readMoreBtn = document.querySelector('.fest_btn');
const festCon = document.querySelector('.festival_contianer');
const festText = document.querySelector('.festival_text');

readMoreBtn.addEventListener('click', () => {
	festCon.classList.toggle('active');
	festText.classList.toggle('active');

	if (festCon.classList.contains('active') || festText.classList.contains('active')) {
		readMoreBtn.textContent = 'ЗАТВОРИ';
	} else {
		readMoreBtn.textContent = 'ЧЕТИ ОЩЕ';
	}
});

// carousel

const container = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let offset = 0;
let cardWidth = carousel.querySelector('.card').offsetWidth;
let maxOffset = 0;

function updateMaxOffset() {
    const containerWidth = container.offsetWidth;
    const contentWidth = carousel.scrollWidth;
    maxOffset = Math.min(0, containerWidth - contentWidth);
}

function updateCarousel() {
    carousel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    offset += cardWidth;
    if (offset > 0) offset = 0;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    offset -= cardWidth;
    if (offset < maxOffset) offset = maxOffset;
    updateCarousel();
});

window.addEventListener('resize', () => {
    cardWidth = carousel.querySelector('.card').offsetWidth;
    updateMaxOffset();
    offset = Math.max(offset, maxOffset);
    updateCarousel();
});

updateMaxOffset();

// Copy nav bar no Language buttons

const navbar = document.getElementById("nav_bar");
const cloneNavbar = navbar.cloneNode(true);
const cpyNoLang = cloneNavbar.querySelector("#language");
if (cpyNoLang) {
	cpyNoLang.remove();
}
cloneNavbar.id = "nav_bar_clone";
document.getElementById("footer_nav").appendChild(cloneNavbar);

// Hamburger menu

document.getElementById("hamburger_btn").addEventListener("click", function () {
	document.querySelector(".menu").classList.toggle("open");
});
