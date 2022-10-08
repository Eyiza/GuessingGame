let username = prompt("What is your username?");
let points = 0;

let guessNumber = (range) => {
    let guess = prompt("Guess a number between 1 and " + range);
    let randomNumber = Math.floor(Math.random() * (range)) + 1;
    console.log(randomNumber);
    if (guess == randomNumber) {
        points ++;
        range ++;
        alert("You guessed correctly! You now have " + points + " points.");
        guessNumber(range);
    } else {
        alert("You guessed incorrectly! Total points is " + points + ".");
    }  
    // while (guess == randomNumber) {
    //     points += 1;
    //     range += 1;
    //     alert("You guessed correctly! You now have " + points + " points.");
    //     guessNumber(range);
    //     if (guess != randomNumber) {
    //         alert("You guessed incorrectly! You have " + points + " points.");
    //         break;
    //     }
    // }    
}

guessNumber(2);

