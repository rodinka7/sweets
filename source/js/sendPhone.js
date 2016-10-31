'use strict';

module.exports = function() {
	$(document).ready(function() {

		$("#call-form").submit(function(){
			
			var form__data = $(this).serialize();

			$.ajax({
				type: "POST",
				url: "sendPhone.php",
				data: form__data,
				success: function() {
					$('#call-form').html("<div id='form__mess'></div>");
					$('#form__mess').html("<h3>Ваше сообщение отправлено!</h3>");
					}
				});
			return false;
		});
	}); 
};