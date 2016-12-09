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
      { name: "dealer", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false },
      { name: "player", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false  }
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
  //   const stay = players[1].stay
  // if (players[1].stay === false)  { players.stay = true}
    const {hand, stay} = player
    if (player.stay === false) {player.stay = true}

    //console.log(this)
  }

  hit( player ) {
    const { hand, stay } = player
    // const hand = player.hand
    // const stay = player.stay

    if (player.lowestHandValue < 21) hand.push( this.deck.deal() )

    player.lowestHandValue = lowestHandValue(hand)
    player.highestHandValue = highestHandValue(hand)

    if (player.lowestHandValue > 21) this.status = LOSE
    if (player.lowestHandValue < 21 && stay !== true) this.status = INPROG

    this.updateStatus()
    // console.log(this)
  }

  newGame() {
    console.log('this sucks', this);
  }


  // computerWinner(players) {
  //   if (players[0].lowestHandValue > 21) return players[1];
  //   else if (players[1].lowestHandValue > 21) return players[0];
  //   else if (players[0].lowestHandValue > players[1].lowestHandValue && players[1].stay === true) return players[0];
  // }


}


const lowestHandValue = hand =>
  hand.reduce( (total, card) => total + card.value , 0)

const highestHandValue = hand =>
  hand.reduce( (total, card) => total + card.value, 0 )


// winning hands
// losing hands
