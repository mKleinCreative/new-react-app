import Deck from './deck'

const WIN = 'win'
const LOSE = 'lose'
const INPROG = 'in progress'
const dealerTurn = "Deadler is fplaery"


  // when dealer turn are > 16 stay
  // when this.status === dealerTurn then run dealer AI

export default class Game {
  constructor() {
    this.deck = new Deck()
    this.players = [
      { name: "dealer", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false, bestHandValue: 0},
      { name: "player", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false, bestHandValue: 0  }
    ]

    this.deal()

    this.status = ''
    this.message = ''
  }

  deal() {
    const { players, deck } = this

    _.times( 2, () => {
      players.forEach( player => {
        this.hit(player)
      })
    })
    this.updateStatus()
  }

  updateStatus() {
    if( this.status === '' ) {
      this.message = ''
    } else if( this.status === LOSE ) {
      this.message = 'Your family is ashamed of you!'
    } else if (this.status === WIN ){
      this.message = 'You are the best winner!'
    }
  }

  stay( player ) {
    const {hand, stay} = player

    if (player.stay === false) {player.stay = true}

    if (player.bestHandValue === 21) this.status = WIN

    if (this.players[0].bestHandValue > 21) this.status = WIN
    if (this.players[1].bestHandValue > 21) this.status = LOSE
    if (this.players[0].bestHandValue > player.bestHandValue && player.stay === true) this.status = LOSE
    if (this.players[0].bestHandValue === player.bestHandValue ) this.status = LOSE
    if (player.bestHandValue < 21 && hand.length === 5) this.status = WIN

    this.updateStatus()
    console.log('sup?', this);
  }

  hit( player ) {

    const { hand, stay } = player

    if (player.lowestHandValue < 21) hand.push( this.deck.deal() )

    player.lowestHandValue = lowestHandValue(hand)
    player.highestHandValue = highestHandValue(hand)
    player.bestHandValue = bestHandValue(hand)

    if (player.bestHandValue > 21) this.status = LOSE
    if (player.bestHandValue < 21 && stay !== true) this.status = INPROG
    if (player.bestHandValue === 21) this.status = WIN

    this.updateStatus()
  }


}


const lowestHandValue = hand =>
  hand.reduce( (total, card) => {
    if (card.name === 'ACE') return total + 1
    return total + card.value
  } , 0)

const highestHandValue = hand =>
  hand.reduce( (total, card) => total + card.value, 0 )

const bestHandValue = hand => {
  let handValue = highestHandValue(hand)
  let numAces = hand.filter(card => card.name === "ACE" ).length
  console.log('number of aces', numAces );
  while (handValue > 21 && numAces > 0) {
    handValue -= 10
    numAces -= 1
  }
  return handValue
}

// winning hands
// losing hands
