
const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),


    },
    filedCards:{
        player:document.getElementById("player-field-card"),
        computer:document.getElementById("computer-field-card"),

    },
    actions:{
        button: document.getElementById("next-duel"),
    },
} ;

const pathImages = ".src/assets/icons/";

const playerFieldSide = {
    player1: "player-field-card",
    computer: "compjuter-field-card"
}

const cardData = [
    {
        id:0,
        name:"Blue Eyes White Dragon",
        type:"Paper",
        img:`${pathImages}dragon.png`,
        winOf:[1],
        loseOf:[2],
    },

    {
        id:1,
        name:"Dark Magician",
        type:"Rock",
        img:`${pathImages}magician.png`,
        winOf:[2],
        loseOf:[0],
    },

    {
        id:0,
        name:"Exodia",
        type:"Scissors",
        img:`${pathImages}exodia.png`,
        winOf:[0],
        loseOf:[1],
    },

]



/*
const players = {
    player1 : "player-cards",
};
*/

async function drawCards(cadNumbers, filedSide){
    for(let i = 0; i<cardNumbers; i++){
        const randomIdCard = await getRandomIdCard();
        const cardImage = await createCardImage(randomIdCard,filedSide);

        document.getElementById(filedSide).appendChild(cardImage)
    }
}

function init(){
    drawCards(5,playerFieldSide.player1);
    drawCards(5,playerFieldSide.computer);

}

init();