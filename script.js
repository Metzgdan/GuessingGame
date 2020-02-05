let DoTheThing = function(){

    //computer picks a number
    /* loops have three parts: control variable; control boolean expression control increament/decrement/update


    control varible - controls when the loop executes
    control boolean expression - boolean expression using the control variable which should at some point evalute to false
    control update - assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false


     */



    let restart = "yes";
    while(restart === "yes") {
        let computerNumber = Math.floor((Math.random() * 10) + 1);
        alert(computerNumber);
        //alert to get player's guess
        let playersGuess = parseInt(prompt("guess a number between 1 and 10"), 10);


        while (playersGuess !== computerNumber) {
            if (playersGuess > computerNumber) {
                playersGuess = prompt("Too high Guess again");

            } else
                playersGuess = prompt("Would you like to play again? Type 'yes' or 'no'");

            restart = prompt("would you like to play again? 'yes' or 'no' ");
        }
        alert("You guessed it");

        restart = prompt("Would you like to play again type 'yes' or 'no'");

        //Alert to get player's guess
        //compare guess to number
        // if higher - alert too and then
        // if lower - alert too low and then get players guess
        //if equal - alert you win then ask to restart
        //if yes restart
        //if no stop

let otherFunction = function(){


    //same program with a do-while loop
    let restart;

    do{
        let playerGuess;
        let computerNumber = Math.floor((Math.random()*10)+1);

        do {

            playerGuess = parseInt(prompt("Too low, guess again"),10 );
            if(playerGuess > computerNumber){
                playerGuess = parseInt(prompt("Too high, guess again."), 10);
            }else
                playerGuess = parseInt(prompt("Too low, guess again"), 10);

        }while(playersGuess != computerNumber);
        restart = prompt("would you like to play again type yes or no");
    }while(restart ===  "yes");
};