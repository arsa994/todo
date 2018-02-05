$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
})
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut("slow",function(){
		$(this).remove();
	});
event.stopPropagation();

})

$("input[type = 'text']").keypress(function(e){
	if(event.which === 13){
		var toDo = $(this).val();

		$(this).val("");

		$("ul").append("<li> <span> <i class='fa fa-trash'></i> </span> "+ toDo +"</li>");
	}


})
$(".fa-plus").on("click", function(){
	$("input[type = 'text']").fadeToggle();
})