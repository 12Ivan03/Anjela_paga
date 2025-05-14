const button = document.getElementById("changeBtn");
const dropDown = document.getElementById("dropMenu");

button.addEventListener("click", function () {
	// document.getElementById("message").textContent = "You clicked the button!";
	if (dropDown.style.display === "none"){
		dropDown.style.display = "block";
	} else {
		dropDown.style.display = "none";
	}
});

