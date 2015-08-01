// @codekit-prepend "/retina.min.js"
// @codekit-prepend "/jquery.min.js"
// @codekit-prepend "/bootstrap.min.js"
// @codekit-prepend "/jpreloader.min.js"
// @codekit-prepend "/detectmobilebrowser.js"
// @codekit-prepend "/debouncer.js"
// @codekit-prepend "/jquery.easing.min.js"
// @codekit-prepend "/jquery.sticky.js"
// @codekit-prepend "/jquery.magnific-popup.min.js"
// @codekit-prepend "/jquery.matchHeight-min.js"
// @codekit-prepend "/wow.min.js"
// @codekit-prepend "/skrollr.min.js"
// @codekit-prepend "/owl.carousel.js"

// @codekit-append "/owl.js"


$(function($){
	
	/*--------------------------------------------*/
	/* PRELOADER
	/*--------------------------------------------*/
		
	$(document).ready(function(){	
		$('body').jpreLoader({
			showPercentage: false,
			loaderVPos: '50%'
		});
	});	
	
	/*--------------------------------------------*/
	/* SMOOTH SCROLL
	/*--------------------------------------------*/
	
	$(document).ready(function(){
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
	});
	
	/*--------------------------------------------*/
	/* CLOSE MENU ON CLICK
	/*--------------------------------------------*/
	
	 $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
	
	/*--------------------------------------------*/
	/* MATCH HEIGHT
	/*--------------------------------------------*/
	
	$(window).smartload(function(){
		$('.match-height').matchHeight();
	});
	
	/*--------------------------------------------*/
	/* PARALLAX
	/*--------------------------------------------*/
	
	$(window).smartload(function(){
        if (jQuery.browser.mobile === false){
            var s = skrollr.init({
                forceHeight: false
            });

            s.refresh($('.parallax'));
        }
    });
	
	/*--------------------------------------------*/
	/* STICKY NAVIGATION
	/*--------------------------------------------*/
	
	var stickyMenu = function(){
        var nav = $('.navbar.navbar-fixed-top');
        nav.unstick();
        nav.sticky({topSpacing: 0});
    };
    
    stickyMenu();
    
    $(window).smartresize(function(){
        pageScroll();
        stickyMenu();
    });
    
    /*--------------------------------------------*/
	/* WOW.JS - on non-touch devices
	/*--------------------------------------------*/
	var isPhoneDevice = "ontouchstart" in document.documentElement;
	$(document).ready(function() {
		if (isPhoneDevice) {
		} 
		else {
		    wow = new WOW({
		    	offset: 50
		    })
		    wow.init();
		}
	});
});