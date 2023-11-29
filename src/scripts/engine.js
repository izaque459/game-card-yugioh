
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
        name:"Battle Steer",
        type:"Paper",
        img:`${pathImages}Battle Steer.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 1800,

    },

    {
        id:1,
        name:"Dark Magician",
        type:"Rock",
        img:`${pathImages}Dark Magician.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 2500,
    },

    {
        id:2,
        name:"Exodia The Forbbiden One",
        type:"Scissors",
        img:`${pathImages}Exodia.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 1000,
    },

    {
        id:3,
        name:"Beaver Warrior",
        type:"Paper",
        img:`${pathImages}Beaver Warrior.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 1200,
    },

    {
        id:4,
        name:"Black Luster Soldier",
        type:"Rock",
        img:`${pathImages}Black Luster Soldier.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 3000,
    },

    {
        id:5,
        name:"Black Magician of Chaos",
        type:"Scissors",
        img:`${pathImages}Black Magician of Chaos.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 2800,
    },

    {
        id:6,
        name:"Black Skull Dragon",
        type:"Paper",
        img:`${pathImages}Black Skull Dragon.png`,
         advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 3200,
    },

    {
        id:7,
        name:"Catapult Turtle",
        type:"Rock",
        img:`${pathImages}Catapult Turtle.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 1000,
    },

    {
        id:8,
        name:"Celtic Guardian",
        type:"Scissors",
        img:`${pathImages}Celtic Guardian.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 1400,
    },

    {
        id:9,
        name:"Curse of Dragon",
        type:"Paper",
        img:`${pathImages}Curse of Dragon.png`,
         advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 2000,
    },

    {
        id:10,
        name:"Dark Sage",
        type:"Rock",
        img:`${pathImages}Dark Sage.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 2800,
    },

    {
        id:11,
        name:"Dragon Master Knight",
        type:"Scissors",
        img:`${pathImages}Dragon Master Knight.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 5000,
    },

    {
        id:12,
        name:"Feral Imp",
        type:"Paper",
        img:`${pathImages}Feral Imp.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 1300,
    },

    {
        id:13,
        name:"Gaia The Dragon Champion",
        type:"Rock",
        img:`${pathImages}Gaia The Dragon Champion.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 2600,
    },

    {
        id:14,
        name:"Gaia The Fierce Knight",
        type:"Scissors",
        img:`${pathImages}Gaia The Fierce Knight.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 2300,
    },

    {
        id:15,
        name:"Giant Soldier of Stone",
        type:"Paper",
        img:`${pathImages}Giant Soldier of Stone.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 1300,
    },

    {
        id:16,
        name:"Griffore",
        type:"Rock",
        img:`${pathImages}Griffore.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 1200,
    },

    {
        id:17,
        name:"Horn Imp",
        type:"Scissors",
        img:`${pathImages}Horn Imp.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 1300,
    },
    {
        id:18,
        name:"Koumori Dragon",
        type:"Paper",
        img:`${pathImages}Koumori Dragon.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 1500,
    },

    {
        id:19,
        name:"Kuriboh",
        type:"Rock",
        img:`${pathImages}Kuriboh.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 300,
    },

    {
        id:20,
        name:"Mammoth Graveyard",
        type:"Scissors",
        img:`${pathImages}Mammoth Graveyard.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 1200,
    },

    {
        id:21,
        name:"Mystical Elf",
        type:"Paper",
        img:`${pathImages}Mystical Elf.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 800,
    },

    {
        id:22,
        name:"Rude Kaiser",
        type:"Rock",
        img:`${pathImages}Rude Kaiser.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 1800,
    },

    {
        id:23,
        name:"Sangan",
        type:"Scissors",
        img:`${pathImages}Sangan.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 1000,
    },

    {
        id:24,
        name:"Silver Fang",
        type:"Paper",
        img:`${pathImages}Silver Fang.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 1200,
    },

    {
        id:25,
        name:"Summoned Skull",
        type:"Rock",
        img:`${pathImages}Summoned Skull.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 2500,
    },

    {
        id:26,
        name:"Time Wizard",
        type:"Scissors",
        img:`${pathImages}Time Wizard.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 500,
    },
    {
        id:27,
        name:"Torike",
        type:"Paper",
        img:`${pathImages}Torike.png`,
        advantageOver:[1,4,7,10,13,16,19,22,25,28], 
        disadvantageFor:[2,5,8,11,14,17,23,26,29],
        attack: 1200,
    },

    {
        id:28,
        name:"Winged Dragon, Guardian",
        type:"Rock",
        img:`${pathImages}Winged Dragon, Guardian of the Fortress.png`,
        advantageOver:[2,5,8,11,14,17,20,23,26,29],
        disadvantageFor:[0,3,6,9,12,15,18,21,24,27],
        attack: 1400,
    },

    {
        id:29,
        name:"Zombie Warrior",
        type:"Scissors",
        img:`${pathImages}Zombie Warrior.png`,
        advantageOver:[0,3,6,9,12,15,18,21,24,27],
        disadvantageFor:[1,4,7,10,13,16,19,22,25,28],
        attack: 1200,
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

async function drawCardsInFields(cardId,computerCardId){
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src= cardData[computerCardId].img;
}

async function showHiddenCardFieldsImages(value){
    if(value===true){

        state.fieldCards.player.style.display = "block";
        state.fieldCards.computer.style.display = "block";

    }

    if(value===false){
        state.fieldCards.player.style.display = "none";
        state.fieldCards.computer.style.display = "none";
    }
}

async function resetDuel(){
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    init();
}

async function playAudio(status){
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    audio.play();
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

async function checkDuelResults(playerCardId,computerCardId){
    let duelResults = "Empate";
    let playerCard = cardData[playerCardId];
    let computerCard = cardData[computerCardId];
    
    /* if(playerCard.advantageOver.includes(computerCardId)){
        duelResults = "Ganhou";
        await playAudio("win");
        state.score.playerScore++;
    }

    if(playerCard.disadvantageFor.includes(computerCardId)){
        duelResults = "Perdeu";
        await playAudio("lose");
        state.score.computerScore++;
    }*/

    if(playerCard.attack>computerCard.attack){
        duelResults = "Ganhou";
        await playAudio("win");
        state.score.playerScore++;
    }

    if(playerCard.attack<computerCard.attack){
        duelResults = "Perdeu";
        await playAudio("lose");
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

async function hiddenCardDetails(){
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";

}

async function setCardsField(cardId){
    await removeAllCardsImages();
    
    let  computerCardId = await getRandomIdCard();

    await showHiddenCardFieldsImages(true);


    await hiddenCardDetails();

    await drawCardsInFields(cardId,computerCardId);

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

    showHiddenCardFieldsImages(false);
    

    drawCards(5,state.playerFieldSide.player1);
    drawCards(5,state.playerFieldSide.computer);

    const bgm = document.getElementById("bgm");
    bgm.play();

}

init();