
//function to generate a random choice from the computer
function getComputerChoice(rock,paper,scissor)
{
    //RNG between 0,1,2
let number=Math.floor(Math.random()*3);
//variable that will be rock, paper ,scissor
let choice;
//if statements that will return the choice
if (number===0)
{
    choice="ROCK"
    return choice;
}
if (number===1)
{
    choice="PAPER"
    return choice;
}
if (number===2)
{
    choice="SCISSORS"
    return choice;
}
}
//initialize player points to 0
playerPoints=0;
//initialize computer points to 0
computerPoints=0
//initiate i variable for loop
i=0
function singleround(playerSelection,computerSelection)
{
    //uppercase so it make case insensitive
    let playerSelectionUpper=playerSelection.toUpperCase();
    if(computerSelection===playerSelectionUpper)
    {
        tie="Its a tie!";
        //if its a tie, decrease the number in the loop to make it a invalid round
        i--;
        return tie;
    }
    else if(computerSelection==="ROCK" && playerSelectionUpper==="PAPER")
    {
        win="Great Job! Paper beats Rock!"
        playerPoints++;
        return win;
    }
    else if(computerSelection==="PAPER" && playerSelectionUpper==="SCISSORS")
    {
        win="Great Job! Scissor beats Paper!"
        playerPoints++;
        return win;
    }
    else if(computerSelection==="SCISSORS" && playerSelectionUpper==="ROCK")
    {
        win="Great Job! Rock beats Scissor!"
        playerPoints++;
        return win;
    }
    else if(computerSelection==="PAPER" && playerSelectionUpper==="ROCK")
    {
        loss="Too bad! Rock gets beaten by Paper"
        computerPoints++;
        return loss;
    }
    else if(computerSelection==="ROCK" && playerSelectionUpper==="SCISSORS")
    {
        loss="Too bad! Scissor gets beaten by Rock"
        computerPoints++;
        return loss;
    }
    else if(computerSelection==="SCISSORS" && playerSelectionUpper==="PAPER")
    {
        loss="Too bad! Rock gets beaten by Paper"
        computerPoints++;
        return loss;
    }
    else
    {
        invalid="Insert a valid option!!!!!"
        //making it a invalid round
        i--
        return invalid;
    }
}
//game function
for(i=0;i<5;i++)
{
let playerSelection=prompt("Rock,Paper,or Scissors")
let computerSelection=getComputerChoice();
let game=singleround(playerSelection,computerSelection);
alert(game)
console.log(i)
}
//show alert message that you lost
if (computerPoints>playerPoints)
{
    alert("Too bad, you lose!!!")
}
//Show alert message that you won
else if(playerPoints>computerPoints)
{
    alert("Great Job, you won!!!!")
}
//Show alert message that is a tie
else
{
    alert("Too bad, its a Tie!!")
}
