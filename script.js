const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let slideInterval;
 
var  sliderNav = function(manual) {

   btns.forEach((btn)=> {
    btn.classList.remove("active");
   });

   slides.forEach((slide)=> {
    slide.classList.remove("active");
   });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    currentSlide = manual;
}

// Event listeners for manual slide navigation
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
        resetInterval(); // Reset interval when user clicks a navigation button
    });
});

// Function to move to the next slide automatically
const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderNav(currentSlide);
};

// Start auto-play with a set interval
slideInterval = setInterval(nextSlide, 3000); // Change slides every 3 seconds

// Function to reset the interval after manual navigation
function resetInterval() {
    clearInterval(slideInterval); // Clear the existing interval
    slideInterval = setInterval(nextSlide, 3000); // Restart the interval
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});