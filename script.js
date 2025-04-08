document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio site loaded!");
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initialize the first slide
showSlide(currentIndex);
