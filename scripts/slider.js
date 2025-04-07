document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.image-slider-container');
    const sliderWrapper = document.querySelector('.image-slider-wrapper');
    const hint = document.querySelector('.drag-hint');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderWrapper.addEventListener('mouseenter', () => {
        if (hint) hint.style.opacity = '1';
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        if (hint) hint.style.opacity = '0';
    });

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        if (hint) hint.style.opacity = '0';
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    });

   
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        if (hint) hint.style.opacity = '0';
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    });
});