$(document).ready(function(){

$(".sector11").hover(function(){
$('#pop1up1').css("display","block");
},function(){
$('#pop1up1').css("display","none");
});

$(".sector22").hover(function(){
$('#pop1up1').css("display","block");
},function(){
$('#pop1up1').css("display","none");
});


$(".sector33").hover(function(){
$('#popup33').css("display","block");
},function(){
$('#popup33').css("display","none");
});


$(".sector44").hover(function(){
$('#popup44').css("display","block");
},function(){
$('#popup44').css("display","none");
});


$(".sector55").hover(function(){
$('#popup55').css("display","block");
},function(){
$('#popup55').css("display","none");
});


$(".sector66").hover(function(){
$('#popup66').css("display","block");
},function(){
$('#popup66').css("display","none");
});

$(".sector7").hover(function(){
$('#popup77').css("display","block");
},function(){
$('#popup77').css("display","none");
});

});

$(document).mousemove(function(event){
var mx1=event.pageX+10;
var my1=event.pageY+20;
$('#popup11').css("left",mx1+"px").css("top",my1+"px");
$('#popup33').css("left",mx1+"px").css("top",my1+"px");
$('#popup44').css("left",mx1+"px").css("top",my1+"px");
$('#popup55').css("left",mx1+"px").css("top",my1+"px");
$('#popup66').css("left",mx1+"px").css("top",my1+"px");
$('#popup77').css("left",mx1+"px").css("top",my1+"px");
$('#pop1up1').css("left",mx1+"px").css("top",my1+"px");
});

