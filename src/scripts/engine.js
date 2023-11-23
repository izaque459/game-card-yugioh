
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

const pathImages = "./src/assets/icons/";

const playerFieldSide = {
    player1: "player-cards",
    computer: "computer-cards",
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

    if(fieldSide === playerFieldSide.player1){
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
    drawCards(5,playerFieldSide.player1);
    drawCards(5,playerFieldSide.computer);

}

init();