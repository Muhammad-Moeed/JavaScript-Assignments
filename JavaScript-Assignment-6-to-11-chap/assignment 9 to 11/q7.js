var SecretNo = 4
var GuessNumber = +prompt("Guess the secret number")

if (GuessNumber === SecretNo) {
    document.write(`Bingo! Correct Answer`)
}
else if (GuessNumber + 1 === SecretNo) {
    document.write(`Close enough to the correct answer`);
} else {
    document.write(`Sorry, try again!`);
}