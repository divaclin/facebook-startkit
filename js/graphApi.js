$(document).ready(function(){
	var current = Parse.User.current();
	if(current){
	
	}
	else{
		loginView();
	}
});

$(document).on('#loginBtn','click',function(){
	login();
});
$(document).on('#signupBtn','click',function(){
	signup();
});
$(document).on('#fbloginBtn','click',function(){
	fblogin();
});
$(document).on('#logoutBtn','click',function(){
	logout();
});
function loginView(){
	$('#loginView').show();
	$('.notLogin').show();
}
function indexView(){
	
}