// nav bar button menu

// const button = document.getElementById("changeBtn");
// const dropDown = document.getElementById("dropMenu");

// button.addEventListener("click", function () {
// 	// document.getElementById("message").textContent = "You clicked the button!";
// 	if (dropDown.style.display === "none"){
// 		dropDown.style.display = "block";
// 	} else {
// 		dropDown.style.display = "none";
// 	}
// });

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

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let offset = 0;
const currentIndex = 220;

prevBtn.addEventListener('click', () => {
	if (offset >= 0)
		offset -= currentIndex;
	else
		offset = offset;
	offset += currentIndex;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
	if (offset >= -700)
		offset -= currentIndex;
	else
		offset = offset;
    updateCarousel();
});

function updateCarousel() {
	carousel.style.transform = `translateX(${offset}px)`;
}

// Copy nav bar no Language buttons

const navbar = document.getElementById("nav_bar");
const cloneNavbar = navbar.cloneNode(true);
const cpyNoLang = cloneNavbar.querySelector("#language");
if (cpyNoLang) {
	cpyNoLang.remove();
}
cloneNavbar.id = "nav_bar_clone";
document.getElementById("footer_nav").appendChild(cloneNavbar);
