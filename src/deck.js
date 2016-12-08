import _ from 'lodash'

import SUITS from './suits'
import RANKS from './ranks'

export default class Deck {
  constructor() {
    this.reset()
  }

  shuffle() {
    this.cards = _.shuffle( this.cards )
  }

  deal() {
    return this.cards.pop()
  }

  reset() {
    this.cards = SUITS.map( suit =>
      RANKS.map( rank => Object.assign( {}, suit, rank ))
    ).reduce( (memo, array) => memo.concat( array ) )

    this.shuffle()
  }
}
