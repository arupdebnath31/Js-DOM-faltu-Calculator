//guessing number

var totalwin = 0;
var totalloss = 0;

for (let i = 0; i < 5; i++) {
    var guessNumber = prompt("Enter a number 1 to 5:");
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber == randomNumber) {
        console.log("You have won...Congrats");
        totalwin++;
    } else {
        console.log("You have Lost..!!");
        console.log("Random NUmber was: " + randomNumber);
        totalloss++;
    }
}


console.log(totalwin);
console.log(totalloss);
var a = 13;
document.ge

