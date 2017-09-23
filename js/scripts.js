var count = 1;
console.log(count)
$(document).ready(function() {
	
	$("button").click(myfunct)
	$("#demo").html("Hello, World!");
	// count=count+1
	// console.log(count);
});
function myfunct (){
	$("#demo").html("hi how are  you "+count)
	count=count+1
}
