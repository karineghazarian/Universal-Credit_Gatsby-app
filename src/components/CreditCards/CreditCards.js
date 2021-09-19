import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getFile } from "../utils/getFile"

import * as styles from "./CreditCards.module.css"

const CreditCards = ({ cards, title, allFile }) => (
  <div className={styles.pattern}>
    {title && <h2 className="pageTitle">{title}</h2>}
    <div className={styles.cardsContainer}>
      {cards?.map(card => (
        <Link
          key={card.page.path}
          className={styles.card}
          to={card.page.path}
          title={card.text}
        >
          <div>
            <div style={{ overflow: "hidden", height: 100 }}>
              <GatsbyImage
                image={getImage(getFile(allFile, card.cover.localFile___NODE))}
                alt={card.cover.name}
                className={styles.creditCardImg}
              />
            </div>
            <div className={styles.creditCardTitle}>{card.text}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

CreditCards.defaultProps = {
  title: "",
}

CreditCards.propTypes = {
  cards: PropTypes.array.isRequired,
  title: PropTypes.string,
  allFile: PropTypes.array.isRequired,
}

CreditCards.displayName = "CreditCards"

export default React.memo(CreditCards)
