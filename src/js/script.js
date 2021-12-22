new Swiper('.image-slider',{
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 450,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        980: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }
});




window.addEventListener('DOMContentLoaded', () =>{
    document.querySelector(".services__content").classList.add('opened');

    document.querySelectorAll(".services__content").forEach(function(section){
        section.addEventListener("click", function(e){
            this.classList.toggle('opened');
            
        });
})
})