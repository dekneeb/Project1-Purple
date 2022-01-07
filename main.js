console.log('JS Loaded')

const playerClick = document.getElementById('playerDeck')
const computerClick = document.getElementById('computerDeck')
const start = document.getElementById('start')
const reset = document.getElementById('reset')
const playChoice = document.getElementById('playerChoice')
const compChoice = document.getElementById('computerChoice')
const color = document.getElementsByClassName('cardTwo')
const gameWinner = document.getElementById('msgContent')
const finalWinner = document.getElementById('gameWinMsg')
const battlePlay = document.getElementById('playerBattle')
const battleComp = document.getElementById('compBattle')
let playerCard = null
let compCard = null
let playerBattleCard = null
let compBattleCard = null

let winner = ''
let roundWinner = ''
let battleWinner = ''

class Card {
    constructor(suit, number){
        this.suit = suit 
        this.number = number
    }
}
const cardLookUpTable = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10": 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14
   
}


const deck = []
const suit = ['♣', '♦', '♥', '♠']

const number = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

for(let i=0; i<suit.length; i++){
    for (let r=0; r<number.length; r++){
        const newCard = new Card(suit[i], number[r])
        deck.push(newCard)
    }

}


function shuffle(){
    for(let i = deck.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck [j];
        deck [j] = temp;
    }
}



shuffle(deck)

playerClick.addEventListener('click', clickEvt)
start.addEventListener('click', startGame)



const deckMidpoint = Math.ceil(deck.length / 2)
// console.log(deckMidpoint)

const playerDeck = deck.slice(0, deckMidpoint)
const compDeck = deck.slice(deckMidpoint, deck.length)


console.log(playerDeck)
console.log(compDeck)

function getHTML(){
    playerCard = playerDeck.shift()
    console.log(playerCard)
    playChoice.innerHTML = playerCard.number + playerCard.suit
    playChoice.style.border = '1px solid black';
    compCard = compDeck.shift()
    console.log(compCard)
    compChoice.innerHTML = compCard.number + compCard.suit
    compChoice.style.border = '1px solid black';

}

function suitColor(){
if(compCard.suit ==='♠' || compCard.suit === '♣'){
    compChoice.style.color = 'black';
 }else if(compCard.suit === '♦'|| compCard.suit ==='♥'){
     compChoice.style.color = 'red'; 
 }
 
 
 if(playerCard.suit === '♣'|| playerCard.suit === '♠'){
     playChoice.style.color = 'black'; 
 }else if(playerCard.suit ===  '♥'|| playerCard.suit ==='♦'){
     playChoice.style.color = 'red';
 }
}

function showWinScreen(){
    if(playerDeck.length === 52){
        finalWinner.innerHTML = 'Player 1 wins the game!!!!!'
    }else if(compDeck.length === 52){
        finalWinner.innerHTML = 'Computer has won the game.'
    }
  
}

function startGame(){
    computerClick.style.backgroundColor = 'thistle';
    computerClick.style.border = '1px solid black';
    computerClick.innerText = '26';
    playerClick.innerText = '26';
}


function getWinner(){
    if(cardLookUpTable[compCard.number] < cardLookUpTable[playerCard.number]){
        console.log('player wins!')
        roundWinner = "Player 1 wins round!"

    }else if(cardLookUpTable[compCard.number] > cardLookUpTable[playerCard.number]){
        console.log('computer wins!')
        roundWinner = "Computer wins round!"
    }else if(cardLookUpTable[compCard.number] === cardLookUpTable[playerCard.number]){
        console.log('draw')
        roundWinner = "Draw"
    }
}



function getBattleHTML(){
    playerBattleCard = playerDeck[3]
    console.log(playerBattleCard)
    battlePlay.innerHTML = playerBattleCard.number + playerBattleCard.suit
    battlePlay.style.border = '1px solid black';
    compBattleCard = compDeck[3]
    console.log(compCard)
    battleComp.innerHTML = compBattleCard.number + compBattleCard.suit
    battleComp.style.border = '1px solid black';
}

function getBattleWinner(){
    if(cardLookUpTable[compBattleCard.number] < cardLookUpTable[playerBattleCard.number]){
        console.log('player wins!')
        battleWinner = 'Player is victorious!'
    }else if(cardLookUpTable[compBattleCard.number] > cardLookUpTable[playerBattleCard.number]){
        console.log('computer wins!')
        battleWinner = "Computer has won the battle."
    }
    console.log(battleWinner)
}

function battleSuitColor(){
    if(compBattleCard.suit ==='♠' || compBattleCard.suit === '♣'){
        battleComp.style.color = 'black';
     }else if(compCard.suit === '♦'|| compCard.suit ==='♥'){
         battleComp.style.color = 'red'; 
     }
     
     if(playerCard.suit === '♣'|| playerCard.suit === '♠'){
         battlePlay.style.color = 'black'; 
     }else if(playerCard.suit ===  '♥'|| playerCard.suit ==='♦'){
         battlePlay.style.color = 'red';
     }
}


function updateBattleWinner(){

}
  

function moveBattleCards(){
    if(battleWinner === "Player is victorious"){
        const firstBattleCard = playerDeck[0, 1, 2, 3]
        const firstBattleCal = compDeck[0, 1, 2, 3]
        playerDeck.push(firstBattleCard)
        playerDeck.push(firstBattleCal)
        // console.log(firstCard)
           
            
    }else if(battleWinner === "Computer has won the battle."){
        const firstBattleCard = playerDeck[0, 1, 2, 3]
        const firstBattleCal = compChoice[0, 1, 2, 3]
        compDeck.push(firstBattleCal)
        compDeck.push(firstBattleCard)
}

}


function battle(){
 console.log('battle')
 getBattleHTML()
 battleSuitColor()
 getBattleWinner()
 updateBattleWinner()
 moveBattleCards()
}


function updateWinner(){
    gameWinner.innerText = roundWinner
}


function moveCards(){
   
    if(roundWinner === "Player 1 wins round!"){
        const firstCard = playerDeck[0]
        const firstCal = compDeck[0]
        playerDeck.push(firstCard)
        playerDeck.push(firstCal)
        // console.log(firstCard)
           
            
    }else if(roundWinner === "Computer wins round!"){
        const firstCard = playerDeck[0]
        const firstCal = compDeck[0]
        compDeck.push(firstCal)
        compDeck.push(firstCard)
        // console.log(firstCal)
            
            
    }else if(roundWinner === 'Draw'){
        // const firstCard = playChoice
        // const firstCal = compChoice
        // compDeck.push(firstCal)
        // playerDeck.push(firstCard)
        battle()
    }
        
}


function draw(){ 
    getHTML()
    suitColor()
    getWinner()
    updateWinner()
    moveCards()
    console.log(playerDeck)
    console.log(compDeck)
    
}


function nextMove(){
    const playNum = playerDeck.length
    const compNum = compDeck.length
    playerClick.innerText = playNum
    computerClick.innerText = compNum
    // console.log(playNum)
    compChoice.innerText = ''
    playChoice.innerText = ''
    gameWinner.innerText = ''
    console.log(playerDeck)
    console.log(compDeck)
    compChoice.style.border = 'none';
    playChoice.style.border = 'none';
    battleComp.style.border = 'none';
    battlePlay.style.border = 'none';
    battleComp.innerHTML = null;
    battlePlay.innerHTML = null;
}

function clickEvt(){
    if(gameWinner.innerText === ''){
        draw()
    }else {
        nextMove()
    }
    showWinScreen()
}
