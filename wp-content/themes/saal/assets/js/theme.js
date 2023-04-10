(function($) {
    'use strict';

    function mainMenu() {
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });

        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1023) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    var panelIcon = $('.bar-item'),
        panelClose = $('.panel-close,.panel-overlay'),
        panelWrap = $('.offcanvas-panel');
    panelIcon.on('click', function(e) {
        panelWrap.toggleClass('panel-on');
        e.preventDefault();
    });
    panelClose.on('click', function(e) {
        panelWrap.removeClass('panel-on');
        e.preventDefault();
    });
    $(".navbar-toggler, .navbar-close,.nav-overlay").on('click', function(e) {
        $(".nav-overlay").toggleClass("active");
    });
    $(".nav-overlay").on('click', function(e) {
        $(".navbar-toggler").removeClass("active");
        $(".nav-menu").removeClass("menu-on");
    });
    $(document).ready(function() {
        mainMenu();
    });
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 100);
    });
    $('.count').counterUp({
        delay: 100,
        time: 4000
    });
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
//    $('select').niceSelect();
    $('.portfolio-slider-one').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });
    $('.testimonial-slider-one').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: false
            }
        }]
    });
    var sliderdots = $('.testimonial-two-dots');
    $('.testimonial-slider-two').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: false,
        appendDots: sliderdots,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
    });
    $('.testimonial-slider-three').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    var sliderarrows = $('.partners-arrows');
    $('.partners-slider-one').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        appendArrows: sliderarrows,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.portfolio-area').imagesLoaded(function() {
        $('.filter-btn').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.filter-btn li').on('click', function(e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-column',
            layoutMode: 'fitRows'
        });
    });
    $('.masonry-portfolio').imagesLoaded(function() {
        $('.filter-btn').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.filter-btn li').on('click', function(e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.portfolio-column',
            percentPosition: true
        });
    });
    new WOW().init();
    $('.counter-area-v2').on('mouseover', '.counter-item', function() {
        $('.counter-item.item-active').removeClass('item-active');
        $(this).addClass('item-active');
    });
    $('.scene').each(function() {
        new Parallax($(this)[0]);
    });
    $("a.page-scroll").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        var position = $(hash).offset().top - 50;
        $("html").animate({
            scrollTop: position
        }, 1000);
    });
    $('.pricing-nav-tab a:last-child').click(function() {
        $(this).parent('.pricing-nav-tab').addClass('for-year');
    });
    $('.pricing-nav-tab a:first-child').click(function() {
        $(this).parent('.pricing-nav-tab').removeClass('for-year');
    });
})(window.jQuery);