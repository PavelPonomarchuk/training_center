'use strict';

var $burger = $('.header__mobile-burger');
var $popup = $('.header__popup');

function openPopup() {	
	$($burger).addClass('is-active-burger');
	$($popup).addClass('is-active-popup');
	$burger.data('open', 1);
}

function closePopup() {	
	$($burger).removeClass('is-active-burger');
	$($popup).removeClass('is-active-popup');
	$burger.data('open', 0);
}

$burger.click(function(e) {
	e.preventDefault(); //без этого тоже вроде бы работает
	if ($burger.data('open') == 0) openPopup();
	else closePopup();
});