$(document).ready(function(){
	var current = Parse.User.current();
	if(current){
	
	}
	else{
		loginView();
	}
});
function loginView(){
	$('#loginView').show();
}
function indexView(){
	
}