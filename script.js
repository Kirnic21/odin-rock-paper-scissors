
//function to generate a random choice from the computer
function getComputerChoice()
{
    //RNG between 0,1,2
let number=Math.floor(Math.random()*3);
//array of choices
let choices = ["ROCK","PAPER","SCISSORS"];
let computerchoice=choices[number]
return computerchoice
}
//initialize player points to 0
let playerPoints=0;
//initialize computer points to 0
let computerPoints=0
//initiate i variable for loop
i=0


function singleround(playerSelection,computerSelection)
{
    //uppercase so it make case insensitive
    if(computerSelection===playerSelection)
    {
        tie="Its a tie!";
        //if its a tie, decrease the number in the loop to make it a invalid round
        i--;
        return tie;
    }
    else if(computerSelection==="ROCK" && playerSelection==="PAPER")
    {
        win="Great Job! Paper beats Rock!"
        playerPoints++;
        return win;
    }
    else if(computerSelection==="PAPER" && playerSelection==="SCISSORS")
    {
        win="Great Job! Scissor beats Paper!"
        playerPoints++;
        return win;
    }
    else if(computerSelection==="SCISSORS" && playerSelection==="ROCK")
    {
        win="Great Job! Rock beats Scissor!"
        playerPoints++;
        return win;
    }
    else if(computerSelection==="PAPER" && playerSelection==="ROCK")
    {
        loss="Too bad! Rock gets beaten by Paper"
        computerPoints++;
        return loss;
    }
    else if(computerSelection==="ROCK" && playerSelection==="SCISSORS")
    {
        loss="Too bad! Scissor gets beaten by Rock"
        computerPoints++;
        return loss;
    }
    else if(computerSelection==="SCISSORS" && playerSelection==="PAPER")
    {
        loss="Too bad! Rock gets beaten by Paper"
        computerPoints++;
        return loss;
    }

}
//Creating a function that works with buttons
function GamewithButtons()
{

    let computerSelection=getComputerChoice()
    let result=singleround("ROCK",computerSelection)
    player.textContent="Player Score: "+ playerPoints;
    computer.textContent="Computer Score: "+ computerPoints;
    message.textContent=result;
    //show alert message that you lost
    if (computerPoints>5 && computerPoints>playerPoints)
    {
        alert("Too bad, you lose!!!, press any selection button to play again")
        computerPoints=0
        playerPoints=0
    }
    //Show alert message that you won
    else if(playerPoints>5 && playerPoints>computerPoints)
    {
        alert("Great Job, you won!!!!, press any selection button to play again")
        computerPoints=0
        playerPoints=0
    }
}
console.log(playerPoints)
console.log(computerPoints)
//create Rock button
const rock = document.createElement('button')
rock.textContent = 'Rock'
rock.addEventListener('click',GamewithButtons)

document.body.appendChild(rock)
//create Paper button
const paper = document.createElement('button')
paper.textContent = 'Paper'
paper.addEventListener('click',GamewithButtons)

document.body.appendChild(paper)
//create Scissor button
const scissor = document.createElement('button')
scissor.textContent = 'Scissor'
scissor.addEventListener('click',GamewithButtons)
document.body.appendChild(scissor)
//create a div for scoreboard
const div=document.createElement('div');
div.classList.add('scoreboard');
div.style.color='blue';
div.style.border='5px solid black';
div.textContent="Scoreboard:";
//player.computer and message score
document.body.appendChild(div);
const player=document.createElement('p');
player.classList.add('playerScore');
player.textContent="Player Score: "+ playerPoints;
div.appendChild(player)
const computer=document.createElement('p');
computer.classList.add('computerScore');
computer.textContent="Computer Score: "+ computerPoints;
div.appendChild(computer)
const message=document.createElement('p')
message.classList.add('theResult');
div.appendChild(message)
