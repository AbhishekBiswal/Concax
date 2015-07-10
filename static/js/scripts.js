$(document).ready(function(){


hideAll();
$("form.signup-1").slideDown();
// Signup Form:
$("#signup a.submit").click(function(e){
	e.preventDefault();
	var id = $(this).attr("id");
	hideAll();
	hideAll();
	hideAll();
	$("form."+id).slideDown();
});


// AJAX Form:
$("form.ajax").submit(function(e){
	e.preventDefault();
	loading();
	var action = $(this).attr("action");
	$.ajax({
		url: action,
		data: $(this).serialize(),
		type: "POST",
		success: function(resp)
		{
			loading();
			$("#jq").html(resp);
		}
	});
})

// submit first signup form:
$("form.signup-1").submit(function(e){
	e.preventDefault();
	loading();
	$.ajax({
		url: "/signup/sub",
		data: $("form.signup-1").serialize(),
		type: "POST",
		success: function(resp)
		{
			loading();
			$("#jq").html(resp);
		}
	});
});

});

function hideAll()
{
	$("form.signup-1").hide();
	$("form.signup-2").hide();
	$("form.signup-3").hide();
	$("form.signup-4").hide();
}

function loading()
{
	$("#loading").toggle();
}