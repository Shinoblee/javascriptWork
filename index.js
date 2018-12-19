let buttonPress = function(pick){
    userPick = pick;
    document.getElementById('user-pick').innerHTML = userPick.toUpperCase();
    compPick = computerPick();
    document.getElementById('comp-pick').innerHTML = compPick.toUpperCase();
    handWinner(userPick, compPick);
}

let computerPick = function(){
    let choices = ['rock', 'paper', 'scissors'];
    index = (Math.floor(Math.random() * Math.floor(3)));
    return choices[index];
}

let determineScore = function(winner){
    document.getElementById('winner').innerHTML = winner.toUpperCase();
    let userScElem = document.getElementById('user-score');
    let userScore = parseInt(userScElem.innerHTML);
    let compScElem = document.getElementById('comp-score');
    let compScore = parseInt(compScElem.innerHTML);
    if (winner === 'you'){
        userScore += 1;
        userScElem.innerHTML = userScore;
    }else if (winner === 'computer'){
        compScore += 1;
        compScElem.innerHTML = compScore;
    }
    game_winner(userScore, compScore);
}

let start = function(){
    resetScores();
    document.getElementById('start-button').innerHTML = "Press to Restart";
    document.getElementById('play-section').style.visibility = '';
    document.getElementById('user-buttons').style.visibility = '';
    document.getElementById('win-message').innerHTML = '';
}
  
let resetScores = function(){
    let scores = document.getElementsByClassName('scores')
    for (i =0; i < scores.length; i++){
        scores[i].innerHTML = 0;
    }
}

let handWinner = function(userP, compP){
    let winner = "";
    if (userP === compP){
        winner = 'draw';
    }else if (userP === 'paper' && compP === 'rock'){
        winner = 'you';
    }else if (userP === 'rock' && compP === 'scissors'){
        winner = 'you';
    }else if (userP === 'scissors' && compP === 'paper'){
        winner ='you';
    }else{
        winner ='computer';
    }
    determineScore(winner);
}

let win_message = function(winner){
    document.getElementById('user-buttons').style.visibility = 'hidden';
    document.getElementById('win-message').innerHTML = "The winner of the game is: " + winner.toUpperCase();   
}

let game_winner = function(userScore, compScore){
    if (userScore === 5){
        win_message("You");
    }else if (compScore === 5){
        win_message("Computer");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('play-section').style.visibility = 'hidden';
})