        $(document).ready(function () {
            $('.saal_carousel__industryar').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,        
                pauseOnHover:false, 
                rtl: true,
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

            $('.saal_carousel__aicar').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                rtl: true,
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

            $('.saal_carousel__newsar').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000, 
                rtl: true,       
                
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

    $('.saal_carousel__news').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,    
        rtl: true,    
        
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
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
                rtl: true,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            //arrows: true,
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            //arrows: false,
                            //centerMode: true,
                            //centerPadding: '40px',
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
              rtl: true,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
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
              rtl: true,
              prevArrow:"<div class='slick-video-arrow sval'><img class='a-left control-c prev slick-prev' src='../../wp-content/themes/saal/assets/images/left-arrow.svg'></div>",
              nextArrow:"<div class='slick-video-arrow svar'><img class='a-right control-c next slick-next' src='../../wp-content/themes/saal/assets/images/right-arrow.svg'></div>",
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