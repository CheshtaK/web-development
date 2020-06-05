//strike through functionality
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});


//deleting task
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});

	event.stopPropagation();
});


//adding task
$("input").keypress(function(event){
	if(event.which == 13){
		var task = $("input").val();
		$("ul").append("<li><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span>" + task + "</li>");
		$("input").val("");
	}
});


//toggling the input form
$("#plus").click(function(){
	$("input").fadeToggle();
});