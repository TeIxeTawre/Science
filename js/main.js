jQuery(document).ready(function() {
	var popUser = false;

	$('.header-owl').owlCarousel({
		items: 1,
		nav: false,
		loop: false
	});

	var handler = function(){
		$('.science').removeEventListener('animationend', handler);
	};

	$('.logo').addClass('logo-start');
	$('.ham').on('click', function(event) {
		$('body').toggleClass('activeMenu');
		$('.search').toggleClass('fadeOut animated');
	});


	$('.science').addClass('fadeInLeft animated');
	$('nav a i').addClass('fadeIn animated');
	$('.menu-a').addClass('fadeIn animated');
	$('.bright .window a').addClass('fadeIn animated');
	$('.bright .window .window-pair p').addClass('fadeInDown animated');

	setTimeout(function(){
		$('.science').removeClass('fadeInLeft animated');
		$('nav a i').removeClass('fadeIn animated');
		$('.menu-a').removeClass('fadeIn animated');
		$('.bright .window a').removeClass('fadeIn animated');
		$('.bright .window .window-pair p').removeClass('fadeInDown animated');
	}, 2000);

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


function ref(fn) {
	window.requestAnimationFrame(function(){
		window.requestAnimationFrame(function(){
			fn();
		});
	});
}