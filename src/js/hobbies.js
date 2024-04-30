document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides(slideIndex);

    const prevButton = document.querySelector('.prev_C');
    const nextButton = document.querySelector('.next_C');

    prevButton.addEventListener('click', function() {
        moveSlide(-1);
    });

    nextButton.addEventListener('click', function() {
        moveSlide(1);
    });

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.querySelectorAll('.hobbies');

        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        slides[slideIndex].style.display = 'block';
    }
});
