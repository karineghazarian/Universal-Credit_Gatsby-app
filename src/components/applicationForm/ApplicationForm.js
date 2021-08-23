import React, { useState } from "react";
import PropTypes from "prop-types"
import "./ApplicationForm.css";

function ApplicationForm({ form, title })
{
  const [opened, setOpened] = useState(false);
  const [inputValues, setInputValues] = useState(
    form.reduce((acc, formItem) =>
    {
      acc[formItem.item] = "";
      return acc;
    }, {})
  )

  function handleChange(e)
  {
    const { id, value } = e.currentTarget;
    setInputValues({
      ...inputValues,
      [id]: value
    });
  }

  function submitForm(ev)
  {
    ev.preventDefault();
    const formData = ev.target;
    const data = new FormData(formData);
    const xhr = new XMLHttpRequest();
    xhr.open(formData.method, formData.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () =>
    {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200)
      {
        setInputValues(form.reduce((acc, formItem) =>
        {
          acc[formItem.item] = "";
          return acc;
        }, {}));
        setOpened(false);
        // success
      } else
      {
        // error
      }
    };
    xhr.send(data);
  }

  return (
    <div className="pattern request">
      <button onClick={e => setOpened(true)} type="submit">Հայտի Դիմում</button>
      <div className={`backdrop ${opened ? "opened" : ""}`} onClick={e => setOpened(false)}>
        <div onClick={e => e.stopPropagation()} className="modal request-modal">
          <div className="modal-header">
            {title}
          </div>
          <div className="modal-content">
            <form
              action="https://formspree.io/xbjlrral"
              method="POST"
              onSubmit={submitForm}
            >
              <div className="input-container">
                {
                  form.map((inputItem) => (
                    <div key={inputItem.item}>
                      <input placeholder={inputItem.placeholder} value={inputValues[inputItem.item]}
                        onChange={handleChange} id={inputItem.item} name={inputItem.placeholder} />
                    </div>
                  ))}
              </div>
              <hr />
              <button type="submit">Դիմել</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

ApplicationForm.defaultProps = {
  title: ""
}

ApplicationForm.propTypes = {
  form: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default ApplicationForm;

ApplicationForm.displayName = 'ApplicationForm';