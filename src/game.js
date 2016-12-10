import Deck from './deck'

const WIN = 'win'
const LOSE = 'lose'
const FAIL = 'fail'
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
    } else if (this.status === FAIL) {
      this.message = '.... Seriously tho? liek why do you live, you are stealing my air and the air of the people around you at this point, you should really consider your life choices and how they have broughten you to this point in time.'
    } else if( this.status === LOSE ) {
      this.message = 'Your family is ashamed of you!'
    } else if (this.status === WIN ) {
      this.message = 'You are the best winner!'
    }
  }

  stay( player ) {
    const {hand, stay} = player
    const dealer = this.players[ 0 ]

    player.stay = true

    // This is where we manager the dealer hits
    if (dealer.bestHandValue >= player.bestHandValue && player.stay === true) {this.status = FAIL} else{
      while( bestHandValue( dealer.hand ) < 17 ) {
        this.hit( dealer )
      }
    }

    if (dealer.bestHandValue < player.bestHandValue && player.stay === true) this.status = WIN
    if (dealer.bestHandValue > 21 ) this.status = WIN
    if (dealer.bestHandValue === player.bestHandValue ) this.status = LOSE
    if (player.bestHandValue < 21 && hand.length === 5) this.status = WIN

    this.updateStatus()

  }

  hit( player ) {

    const { hand, stay } = player
    const dealer = this.players[ 0 ]

    if (player.lowestHandValue < 21) hand.push( this.deck.deal() )

    player.lowestHandValue = lowestHandValue(hand)
    player.highestHandValue = highestHandValue(hand)
    player.bestHandValue = bestHandValue(hand)

    if (player.bestHandValue > 21) this.status = LOSE
    if (dealer.bestHandValue === player.bestHandValue ) this.status = LOSE
    // if (player.bestHandValue < 21 && stay !== true) this.status = INPROG

    this.updateStatus()
  }

  // //Dealer logic
  //   dealio() {
  //     if (this.players[0].bestHandValue < 17 && player.stay === true) players[0].hand.push(this.deck.deal())
  //   }

}

// export class Dealer {
//  DEALIO = this.game.players[0]
//   if (bestHandValue)
// }


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
  while (handValue > 21 && numAces > 0) {
    handValue -= 10
    numAces -= 1
  }
  return handValue
}

// winning hands
// losing hands
