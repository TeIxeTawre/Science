jQuery(document).ready(function() {
	$('.logo').addClass('logo-start');
	$('.science').addClass('fadeInLeftBig')
	$('.search i').addClass('fadeIn')
	$('.ham').on('click', function(event) {
		$('body').toggleClass('activeMenu');
		$('.search').toggleClass('fadeOut');
	});
});