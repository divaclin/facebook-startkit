$(document).ready(function(){
	var current = Parse.User.current();
	if(current){
	
	}
	else{
		loginView();
	}
});
function loginView(){
	$('article').empty();
	$('article').append('<form><label>username:<id="username" input type="text"></label><label>password:<id="password" input type="password"></label><button id="loginBtn" class="btn btn-success" type="submit">login</button><button id="signupBtn" class="btn btn-primary" type="submit">signUp</button><button id="fbloginBtn" class="btn btn-primary" type="submit">FBlogin</button></form>');
}
function indexView(){
	
}