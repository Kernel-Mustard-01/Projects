const game = function () {

    const playerSelection = prompt("Chose your weapon!!!  (Rock, Paper or Scissors)");
    const playerAnswer = playerSelection.trim().toLowerCase();
    const computerVal = Math.floor(Math.random() * 3);
    let computerAnswer = "";
    let playerVal = 0;


    if(computerVal == 1){
        computerAnswer = "rock";
    } else if(computerVal == 2){
        computerAnswer = "paper";
    } else {
        computerAnswer = "scissors";
    };

    // console.log(computerSelection);
    // console.log(computerAnswer);
    console.log("His highness Alan Turing has chosen " + computerAnswer + "!")
    

    if(playerAnswer === ""){
        console.log("You have chosen poorly!! Choose something you little bitch...")
        game();
    } else if(playerAnswer === "rock" || playerAnswer === "paper" || playerAnswer === "scissors"){
        console.log("You have chosen " + playerAnswer + "!")
    } else{
        console.log("What the fuck is a " + playerAnswer + "? Try again...");
        game();
    };

    switch(playerAnswer){
        case "rock":
            playerVal += 1;
            break;
        case "paper":
            playerVal += 2;
            break;
        case "scissors":
            playerVal += 3;
    };

    // console.log(playerVal);

    if(computerVal == playerVal){
        console.log("The Titans are matched!! Play again...");
        game();
    } else if(computerVal == 1 && playerVal == 2){
        console.log("Congratulations!! You Win!");
    } else if(computerVal == 1 && playerVal == 3){
        console.log("Ha! You're shit and Alan wins!");
    } else if(computerVal == 2 && playerVal == 1){
        console.log("Ha! You're shit and Alan wins!");
    } else if(computerVal == 2 && playerVal == 3){
        console.log("Congratulations!! You Win!");
    } else if(computerVal == 3 && playerVal == 1){
        console.log("Congratulations!! You Win!");
    } else if(computerVal == 3 && playerVal == 2){
        console.log("Ha! You're shit and Alan wins!");
    }else {
        console.log("There has been an error!! Play again...");
        game();
    };


};

game();