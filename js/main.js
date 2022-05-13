

(function ($) {
	'use strict';

	// Code by tilt init -- Sagar Roy

	if ($('.js-tilt')[0]) {
		$('.js-tilt').tilt({
			glare: true,
			maxGlare: 1
		});
	}

	// Scroll to top -- Sagar Roy
	if ($('body')[0]) {
		$('body').materialScrollTop();
	}


	/** Home page carousel -- sagar Roy */
	if ($('.partner')[0]) {
		$(".partner").owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000,

		});
	}

	/** Mobile menu -- sagar Roy */
	$(".menu-icon img").click(function () {

		$(".mb-menu").animate({
			width: "toggle"
		});
	});

	// code by tirth
	if ($("#accordion")[0]) {
		$(function () {
			$("#accordion").accordion();
		});
	}



	/* Jquery-validation-Riswana*/

	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#contactForm").submit(

		function (event) {

			var isValid = true;

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			}
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}
			$("#name").val(name);

			// validate the email entry with a regular expression
			var email = $("#email").val();
			if (email == "") {
				$("#email").next().text("This field is required.");
				isValid = false;
			}
			else if (!emailPattern.test(email)) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			}
			else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			// validate the phone number
			var phone = $("#phone").val().trim();
			if (phone == "") {
				$("#phone").next().text("This field is required.");
				isValid = false;
			}
			else if (!phonePattern.test(phone)) {
				$("#phone").next().text("Must be a valid phone number.");
				isValid = false;
			}
			else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);

			// validate the message entry
			var message = $("#message").val().trim();
			if (message == "") {
				$("#message").next().text("This field is required.");
				isValid = false;
			}
			else {
				$("#message").val(message);
				$("#message").next().text("");
			}
			$("#message").val(message);

			// prevent the submission of the form if any entries are invalid
			if (isValid == false) {
				event.preventDefault();
			}
			if (isValid == true) {
				alert("Successfully Sent");
			}
		}); // end submit


	/*** CODE BY riswana  END ***/



}(jQuery))



