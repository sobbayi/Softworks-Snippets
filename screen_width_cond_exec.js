/*
 Dependencies jQuery
 Sources alternates:
 Google:
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.1/jquery.min.js"></script>
	
 Microsoft:
	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.0.min.js"></script>
*/


//Using jQuery to run code example

var targetWidth = 768;
if ( $(window).width() >= targetWidth) {     
	//Add your javascript for screens wider than or equal to 768 here
}
else {
	//Add your javascript for screens smaller than 768 here
}

//Using jQuery to run code after document is ready example

$(document).ready(function(){
	var targetWidth = 768;
	if ( $(window).width() >= targetWidth) {     
	  //Add your javascript for screens wider than or equal to 768 here
	}
	else {
	  //Add your javascript for screens smaller than 768 here
	} 
});

//Using jQuery to run code after document (including resources) is ready example

$(window).load(function(){
	var targetWidth = 768;
	if ( $(window).width() >= targetWidth) {     
	  //Add your javascript for screens wider than or equal to 768 here
	}
	else {
	  //Add your javascript for screens smaller than 768 here
	} 
});


// Using Vanilla Js
w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 768;
if ( w >= targetWidth) {     
  //Add your javascript for screens wider than or equal to 768 here
}
else {
  //Add your javascript for screens smaller than 768 here
}

// Using Vanilla Js to load when document is ready
window.onload=function(){
	w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
	var targetWidth = 768;
	if ( w >= targetWidth) {     
	  //Add your javascript for screens wider than or equal to 768 here
	}
	else {
	  //Add your javascript for screens smaller than 768 here
	}  
};