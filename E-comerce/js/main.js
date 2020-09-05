// Header Top Part 
$(document).ready(function(){

    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        speed:1000,
        smartSpeed:1000,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })




    // Sub Slider 
    $('.sub-slider-active').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        speed:1000,
        smartSpeed:1000,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    // Product-1 
    $('.product-slider-1').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // Brand Slider
    $('.brand-slider-active').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })


    // Product-2 
    $('.product-slider-2').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // Blog Slider
    $('.blog-slider-active').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })

})


