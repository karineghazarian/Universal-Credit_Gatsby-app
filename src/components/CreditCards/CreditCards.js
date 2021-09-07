import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./CreditCards.module.css"

const CreditCards = ({ cards, title }) =>
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
              <div style={{ overflow: 'hidden' }}>
                <GatsbyImage image={image} alt="hle vor" className={styles.creditCardImg} />
              </div>

              <div className={styles.creditCardTitle}>{card.text}</div>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
)

CreditCards.defaultProps = {
  title: ""
}

CreditCards.propTypes = {
  cards: PropTypes.array.isRequired,
  title: PropTypes.string
}

CreditCards.displayName = 'CreditCards'

export default React.memo(CreditCards)