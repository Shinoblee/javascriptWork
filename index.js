let buttonPress = function(pick){
    userPick = pick;
    document.getElementById('user-pick').innerHTML = userPick.toUpperCase();
    console.log('user picked ' + pick);
    compPick = computerPick();
    document.getElementById('comp-pick').innerHTML = compPick.toUpperCase();
    console.log('computer picked ' + compPick);
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
    
}

let start = function(){
    console.log('Let the fun begin');
    resetScores();
    document.getElementById('start-button').innerHTML = "Press to Restart";
  <!--  document.getElementByClassName('play-section')[0].style.visibility = 'inline-block'; -->
}
  
let resetScores = function(){
    let scores = document.getElementsByClassName('scores')
    console.log(scores)
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
    console.log(winner);
    determineScore(winner);
}

let win_message = function(winner){
 <!-- document.getElementById('user-buttons').style.visibility = 'hidden'; -->
    document.getElementById('win-message').innerHTML = "The winner of the game is: " + winner.toUpperCase();   
}