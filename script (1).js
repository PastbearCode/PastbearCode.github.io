const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => getResult('rock'));
document.getElementById('paper').addEventListener('click', () => getResult('paper'));
document.getElementById('scissors').addEventListener('click', () => getResult('scissors'));

function getResult(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    document.getElementById('result').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}
