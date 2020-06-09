var key =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var pos=0;
var correct=0;
var wrong=0;
var time=0;
var flag=0;
var co=$("#correct");
var wr=$("#wrong");
var ti=$("#time");
var timeFunction;
// var time=setInterval(timeFunction,1000);
function selectWord()
{

	pos=Math.floor(Math.random() * key.length);
	$("#boxhead").text(key[pos]);
	$(".box").fadeIn();
	
}

$("body").on("keypress",function(event){
if(flag==0){
if($("#boxhead").text()==event.key)
{
	$(".box").fadeOut(150,function(){

		selectWord();
		
	});
	correct+=1;
}
else
{
	$(".box").fadeOut(150,function(){

		selectWord();
		
	});
	wrong+=1;
	
}

result();
}

});


$("#start").on("click",function(){
	
	reset();
selectWord();
result();
$(this).fadeOut(1000);
timeFunction=setInterval(function(){
	if(time==60)
	{	flag=1;
		$("#start").text("ReStart");
		$("#start").fadeIn(1000);
		clearInterval(timeFunction);
	}
	else
	{
		time+=1;
	ti.text(time+"s");
	}
	
},1000);


});

function reset()
{ 
 correct=0;
 wrong=0;
time=0;
flag=0;
}

function result()
{
	co.text(correct);
wr.text(wrong);
}