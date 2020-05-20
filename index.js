var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomImage1= "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src","images/" + randomImage1);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomImage2= "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src","images/" + randomImage2);

if(randomNumber1===randomNumber2){

  document.querySelector("h1").innerHTML="Its a TIE !";
}
if(randomNumber1>randomNumber2){

  document.querySelector("h1").innerHTML="🚩 Player 1 wins !";
}
if(randomNumber1<randomNumber2){

  document.querySelector("h1").innerHTML="Player 2 wins ! 🚩";
}
