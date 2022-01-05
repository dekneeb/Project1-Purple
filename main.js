console.log('JS Loaded')

const playerClick = document.getElementById('playerDeck')
const computerClick = document.getElementById('computerDeck')

const playChoice = document.getElementById('playerChoice')
const compChoice = document.getElementById('computerChoice')
const gameWinner = document.getElementById('msgContent')

let winner = ''
let roundWinner = ''

class Card {
    constructor(suit, rank){
        this.suit = suit 
        this.rank = rank
    }
}
const cardNumber = {
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
        console.log(suit[i], number[r])
        const newCard = new Card(suit[i], number[r])
        console.log(newCard)
        deck.push(newCard)
    }

}

console.log(deck)
function shuffle(){
    for(let i = deck.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck [j];
        deck [j] = temp;
    }
}

shuffle(deck)


const deckMidpoint = Math.ceil(deck.length / 2)
// console.log(deckMidpoint)

const playerDeck = deck.slice(0, deckMidpoint)
const compDeck = deck.slice(deckMidpoint, deck.length)

console.log(playerDeck)
console.log(compDeck)

playerClick.addEventListener('click', click)
computerClick.addEventListener('click', click)

function click(){ 
playChoice.innerText = playerChoice
compChoice.innerText = computerChoice
// console.log(compChoice.innerText)
// console.log(playChoice.innerText)
getHTML()
getWinner()
updateWinner()
pop()
console.log(playerDeck)
console.log(compDeck)
}

let playerChoice = playerDeck[0]
let computerChoice = compDeck[0]


{/* <div class='cardTwo' id ='playerChoice'>5 ♣</div> */}

function getHTML(){
    const cardInfo = document.getElementById('playerChoice')
    const suit = playerChoice.suit + playerChoice.rank
    cardInfo.innerText = suit
    const compInfo = document.getElementById('computerChoice')
    const suitComp = computerChoice.suit + computerChoice.rank
    compInfo.innerText = suitComp

}

function getWinner(){
    if(playerChoice.rank > computerChoice.rank){
        console.log('player wins!')
        winner = "Player 1 wins round"

    }else if(playerChoice.rank < computerChoice.rank){
        console.log('computer wins!')
        winner = "Computer wins round"
    }else{
        console.log('draw')
    }


}

function pop(){
    if(roundWinner === "Player"){
        playerDeck.push(computerChoice)
        compDeck.pop()
    }else if(roundWinner === "Computer"){
        compDeck.push(playerChoice)
        playerDeck.pop()
    }
    
}

function updateWinner(){
    gameWinner.innerText = winner
}

