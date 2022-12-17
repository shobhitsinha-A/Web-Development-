var randomNumber1 = Math.floor((Math.random()*6+1));
var randomNumber2 = Math.floor((Math.random()*6+1));
console.log(randomNumber1);
console.log(randomNumber2);
image1 = "/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Dicee Challenge - Starting Files/images/dice"+randomNumber1+".png";
image2 = "/Users/shobhitsinha/Documents/WebDevelopment/WebDevBootCamp/Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png";
//document.querySelector(".dice .img1").src=image1;
//document.querySelector(".dice .img2").src=image2;

document.querySelector(".dice .img1").setAttribute("src",image1)
document.querySelector(".dice .img2").setAttribute("src",image2)

if (randomNumber1 > randomNumber2){
  document.querySelector(".container h1").textContent="🚩 Player 1 wins "
}
else if (randomNumber2>randomNumber1) {
  document.querySelector(".container h1").textContent="Player 2 wins 🚩"
}
else{
  document.querySelector(".container h1").textContent="Draw!"
}
