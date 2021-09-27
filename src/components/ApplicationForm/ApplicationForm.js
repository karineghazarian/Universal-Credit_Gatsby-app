import React, { useState } from "react"
import PropTypes from "prop-types"

import "./ApplicationForm.css"

const ApplicationForm = ({ form, title }) => {
  const [opened, setOpened] = useState(false)
  const [inputValues, setInputValues] = useState(
    form.reduce((acc, formItem) => {
      acc[formItem.item] = ""
      return acc
    }, {})
  )

  function handleChange(e) {
    const { id, value } = e.currentTarget
    setInputValues({
      ...inputValues,
      [id]: value,
    })
  }

  function submitForm(e) {
    e.preventDefault()
    const formData = e.target
    const data = new FormData(formData)
    const xhr = new XMLHttpRequest()
    xhr.open(formData.method, formData.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setInputValues(
          form.reduce((acc, formItem) => {
            acc[formItem.item] = ""
            return acc
          }, {})
        )
        setOpened(false)
        // success
      } else {
        // error
      }
    }
    xhr.send(data)
  }

  return (
    <div className="pattern request">
      <button onClick={() => setOpened(true)} type="submit" className="appFormButton">
        Հայտի Դիմում
      </button>
      <div
        className={`backdrop ${opened ? "opened" : ""}`}
        onClick={() => setOpened(false)}
      >
        <div onClick={e => e.stopPropagation()} className="modal request-modal">
          <div className="modal-header">{title}</div>
          <div className="modal-content">
            <form
              action="https://formspree.io/xbjlrral"
              method="POST"
              onSubmit={submitForm}
            >
              <div className="input-container">
                {form.map(inputItem => (
                  <div key={inputItem.item}>
                    <input
                      placeholder={inputItem.placeholder}
                      value={inputValues[inputItem.item]}
                      onChange={handleChange}
                      id={inputItem.item}
                      name={inputItem.placeholder}
                      className="appFormInput"
                    />
                  </div>
                ))}
              </div>
              <hr className="appFormHr"/>
              <button type="submit" className="appFormSubmit">
                Դիմել
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

ApplicationForm.defaultProps = {
  title: "",
}

ApplicationForm.propTypes = {
  form: PropTypes.array.isRequired,
  title: PropTypes.string,
}

ApplicationForm.displayName = "ApplicationForm"

export default React.memo(ApplicationForm)
