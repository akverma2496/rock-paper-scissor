
const score = document.querySelector('#score');
const message = document.querySelector('#message');
const button = document.querySelectorAll('button');
const winnerScores = [0, 0];


//for (var i = 0; i < button.length ; i++) {
//	button[i].addEventListener('click' , playgame);
//}

button[0].addEventListener('click', playgame);
button[1].addEventListener('click', playgame);
button[2].addEventListener('click', playgame);


function playgame(e) {

    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    console.log(playerSelection);
    console.log(computerSelection);

    if (computerSelection < .34) {
        computerSelection = "Rock";
    }
    else if (computerSelection <= .67) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissor";
    }


    let result = checkWinner(playerSelection, computerSelection);

    if (result === 'Player') {
        result += ' wins!';
        //update score
        winnerScores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw') {
        result += '. It\'s a tie!'
    }


    score.innerHTML = 'Player : [ ' + winnerScores[0] + ' ] Computer : [ ' + winnerScores[1] + ' ]';

    if (result === 'Player wins!') {
        message.innerHTML = 'Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong>  <br><br><br>' + '<span style="color:green">' + result + '</span>';
    }
    else if (result === 'Computer wins!') {
        message.innerHTML = 'Player : <strong>' + playerSelection + '</strong> Computer : <strong>' + computerSelection + '</strong>  <br><br><br>' + '<span style="color:red">' + result + '</span>';
    }
    else {
        message.innerHTML = 'Player : <strong>' + playerSelection + '</strong> Computer : <strong>' + computerSelection + '</strong>  <br><br><br>' + '<span style="color:black">' + result + '</span>';
    }
}

function checkWinner(player, computer) {

    if (player === computer) {
        return 'Draw';
    }

    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper') {
        if (computer === 'Scissor') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissor') {
        if (computer === 'Rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}