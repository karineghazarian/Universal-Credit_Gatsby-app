import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Card from "./Card"

const CreditCards = React.memo(({ cards , title}) => (
  // console.log(cards)
  <div>
    {title}
    <hr />
    {cards?.map(card => (
      <Card key={card.id} card={card} count={cards.length} />
    ))}
  </div>
))

CreditCards.defaultProps = {
  title: ""
}

CreditCards.propTypes = {
  cards: PropTypes.array.isRequired,
  title: PropTypes.string
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
