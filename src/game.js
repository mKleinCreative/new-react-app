import Deck from './deck'

export default class Game {
  constructor() {
    this.deck = new Deck()
    this.players = [
      { name: "dealer", hand: [], score: 0 },
      { name: "player", hand: [], score: 0 }
    ]

    this.deal()
  }

  deal() {
    const { players, deck } = this

    players.forEach( player => {
      _.times( 2, () => {
        player.hand.push( deck.deal() )
      })
    })
  }

  hit() {
    this.players[ 1 ].hand.push( this.deck.deal() )
    console.log( this.players[ 1 ])
  }
}
