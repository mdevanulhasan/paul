$(document).ready(function(){
	// MixitUp
	var mixer = mixitup('.grid-portfolio-container');
	// Scrollify
	$.scrollify({
		section: ".scrollify",
		setHeights: false,
		updateHash: false,
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: false,
		overflowScroll: false,
		touchScroll: false,
	});
});
// Hamburger Menu
function openMenu() {
	document.getElementById('navbar').style.height = "100vh";
	// document.getElementById('navbar').style.width = "100%";
}
function closeMenu() {
	document.getElementById('navbar').style.height = "0";
	// document.getElementById('navbar').style.width = "100%";
}
// Smooth Scroll
$(function(){
	$('.menu-item a, .scroll-down a, a[href="#hero"]').on('click', function(){
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});
});