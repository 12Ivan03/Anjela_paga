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

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let offset = 0;
const currentIndex = 120;

prevBtn.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
	if (offset >= 0)
		offset -= currentIndex;
	else
		offset = offset;
	offset += currentIndex;
    updateCarousel();
//   }
});

nextBtn.addEventListener('click', () => {
//   if (currentIndex < 1) { // only one shift needed to show 4th item
//     currentIndex++;
	if (offset >= -240)
		offset -= currentIndex;
	else
		offset = offset;
    updateCarousel();
//   }
});

function updateCarousel() {
//   const offset = currentIndex * -320; // 300px card + 2*10px margin
  carousel.style.transform = `translateX(${offset}px)`;
}
