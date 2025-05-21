// Copy nav bar no Language buttons

const navbar = document.getElementById("nav_bar");
const cloneNavbar = navbar.cloneNode(true);
const cpyNoLang = cloneNavbar.querySelector("#language");
if (cpyNoLang) {
	cpyNoLang.remove();
}
cloneNavbar.id = "nav_bar_clone";
document.getElementById("footer_nav_part").appendChild(cloneNavbar);

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

// Hamburger menu

document.getElementById("hamburger_btn").addEventListener("click", function () {
	document.querySelector(".menu").classList.toggle("open");
});
