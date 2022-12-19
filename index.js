
//document.querySelector("button").addEventListener("click",handleClick);

//document.querySelector("button").addEventListener("click",handleClick());
//if above then as soon as script tag is reached function will be called immediately
//function handleClick(){
//alert("i got clicked");
//}

//anonymous function

//detecting button press
var numOfDBtn = document.querySelectorAll(".drum").length;
for (var i=0;i<numOfDBtn;i++)
{
  //document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //alert("I got clicked!")
  //});

  //var audio = new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/tom-1.mp3");
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  //  audio.play();
  //console.log(this.style.color="darkgreen");
  var btnIH = this.innerHTML;
  makeSound(btnIH);
  buttonAnimation(btnIH);
  });
}

//detecting keyboard pressed
document.addEventListener("keydown",function(event){
  //alert("key was pressed");
  makeSound(event.key);
  buttonAnimation(event.key);
  //console.log(event);
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1=new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3=new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4=new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash=new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/crash.mp3");
      crash.play();
      break;
      case "k":
        var kickbass=new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/kick-bass.mp3");
        kickbass.play();
        break;
      case "l":
        var snare=new Audio("/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Drum Kit Starting Files/sounds/snare.mp3");
        snare.play();
        break;
    default:console.log(key);

  }
}

function buttonAnimation(currentKey){
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");

  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },100);
}
