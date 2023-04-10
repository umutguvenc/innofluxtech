$(document).ready(function() {
    $('.saal_carousel__industry').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,        
        pauseOnHover:false,        
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]

    });


    $('.saal_carousel__aic').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 3000, 
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 3000,   
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,   
                }
            }
        ]

    });


    $('.saal_carousel__news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,        
        
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.saal_carousel__news2').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,  
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
    });




    $('.center').slick({
        centerMode: true,
        centerPadding: '500px',
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,  
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });


    $('.saal_carousel__item--video').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,  
        prevArrow: "<div class='slick-video-arrow sval'><img class='a-left control-c prev slick-prev' src='../wp-content/themes/saal/assets/images/left-arrow.svg'></div>",
        nextArrow: "<div class='slick-video-arrow svar'><img class='a-right control-c next slick-next' src='../wp-content/themes/saal/assets/images/right-arrow.svg'></div>",
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });




});