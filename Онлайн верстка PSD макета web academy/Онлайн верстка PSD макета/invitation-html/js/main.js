$(document).ready(function(){

	$('.about__toggle').click(function(event){
		event.preventDefault();
		console.log('Click!');

		$('.about-content__box').hide();
		var href = $(this).attr('href'); // '#private'

		console.log(href);
		$(href).fadeIn();
	});


	var windowHeight = $(window).height();
	console.log(windowHeight);

	// Следим за скроллом, и показываем / скрываем кнопку
	$(window).scroll(function(){
		console.log( $(this).scrollTop() );
		if ( $(this).scrollTop() > windowHeight) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});

	// При клике на кнопку - делаем прокуртку наверх страницы
	$('#scrollToTop').click(function(event){
		console.log(11111);
		event.preventDefault();
		$('html').animate({scrollTop: 0}, 800)
	});

});
