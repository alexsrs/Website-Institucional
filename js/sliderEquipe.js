$(function(){

	initSlider();

	function initSlider(){

		var amt = $('.side-right-wrapper').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('side-right-wrapper').css('width',sizeBoxSingle+'%');
		$('.scrollEquipe-wrapper').css('width',sizeContainer+'%');
	}

	
})