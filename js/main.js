$(document).ready(function() {
	$('#playlist').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.burger').click(function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});
	// Модальное окно

	// открыть по кнопке
	$('.js-button-campaign').click(function() { 
		
		$('.js-overlay-campaign').fadeIn();
		$('.js-overlay-campaign').addClass('disabled');
	});

	// закрыть на крестик
	$('.js-close-campaign').click(function() { 
		$('.js-overlay-campaign').fadeOut();
		
	});

	// закрыть по клику вне окна
	$(document).mouseup(function (e) { 
		var popup = $('.js-popup-campaign');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-campaign').fadeOut();
			
		}
	});

	// открыть по таймеру 
	// $(window).on('load', function () { 
	// 	setTimeout(function(){
	// 		if($('.js-overlay-campaign').hasClass('disabled')) {
	// 			return false;
	// 		} else {
				
	// 			$(".js-overlay-campaign").fadeIn();
	// 		}
	// 	}, 5000);
	// });

	$('.main-page .content .album').slick({
		dots:true,
		autoplay:true,
		autoplaySpeed:4000,
		pauseOnFocus:false,
		pauseOnHover:false,
	});

});