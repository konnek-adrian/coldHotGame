'use strict';

// dziesiętne i zakres 1-20
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function()
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent = 'No number!👀';
    }
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = 'You win!🎉';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess > secretNumber)
    {
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!🔥';
            score--;
            document.querySelector('.score').textContent = score;
        }   
        else {
            document.querySelector('.message').textContent = 'You lost! 🤦‍♂️';
            document.querySelector('.score').textContent = 0;
        }     
    }
    else if(guess < secretNumber)
    {
        if(score >1)
        {
            document.querySelector('.message').textContent = 'Too low!🥶';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost! 🤦‍♂️';
            document.querySelector('.score').textContent = 0;
        }     
    }
}); 

document.querySelector('.again').addEventListener('click', function()
{
    score = 20;
    document.querySelector('.message').textContent = 'Start guesing. . .';
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent ='?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});