function displayTime() {
	time = new Date();
	console.log(time);
	document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);


let i = 0; 			// Start Point
let images = [];	// Images Array
let bgTime = 3000;	// Time Between Switch

// Image List
images[0] = "Images/intel.jpg";
images[1] = "Images/img1.jpg";
images[2] = "Images/img5.jpg";
images[3] = "Images/img6.jpg";


// Change Image
function changeImg() {
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if (i < images.length - 1) {
		// Add 1 to Index
		i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", bgTime);
}

// Run function when page loads
window.onload = changeImg;

document.getElementById("newCustomerContainer").onmouseover = function () { mouseOver(); };
document.getElementById("newCustomerContainer").onmouseout = function () { mouseOut() };

function mouseOver() {
	document.getElementById("newCustomerContainer").style.display = "block";
}

function mouseOut() {
	document.getElementById("newCustomerContainer").style.display = "none";
}

// document.getElementById("moreContainer-1").addEventListener("mouseover", mouseOver);
// document.getElementById("moreContainer-1").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("moreContainer-1").style.display = "block";
// }

// function mouseOut() {
//   document.getElementById("moreContainer-1").style.display = "none";
// }

	
let sliderImages = document.querySelectorAll(".background-image"),
left = document.querySelector(".left"),
right = document.querySelector(".right"),
current = 0;

function reset(){
	for (let i = 0; i < sliderImages.length; i++){

		sliderImages[i].style.display = "none";
	}
}

function startSlide(){
	reset();

	sliderImages[0].style.display = "block";
}

function slideLeft(){
	reset();

	sliderImages[current - 1].style.display = "block";
	current--;

}

function slideRight(){
	reset();

	sliderImages[current + 1].style.display = "block";
	current++;
}

left.addEventListener("click", function() {
	if(current === 0){
		current = sliderImages.length;
	}
	slideLeft();
})

right.addEventListener("click", function() {
	if(current === sliderImages.length - 1){
		current = -1;
	}
	slideRight();
});
startSlide();


