jQuery(document).ready(function() {
	var popUser = false;

	$('.header-owl').owlCarousel({
		items: 1,
		nav: false,
		loop: true
	});

	$('.logo').addClass('logo-start');
	$('.science').addClass('fadeInLeft animated')
	$('nav a i').addClass('fadeIn animated')
	$('.ham').on('click', function(event) {
		$('body').toggleClass('activeMenu');
		$('.search').toggleClass('fadeOut animated');
	});
	$('.menu-a').addClass('fadeIn animated')
	$('.bright .window a').toggleClass('fadeIn animated');
	$('.bright .window .window-pair p').toggleClass('fadeInDown animated');


	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
		$('body').addClass('active-phone');
	$(window).resize(function() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		    $('body').addClass('active-phone');
		} else {
			$('body').removeClass('active-phone');
		}
	});

	$('body').on('click', function() {
		if (popUser == false) {
			$('.popap-active').removeClass('popap-active');
		}
	});

	$('.user').on('click', function(event) {
		event.preventDefault();
		$('.popap-user').toggleClass('popap-active');
	});

	$('.popap-user').hover(function() {
		popUser = true;
	}, function() {
		popUser = false;
	});

	$('.user').hover(function() {
		popUser = true;
	}, function() {
		popUser = false;
	});

	
});