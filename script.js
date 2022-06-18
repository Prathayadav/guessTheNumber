'use strict';

let score=20;
let highestScore=0;
let secreatnum=Math.floor(Math.random()*20)+1;



document.querySelector('.check').addEventListener('click',

function(){

    if(score>0)
    {

    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess)
    {
        document.querySelector('.message').textContent="No number";
        
    }
    else if(guess>secreatnum)
    {
        document.querySelector('.message').textContent="too large";
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess<secreatnum)
    {
        document.querySelector('.message').textContent="too small";
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess===secreatnum)
    {
        document.querySelector('.message').textContent="Perfect!!!!!";
        document.querySelector('body').style.backgroundColor="green";
        document.querySelector('.number').style.width='40%';
        document.querySelector('.number').textContent=secreatnum;
        if(highestScore<score)
        {
        highestScore=score;
        document.querySelector('.highscore').textContent=highestScore;
        }
        

    }
}
else
{
    document.querySelector('.message').textContent="Start Again!!!!!!";
}



});


document.querySelector('.again').addEventListener('click',
function(){
 document.querySelector('body').style.backgroundColor='black';
 document.querySelector('.number').style.width='15rem';
 document.querySelector('.score').textContent='20';
 secreatnum=Math.floor(Math.random()*20)+1;
 document.querySelector('.number').textContent='?';
 document.querySelector('.message').textContent="Start guessing...";
 document.querySelector('.guess').value="";


});


