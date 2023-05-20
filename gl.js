$(document).ready(function() {
	$('#abt').show();
	$('#cont').hide();
	$('#serv').hide();

	$('#contact').click(function() {

		$('#abt').hide();
		
		$('#serv').hide();

		$('#cont').show();

	});
	
		$('#service').click(function() {

		$('#abt').hide();

		$('#cont').hide();
		
		$('#serv').show();

	});

	$('#home').click(function() {

		$('#abt').show();

		$('#cont').hide();
		
		$('#serv').hide();

	});

});