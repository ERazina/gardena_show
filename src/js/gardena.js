$(document).ready(function() {
    $('.slider').owlCarousel({
        margin: 0,
        nav: false,
        dots: false,
        responsiveClass:true,
        responsive: {
            0: {
                items: 3, 
                center: true,
                loop: true
            },
            640: {
                items: 5,
                center: true,
                loop: true
            },
             940: {
                items: 5,
                center: true,
                loop: true
            }
        }
    });
    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});