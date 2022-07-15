


let bot;
let player;
let result;


function game(btn)
{
    player = btn;
    computerTurn();
    
    document.getElementById("computerText").textContent = `Bot Selection : ${bot}`;
    document.getElementById("playerText").textContent = `Player Selection : ${btn}`;
    document.getElementById("resultText").textContent = checkWinner();
}   
   
  



function computerTurn(){
    
    let randomN = Math.floor(Math.random()*3)+1;
    
    switch (randomN) {
        case 1: bot = "Stone"; break;
        case 2: bot = "Paper"; break;
        case 3: bot = "Scissor"; break;
    }
}

function checkWinner(){
    if(bot==player){
        return "Result : Draw!!!";
    }
    else if(bot=="Stone"){
        return (player=="Paper" ? "Result : You Won!!!" : "Result : You Lose!!!")
    }
    else if(bot=="Paper"){
        return (player=="Scissor" ? "Result : You Won!!!" : "Result : You Lose!!!")
    }
    else if(bot=="Scissor"){
        return (player=="Stone" ? "Result : You Won!!!" : "Result : You Lose!!!")
    }
    
}
