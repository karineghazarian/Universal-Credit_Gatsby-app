import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Card from "./Card"

const CreditCards = React.memo(({ cards }) => {
  console.log(cards)
  return (
    <div>
      ՎԱՐԿԵՐ
      <hr />
      {cards?.map(card => (
        <Card key={card.id} card={card} count={cards.length} />
      ))}
    </div>
  )
})

CreditCards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default CreditCards

/*
Card {
  id
  text
  cover {
    publicURL
    name
  }
  page {
    path
    title
  }
}
*/
