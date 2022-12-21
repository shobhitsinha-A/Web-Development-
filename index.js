$("h1").addClass("big-title");

$("button").text("ME CLICK!")

$("a").attr("href","https://www.yahoo.com");

$("button").click(function(){
  $("h1").css("color","purple");
});

$("input").keydown(function(event){
    //console.log(event.key);
    $("h1").text(event.key);
});

$("button").on("click",function()
{
  //$("h1").toggle();
  $("h1").slideUp().slideDown().animate({opacity:0.7});
  
});
