$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 950,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
});