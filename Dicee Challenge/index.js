var randomnumer1 = Math.floor(Math.random() * 6 + 1);
var randomnumer2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage = "dice" + randomnumer1 + ".png"; 
var randomImageSource = "images/" + randomDiceImage;
var randomDiceImage2 = "dice" + randomnumer2 + ".png"; 
var randomImageSource2 = "images/" + randomDiceImage2;
document.querySelector(".img1").setAttribute("src",randomImageSource );
document.querySelector(".img2").setAttribute("src",randomImageSource2 );
if (randomnumer1 > randomnumer2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 wins!";
}
else if (randomnumer1 < randomnumer2) {
    document.querySelector("h1").innerHTML = "🚩 Player2 wins!";
}
else if(randomnumer1 === randomnumer2)
{
    document.querySelector("h1").innerHTML = "DRAW";
}