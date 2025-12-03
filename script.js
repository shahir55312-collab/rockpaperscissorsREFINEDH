const Score = {
    wins: 0,
    losses: 0,
    ties: 0
};
function updateElement() {
    document.querySelector('.js-score').innerHTML =
    `wins: ${Score.wins}, losses: ${Score.losses}, ties: ${Score.ties}
`;}

const score =JSON.parse(localStorage.getItem('Score'));
let isAutoPlay = false;
let intervalId;
function autoplay(){
    if(!isAutoPlay){
        intervalId =  setInterval(function(){
const playerChoice = computerchoice();
playGame(playerChoice);
    },1000)
isAutoPlay = true;
    }
     else{

clearInterval(intervalId);
isAutoPlay = false;
    }
   
}
document.querySelector('.js-autoplay').addEventListener('click',()=>{

autoplay();

})
document.body.addEventListener('keydown',(event) =>{
if(event.key === 'r'){
    playGame('rock');
}
else if(event.key === 'p'){
    playGame('paper');
}
else if(event.key === 's'){
    playGame('scissors')
}


})
function playGame(playerChoice){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if(playerChoice === computerMove){
        result = 'It is a TIE!';
    } else if(
        (playerChoice === 'rock' && computerMove === 'scissors') ||
        (playerChoice === 'paper' && computerMove === 'rock') ||
        (playerChoice === 'scissors' && computerMove === 'paper')
    ){
        result = 'You won!';
    } else {
        result = 'You Lose';
    }
   
    if(result === 'You won!'){
Score.wins += 1;
    }
   else if(result === 'You Lose'){
Score.losses += 1;}
else if(result === 'It is a TIE!'){
Score.ties +=1;
}
updateElement();
localStorage.setItem('Score', JSON.stringify(Score));
document.querySelector('.result').innerHTML = result;
document.querySelector('.move').innerHTML = `You Picked ${playerChoice} -Computer Picked ${computerMove}`


}

document.getElementById('reset').addEventListener('click', function(){
    Score.wins = 0;
    Score.losses = 0;
    Score.ties = 0;
    localStorage.removeItem('Score');
    updateElement();
    alert('Scores have been reset!');
    document.querySelector('.result').innerHTML = '';
document.querySelector('.move').innerHTML = '';
});

const container = document.querySelector('.container');
if (container) {
    container.addEventListener('click', function (e) {
        const id = e.target && e.target.id;
        if (!id) return; 
        if (id === 'rock' || id === 'paper' || id === 'scissors') {
            playGame(id);
      }
    });
} else {
    const rockImage = document.getElementById('rock');
    const paperImage = document.getElementById('paper');
    const scissorsImage = document.getElementById('scissors');
    if (rockImage) rockImage.addEventListener('click', () => playGame('rock'));
    if (paperImage) paperImage.addEventListener('click', () => playGame('paper'));
    if (scissorsImage) scissorsImage.addEventListener('click', () => playGame('scissors'));
}

function computerchoice(){
const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    return computerMove;
}
