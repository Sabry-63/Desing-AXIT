/*global $ */


$(function () {
    'use strict';
    $('.navbar .nav-link').click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000);
        $('.navbar-collapse').removeClass('show');
    });
    // Add Class Fiexd To Navbar 
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.sochial').offset().top - 30) {
            
            // Checed Class 
            if ($('.navbar').hasClass !== 'scrrolling fixed-top') {
                $('.navbar').addClass('scrrolling fixed-top');
            }
            
        } else {
            $('.navbar').removeClass('scrrolling fixed-top');
        }
        
        // Go TO Up
        if ($(window).scrollTop() > $('.sochial').offset().top) {
            $('.to_top').fadeIn(300);
        } else {
            $('.to_top').fadeOut(300);
        }
        
        if ($(window).scrollTop() > 1) {
            $('.navbar-collapse').removeClass('show');
        }
    });
    // End Add Class
    
    // Go to Top Click 
    $('.to_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    
    //Add Class Secleted For Tabs
    $('.tabs ul li').click(function (e) {
        e.preventDefault();
        $(this).addClass('selcted').siblings().removeClass('selcted');
        $('.tabs .tabs_contnet div').hide();
        $($(this).data('class')).fadeIn();
    });
    
    
});
