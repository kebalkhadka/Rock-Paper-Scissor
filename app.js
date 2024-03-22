let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genCompChoice =() =>{
  //rock ,paper,scissor
  const options = ["rock","paper","scissor"];
  //Math.random();//generates random no
  //string cant be generated random but number can be generated 
 const randIdx=Math.floor(Math.random()*3);
 return options[randIdx];

}
const drawGame =()=>{
    msg.innerText= "Game was draw play again";
    msg.style.backgroundColor="#080a2d";
}
const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
       compScore++;
       compscorepara.innerText=compScore;
        msg.innerText = `You lost Computer ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    const computerChoice = genCompChoice();
    console.log("User choice =", userChoice);
    console.log("Computer choice =", computerChoice);

if(userChoice=== computerChoice){
    drawGame();

}
else{
    let userWin = true;
    if(userChoice==="rock"){
        //scissor,paper
         userWin = computerChoice==="paper"?false:true
    }
    else if(userChoice=="paper"){
        //rock,scissor
        userWin = computerChoice=== "scissors" ? false:true;
    }
    else{
        //rock,paper
        userWin = computerChoice==="rock" ?false:true;
    }
    showWinner(userWin,userChoice,computerChoice);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
})