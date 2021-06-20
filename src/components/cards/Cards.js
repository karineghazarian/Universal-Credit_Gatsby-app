import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Card = React.memo(({ card, count }) => {
  const width = `${90 / count}%`
  return (
    <div style={{ width }}>
      <Link to={`/${card.page.path}`} title={card.text}>
        <img src={card.cover.publicURL} alt={card.cover.name} />
        {card.text}
      </Link>
    </div>
  )
})

Card.propTypes = {
  card: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    page: PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    cover: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  count: PropTypes.number.isRequired,
}

const Cards = React.memo(({ cards }) => {
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

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default Cards
