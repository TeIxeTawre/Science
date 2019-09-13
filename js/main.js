jQuery(document).ready(function() {
	$('.header-owl').owlCarousel({
		items: 1,
		nav: false,
		loop: true
	});
	$('.logo').addClass('logo-start');
	$('.science').addClass('fadeInLeft')
	$('.search i').addClass('fadeIn')
	$('.ham').on('click', function(event) {
		$('body').toggleClass('activeMenu');
		$('.search').toggleClass('fadeOut');
	});
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	    $('body').toggleClass('active-phone');
	}
});