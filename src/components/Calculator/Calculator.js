import React, { useState } from "react"
import PropTypes from "prop-types"
import Rates from "./Rates"

import * as styles from "./Calculator.module.css"

const Calculator = ({ calculator, title }) =>
{
  const [amount, setAmount] = useState()
  const [percent, setPercent] = useState()
  const [months, setMonths] = useState()
  const [type, setType] = useState("1")
  const [warning, setWarning] = useState("")
  const [final, setFinal] = useState()

  function calculate(e)
  {
    /* eslint-disable */
    e.preventDefault()
    setFinal("")
    if (amount && percent && months && type)
    {
      setWarning("")
      let r = percent / (12 * 100)
      if (type === "1")
      {
        let final =
          (amount * (r * Math.pow(1 + r, months))) /
          (Math.pow(1 + r, months) - 1)
        setFinal(final.toFixed(2))
      } else
      {
        let final = Array(months)
          .fill("a")
          .map((item, i) =>
          {
            return (
              amount / months +
              (amount - i * +(amount / months).toFixed(2)) * r
            ).toFixed(2)
          })
        setFinal(final)
      }
    } else
    {
      setWarning("Բոլոր դաշտերը պարտադիր են")
    }
  }

  function renderResult()
  {
    let shouldBeRendered = null
    if (warning)
    {
      shouldBeRendered = (
        <p>
          <span className={styles.error}>{warning}</span>
        </p>
      )
    } else if (final)
    {
      shouldBeRendered = (
        <div className={styles.paymentSchedule}>
          {Array.isArray(final)
            ? final.map((item, i) => (
              <div key={i}>
                {i + 1}. {item}
              </div>
            ))
            : final}
        </div>
      )
    } else shouldBeRendered = null
    return shouldBeRendered
  }

  return (
    <div className={styles.calculator}>
      {title && <h2 className="pageTitle">{title}</h2>}
      <form onSubmit={calculate}>
        <div>
          <label className={styles.calculatorLabel}>Վարկի գումար:</label>
          <input
            value={amount || ""}
            type="number"
            onChange={e => setAmount(+e.target.value)}
            className={styles.calculatorInput}
          />
        </div>
        <div>
          <label className={styles.calculatorLabel}>Տարեկան %-դրույք:</label>
          <input
            value={percent || ""}
            type="number"
            onChange={e => setPercent(+e.target.value)}
            className={styles.calculatorInput}
          />
        </div>
        <div>
          <label className={styles.calculatorLabel}>Մարման ժամկետ:</label>
          <input
            value={months || ""}
            type="number"
            placeholder="ամիսներ"
            onChange={e => setMonths(+e.target.value)}
            className={styles.calculatorInput}
          />
        </div>
        <div>
          <label className={styles.calculatorLabel}>Մարման տեսակը:</label>
          <span className={styles.uiSelect}>
            <select value={type} onChange={e => setType(e.target.value)} className={styles.calculatorSelect}>
              <option value="1">Հավասարաչափ մարումներով</option>
              <option value="2">Մայր գումարի հավասարաչափ մարումներով</option>
            </select>
          </span>
        </div>
        <div>
          <button type="submit" className={styles.calculatorSubmit}>Հաշվել</button>
          {renderResult()}
        </div>
      </form>
      <Rates src={calculator} />
    </div>
  )
}

Calculator.defaultProps = {
  title: "",
}

Calculator.propTypes = {
  calculator: PropTypes.object.isRequired,
  title: PropTypes.string,
}

Calculator.displayName = "Calculator"

export default React.memo(Calculator)
