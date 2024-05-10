let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
};
const draw = () => {
    msg.style.backgroundColor = "darkblue";
    msg.innerText =   " Game was draw !  play again...";
};
 const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you are win ! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you are loose !  ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor ="red";
    }
 }

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock" ){
            userWin = (compChoice === 'paper')? false : true;
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === 'scissor')? false : true;
        }
        else{
            userWin = (compChoice === 'rock')? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    };
};

choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",()  => {
    const userChoice = choice.querySelector("img").id;
    console.log(userChoice);
    playGame(userChoice); 
    });
});
