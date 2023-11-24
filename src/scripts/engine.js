
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
    playerFieldSide: {
        player1: "player-cards",
        player1BOX: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBOX: document.querySelector("#computer-cards"),
    },
    fieldCards:{
        player:document.getElementById("player-field-card"),
        computer:document.getElementById("computer-field-card"),

    },
    actions:{
        button: document.getElementById("next-duel"),
    },
} ;

const pathImages = "./src/assets/icons/";


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
        img:`${pathImages}Dark Magician.png`,
        winOf:[2],
        loseOf:[0],
    },

    {
        id:2,
        name:"Exodia The Forbbiden One",
        type:"Scissors",
        img:`${pathImages}Exodia.png`,
        winOf:[0],
        loseOf:[1],
    },

]



/*
const players = {
    player1 : "player-cards",
};
*/


async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.avatar.style.height = "228px";
    state.cardSprites.avatar.style.width = "172px"; 
    state.cardSprites.name.innerHTML = cardData[index].name;
    state.cardSprites.type.innerText = `Attribute:  ${cardData[index].type}`;
}

async function resetDuel(){
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    init();
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

async function checkDuelResults(playerCardId,computerCardId){
    let duelResults = "Empate";
    let playerCard = cardData[playerCardId];
    
    if(playerCard.winOf.includes(computerCardId)){
        duelResults = "Ganhou";
        state.score.playerScore++;
    }

    if(playerCard.loseOf.includes(computerCardId)){
        duelResults = "Perdeu";
        state.score.computerScore++;
    }

    return duelResults;
}

async function removeAllCardsImages(){
    let cards = state.playerFieldSide.computerBOX;

    let imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img)=>img.remove());

    cards = state.playerFieldSide.player1BOX;

    imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img)=>img.remove());

}

async function drawButton(text){
    state.actions.button.innerText = text;
    state.actions.button.style.display = "block";
}

async function setCardsField(cardId){
    await removeAllCardsImages();
    
    let  computerCardId = await getRandomIdCard();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src= cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId,computerCardId);

    await updateScore();
    await drawButton(duelResults);
}

async function getRandomIdCard(){
    const randomIdex = Math.floor(Math.random()*cardData.length);
    return cardData[randomIdex].id;
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if(fieldSide === state.playerFieldSide.player1){
        cardImage.addEventListener("click", ()=> {
            setCardsField(cardImage.getAttribute("data-id"));
        });

        cardImage.addEventListener("mouseover", ()=>{
            drawSelectCard(IdCard);
        });
    }

    

    return cardImage;

}

async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i<cardNumbers; i++){
        const randomIdCard = await getRandomIdCard();
        const cardImage = await createCardImage(randomIdCard,fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init(){
    drawCards(5,state.playerFieldSide.player1);
    drawCards(5,state.playerFieldSide.computer);

}

init();