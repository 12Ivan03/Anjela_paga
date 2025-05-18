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

const navbar = document.getElementById("nav_bar");
const cloneNavbar = navbar.cloneNode(true);
cloneNavbar.id = "nav_bar_clone";
document.getElementById("footer_nav").appendChild(cloneNavbar);

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
//   const offset = currentIndex * -320; // 300px card + 2*10px margin
  carousel.style.transform = `translateX(${offset}px)`;
}
