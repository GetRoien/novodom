$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip();

	$(".panel-toggle > .panel-heading").click(function() {
		$(this).toggleClass("active");
		$(this).next().slideToggle("fast");
		$(this).find("a.arrow").toggleClass('active');
	});

});