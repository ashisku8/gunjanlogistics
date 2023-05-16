$(document).ready(function() {
	$('#abt').show();
	$('#cont').hide();

	$('#contact').click(function() {

		$('#abt').hide();

		$('#cont').show();

	});

	$('#home').click(function() {

		$('#abt').show();

		$('#cont').hide();

	});

});