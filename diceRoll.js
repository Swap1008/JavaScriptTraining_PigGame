/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let dice1=document.querySelector('#dice1');
let dice2=document.querySelector('#dice2');
let imgDice1;
let imgDice2;
let dice1Val=0;
let dice2Val=0;
let scorePlayer1=0;
let scorePlayer2=0;
let player1={
    status:'active'
};
let player2={
    status:'inactive',
};

function showDice() {
    
        dice1.style.display="block";
        dice2.style.display="block";
}

function hideDice() {
        dice1.style.display="none";
        dice2.style.display="none";
}

function rollDice(imgDice1,imgDice2) {
    
    dice1.src="dice-"+imgDice1+".png";    
    dice2.src="dice-"+imgDice2+".png";    
}

function holdValue(value1,value2) {
    if (player1.status==='active') {
        if (value1===1 && value2===1) {
            document.querySelector('#player1Val').innerHTML=0;
            document.querySelector('#player2Val').innerHTML=0;    
        } else {
            scorePlayer1 =scorePlayer1 + value1 + value2;
            document.querySelector('#player1Val').innerHTML=scorePlayer1;
            // document.querySelector('#player2Val').innerHTML=value2;
        }

    }else if (player2.status==='active') {
        if (value1===1 && value2===1) {
            document.querySelector('#player2Val').innerHTML=0;    
        } else {
            scorePlayer2 =scorePlayer2 + value1 + value2;
            document.querySelector('#player2Val').innerHTML=scorePlayer2;
            // document.querySelector('#player2Val').innerHTML=value2;
        }
    }

}

function switchPlayer() {
    if (player1.status==='active') {
        player1.status='inactive';
        player2.status='active';
        
    }else if (player2.status==='active') {
        player2.status='inactive';
        player1.status='active';
    }
}



document.querySelector('#startBtn').addEventListener('click',function(){
        showDice(); 
        
});
document.querySelector('#rollBtn').addEventListener('click',function(){
        imgDice1=Math.floor(Math.random()*6 +1);
        imgDice2=Math.floor(Math.random()*6 +1);
        rollDice(imgDice1,imgDice2);
});

document.querySelector('#holdBtn').addEventListener('click',()=>{
    holdValue(imgDice1,imgDice2);
    switchPlayer();
});