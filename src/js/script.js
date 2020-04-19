$(document).ready(function(){
    $('.slider__inner').slick({
        variableWidth: true,
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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleCatalogItem(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list-wrapper').eq(i).toggleClass('catalog-item__list-wrapper_active');
            });
        });
    }

    toggleCatalogItem('.catalog-item__link');
    toggleCatalogItem('.catalog-item__back');

    //modal

    $('[data-modal="consultation"]').on('click', function(){
        $('.overlay, #consultation').fadeIn();
    });

    $('div.modal__close').on('click', function(){
        $('.overlay, #consultation, #buy, #thanks').fadeOut();
    });

    $('[data-modal="buy"]').each(function(i){
        $(this).on('click', function(){
            $('.overlay, #buy').fadeIn();
            $('.modal__description_model').text($('.catalog-item__caption').eq(i).text());
        });
    });

    $('input[name="phone"]').mask("+375(99)999-99-99");

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultation, #buy').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });

    //smooth scroll
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600){
            $('.page-up').fadeIn();
        }else{
            $('.page-up').fadeOut();
        } 
    });
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
    new WOW().init();

});