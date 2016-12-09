import Deck from './deck'

export default class Game {
  constructor() {
    this.deck = new Deck()
    this.players = [
      { name: "dealer", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false },
      { name: "player", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false  }
    ]

    this.deal()
    this.gameEnd = [
      { win: "WINNER!", lose: "You should try harder."}
    ]
  }

  deal() {
    const { players, deck } = this

    _.times( 2, () => {
      players.forEach( player => {
        this.hit(player)
      })
    })
  }

  hit(player) {
    const hand = player.hand
    const stay = player.stay
    let gameStatus = ""

    player.lowestHandValue = lowestHandValue(hand)
    player.highestHandValue = highestHandValue(hand)

    if (player.lowestHandValue < 21) hand.push( this.deck.deal() )
    if (player.lowestHandValue > 21) gameStatus = "lose"
    if (player.lowestHandValue < 21 && stay !== true) gameStatus = "win"
console.log(gameStatus)

  }

  computerWinner(players) {
    if (players[0].lowestHandValue > 21) return players[1];
    else if (players[1].lowestHandValue > 21) return players[0];
    else if (players[0].lowestHandValue > players[1].lowestHandValue && players[1].stay === true) return players[0];
  }

  // stay(player) {
  //   const stay = player.stay
  // }
}


const lowestHandValue = (hand) =>
  hand.reduce((total, card) => total + card.value, 0)

const highestHandValue = (hand) =>
  hand.reduce((total, card) => total + card.value, 0)


// winning hands
// losing hands
