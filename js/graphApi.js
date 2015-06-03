$(document).ready(function(){
	var current = Parse.User.current();
	if(current){
	    indexView();
		FB.getLoginStatus(function(response) {
		     if (response.status === 'connected') {
		         uid = response.authResponse.userID;
		         accessToken = response.authResponse.accessToken;
		         FB.api('/me/picture?type=large', function (response) {
				    $('#fbImgView').html("<h5>Here are your profile photo</h5><img src="+response.data.url+" crossorigin=\"anonymous\" id=preview1 />");          
		         });
		     }
	     });
	}
	else{
		loginView();
	}
});

$(document).on('click','#loginBtn',function(e){
	e.preventDefault();
	login();
});
$(document).on('click','#signupBtn',function(e){
	e.preventDefault();
	signup();
});
$(document).on('click','#fbloginBtn',function(e){
	e.preventDefault();
	fblogin();
});
$(document).on('click','#logoutBtn',function(e){
	e.preventDefault();
	logout();
});
function loginView(){
	$('#logoutBtn').hide();
	
	
	$('#loginView').show();
	$('.notLogin').show();
	$('body').css("background-image","url(img/background.jpg)");
	$('#fbImgView').html('');
	
}
function indexView(){
	$('#loginView').hide();
	$('.notLogin').hide();
	
	$('#logoutBtn').show();
	$('body').css("background-image","url(img/index.jpg)");
	
}

function login(){
  Parse.User.logIn($('#username').val(),$('#password').val(),{
	  success:function(data){
	  	  alert("登入成功");
          indexView();
	  },
	  error:function(data,error){
		  alert("登入失敗");
	  }
  });
}
function signup(){
  var user = new Parse.User();
  user.set("username",$('#username').val());
  user.set("password",$('#password').val());
  user.signUp(null,{
	  success: function(user){
		  alert("註冊成功");
		  indexView();
	  },
	  error: function(data,error){
		  alert("註冊失敗");
	  }
  }); 
}
function logout(){
   Parse.User.logOut();
   FB.logout(function(response){
   	
   });
   loginView();	
}