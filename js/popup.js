$(document).ready(function(){

$(".sector1").hover(function(){
$('#popup1').css("display","block");
},function(){
$('#popup1').css("display","none");
});

$(document).mousemove(function(event){
var mx=event.pageX+10;
var my=event.pageY+20;
$('#popup1').css("left",mx+"px").css("top",my+"px");
$('#popup3').css("left",mx+"px").css("top",my+"px");
$('#popup4').css("left",mx+"px").css("top",my+"px");
$('#popup5').css("left",mx+"px").css("top",my+"px");
$('#popup6').css("left",mx+"px").css("top",my+"px");
});


$(".sector2").hover(function(){
$('#popup1').css("display","block");
},function(){
$('#popup1').css("display","none");
});


$(".sector3").hover(function(){
$('#popup3').css("display","block");
},function(){
$('#popup3').css("display","none");
});


$(".sector4").hover(function(){
$('#popup4').css("display","block");
},function(){
$('#popup4').css("display","none");
});


$(".sector5").hover(function(){
$('#popup5').css("display","block");
},function(){
$('#popup5').css("display","none");
});


$(".sector6").hover(function(){
$('#popup6').css("display","block");
},function(){
$('#popup6').css("display","none");
});


 
});