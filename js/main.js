this.pngfix = function() {
	var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
	var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
	if (jQuery.browser.msie && (ie55 || ie6)) {		
		$("*").each(function(){
			var bgIMG = $(this).css('background-image');
			if(bgIMG.indexOf(".png")!=-1){
				var iebg = bgIMG.split('url("')[1].split('")')[0];
				$(this).css('background-image', 'none');
				$(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='crop')";
			};
		});
	};		
};

this.form = function(){	
	
	this.validate = function(name, email, message){
		$("span.error").remove();
		var valid = true;
		//name
		if(name == "") {
			error($("#name"),"Please tell us your name.")
			valid = false;
		};	
		//email
		if(!checkEmail(email)) {
			error($("#email"),"We need a valid email address.")
			valid = false;
		};			
		//messgae
		if(message == "") {
			error($("#message"),"Please write a message.")
			valid = false;
		};					
		return valid;
	};
	
	this.checkEmail = function(str){
	  var regEx = /^[^@]+@[^@]+.[a-z]{2,}$/;
	  return (str.search(regEx) != -1);
	};	
	
	this.error = function(obj,text){
		var parent = $(obj).parent();
		parent.append("<span class=\"error\">"+ text +"</span>");
		$("span.error",parent).hide().show("fast");
	};	
		
	$("#contactForm button").click(function(){																
		var name = $("#name").val();
		var email = $("#email").val();	 		
		var message = $("#message").val();	 				
		if(validate(name, email, message)) return true;
		return false;
	});	
};

this.init = function() {
	form();
	pngfix();
};

$(document).ready(function(){	
	init();
});