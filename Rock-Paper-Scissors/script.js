let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice -> modular
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice)

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //paper, rock
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});