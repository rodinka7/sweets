'use strict';

module.exports = function() {
	$(document).ready(function() { // вся мaгия пoслe зaгрузки стрaницы
		$('.error').css({'opacity': 0});

		$("#form").submit(function(){ // пeрeхвaтывaeм всe при сoбытии oтпрaвки
			$('.error').css({'opacity': 0});

			var name = $('#name').val(),
				email = $('#email').val(),
				message = $('#message').val(),
				title = $('#title').val(),
				phone = $('#phone').val();
			
			if (name == "") {
				$("#error__name").animate({'opacity': 1}, 500);
				$("#name").focus();
				return false;
			}
			if (email == "") {
				$("#error__email").animate({'opacity': 1}, 500);
				$("#email").focus();
				return false;
			}

			if (phone == "") {
				$("#error__phone").animate({'opacity': 1}, 500);
				$("#phone").focus();
				return false;
			}
			if (title == "") {
				$("#error__title").animate({'opacity': 1}, 500);
				$("#title").focus();
				return false;
			}

			if (message == "") {
				$("#error__message").animate({'opacity': 1}, 500);
				$("#message").focus();
				return false;
			}

			var form_data = $(this).serialize();

			$.ajax({
				type: "POST",
				url: "send.php",
				data: form_data,
				success: function() {
					$('#form').html("<div id='form__mess'></div>");
					$('#form__mess').html("<h2>Ваше сообщение отправлено!</h2>")
						.append("<p>Мы свяжемся с Вами в ближайшее время.</p>")
						.hide()
						.fadeIn(1000, function() {
							$('#form__mess').append("<img id='checkmark' src='./assets/img/check.png' />");
						});
					}
				});
			return false;
		});
	}); 
};