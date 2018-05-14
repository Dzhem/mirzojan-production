$(function() {

	// Accordion menu
	
	$('.nav__list-second').hide();

	$('.nav__list*>li').click(function() {
		var findSubmenu = $(this).find('.nav__list-second');

		if (findSubmenu.is(':visible')) {
			findSubmenu.slideUp(600);
		} else {
			$('.nav__list-second').slideUp(600);
			findSubmenu.slideDown(600);
		}

	});
});
