jQuery(document).ready(function() {
	$('.header-owl').owlCarousel({
		items: 1,
		nav: false,
		loop: true
	});

	$('.logo').addClass('logo-start');
	$('.science').addClass('fadeInLeft')
	$('nav a i').addClass('fadeIn')
	$('.ham').on('click', function(event) {
		$('body').toggleClass('activeMenu');
		$('.search').toggleClass('fadeOut');
	});

	$('.btn').hover(function() {
		$(this).removeClass('animated');
		$(this).addClass('pulse animated');
	}, function() {
		$(this).removeClass('pulse');
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
		$('body').addClass('active-phone');
	$(window).resize(function() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		    $('body').addClass('active-phone');
		} else {
			$('body').removeClass('active-phone');
		}
	});
});