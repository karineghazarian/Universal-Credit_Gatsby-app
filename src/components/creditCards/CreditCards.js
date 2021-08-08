import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./creditCards.module.css"

const CreditCards = React.memo(({ cards, title }) =>
(
  <div className={styles.pattern}>
    <h2>{title}</h2>
    <div className={styles.cardsContainer}>
      {cards?.map(card =>
      {
        const image = getImage(card.cover)
        return (
          <Link className={styles.card} to={card.page.path} title={card.text}>
            <div>
              <GatsbyImage image={image} alt="hle vor" className={styles.creditCardImg} />
              <div className={styles.creditCardTitle}>{card.text}</div>
            </div>
          </Link>
        )
      })}
    </div>
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