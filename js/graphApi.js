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
	$('article').append('<form><label for="username">username:</label><id="username" input type="text"><label for="password">password:</label><id="password" input type="password"><input id="loginBtn" class="btn btn-success" type="submit">login<input id="signupBtn" class="btn btn-primary" type="submit">signup<input id="fbloginBtn" class="btn btn-primary" type="submit">login with facebook</form>');
}
function indexView(){
	
}