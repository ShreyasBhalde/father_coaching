


$(function () {
"use strict";


	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});

	// contact-form 
	$(".contact-btn").on('click', function () {
		$(".contact-wrapper").addClass("show");
	});
	$(".close").on('click', function () {
		$(".contact-wrapper").removeClass("show");
	});

	// contact-form-28
	$("#contact-btn").on('click', function () {
		$("#contact-wrapper").addClass("show");
	});
	$(".close").on('click', function () {
		$("#contact-wrapper").removeClass("show");
	});
	// subscribe-form-28
	$("#subscribe-btn").on('click', function () {
		$("#subscribe-wrapper").addClass("show");
	});
	$(".close").on('click', function () {
		$("#subscribe-wrapper").removeClass("show");
	});

	// sidebar
	$(".menu-toggle-btn").on('click', function () {
		$(".sidebar").addClass("show");
	});
	$(".close").on('click', function () {
		$(".sidebar").removeClass("show");
	});

	//Scroll top 
	$(".scroll-top").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn(); }
		else {
			$(".scroll-top").fadeOut();
		}
	});

	//Countdown

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime(
				'<div>%D</div><div>%H</div><div>%M</div><div>%S</div>'
			));
		});
	});

	

	// WOW active
	new WOW().init();

});	

