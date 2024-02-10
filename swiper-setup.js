// swiper-setup.js

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Show as many slides as possible
    spaceBetween: 30, // Add spacing between slides
    loop: true, // Enable infinite looping
    autoplay: {
      delay: 5000, // Delay between transitions in milliseconds (5 seconds in this example)
      disableOnInteraction: false, // Continue auto-sliding even if the user interacts with the slider
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        if (this.params.loop && this.slides.length < 3) { // Adjust the minimum number of slides as needed
          console.warn('Swiper Loop Warning: The number of slides is not enough for loop mode. Disabling loop.');
          this.params.loop = false; // Disable loop mode
          this.update(); // Update Swiper to apply changes
        }
      },
    },
  });
});
