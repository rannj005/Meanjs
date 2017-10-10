$(document).ready(function(){
var count = 0;
$("button").click(function(){
  count++;
  
  if(count%2!=0)
  {
    $(this).text("x");
    $(this).addClass("x");
  }
 else if(count%2==0)
    {
      $(this).text("o");
      $(this).addClass("o");  
    }
      if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
   {
	 alert('O wins');
	 $("button").text("");
	$("button").removeClass('o');
	$("button").removeClass('x');
     count=0;
   }
    if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
  {
   alert('X wins');
   $("button").text("");
	$("button").removeClass('o');
	$("button").removeClass('x');
    count=0;
  }
  else if (count == 9)
  {
	alert('Its a tie.');
	$("button").text("");
	$("button").removeClass('o');
	$("button").removeClass('x');
	count = 0;
  }
});
});