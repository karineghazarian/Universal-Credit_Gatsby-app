// import React from "react"
// import PropTypes from "prop-types"

// const ApplicationForm = React.memo(({ form, title }) => (
//   //  console.log("ApplicationForm: ", form)
//   <div>
//     {title}
//     ApplicationForm
//   </div>
// ))

// ApplicationForm.defaultProps = {
//   title: ""
// }

// ApplicationForm.propTypes = {
//   form: PropTypes.array.isRequired,
//   title: PropTypes.string
// }

// export default ApplicationForm
import React, { useState } from "react";
import "./applicationForm.css";

function Request()
{
  const [opened, setOpened] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    dayOfBirth: "",
    passport: "",
    dateOfIssue: "",
    from: "",
    email: "",
    psn: "",
    phone: "",
    incomeType: "",
    income: "",
    creditAmount: "",
    creditPercentage: "",
    creditReason: "",
    creditPayDay: "",
    creditTerm: ""
  })

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
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () =>
    {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200)
      {
        setInputValues({
          firstName: "",
          lastName: "",
          fatherName: "",
          dayOfBirth: "",
          passport: "",
          dateOfIssue: "",
          from: "",
          email: "",
          psn: "",
          phone: "",
          incomeType: "",
          income: "",
          creditAmount: "",
          creditPercentage: "",
          creditReason: "",
          creditPayDay: "",
          creditTerm: ""
        });
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
            ԴԻՄՈՒՄ - ՀԱՅՏ
          </div>
          <div className="modal-content">
            <form
              action="https://formspree.io/xbjlrral"
              method="POST"
              onSubmit={submitForm}
            >
              <div className="input-container">
                <div>
                  <div>
                    <input placeholder="Անուն" name="Անուն" id="firstName" onChange={handleChange} value={inputValues.firstName} />
                  </div>
                  <div>
                    <input placeholder="Ազգանուն" name="Ազգանուն" id="lastName" onChange={handleChange} value={inputValues.lastName} />
                  </div>
                  <div>
                    <input placeholder="Հայրանուն" name="Հայրանուն" id="fatherName" onChange={handleChange} value={inputValues.fatherName} />
                  </div>
                  <div>
                    <input placeholder="Ծննդյան օր" name="Ծննդյան օր" id="dayOfBirth" onChange={handleChange} value={inputValues.dayOfBirth} />
                  </div>
                  <div>
                    <input placeholder="Անձնագիր(ID քարտ)" name="Անձնագիր(ID  քարտ)" id="passport" onChange={handleChange} value={inputValues.passport} />
                  </div>
                  <div>
                    <input placeholder="Տրման ամսաթիվ" name="Տրման ամսաթիվ" id="dateOfIssue" onChange={handleChange} value={inputValues.dateOfIssue} />
                  </div>
                  <div>
                    <input placeholder="Վարկի գումարը" name="Վարկի գումարը" id="creditAmount" onChange={handleChange} value={inputValues.creditAmount} type="number" />
                  </div>
                  <div>
                    <input placeholder="Վարկի տոկոսադրույք" name="Վարկի տոկոսադրույք" id="creditPercentage" onChange={handleChange} value={inputValues.creditPercentage} type="number" />
                  </div>
                  <div>
                    <input placeholder="Ամսական մարումների նախընտրելի օր" name="Ամսական մարումների նախընտրելի օր" id="creditPayDay" onChange={handleChange} value={inputValues.creditPayDay} type="number" />
                  </div>
                </div>
                <div>
                  <div>
                    <input placeholder="Ում կողմից" name="Ում կողմից" id="from" onChange={handleChange} value={inputValues.from} type="number" />
                  </div>
                  <div>
                    <input placeholder="Հծհ" name="Հծհ" id="psn" onChange={handleChange} value={inputValues.psn} />
                  </div>
                  <div>
                    <input placeholder="E-mail" name="E-mail" id="email" onChange={handleChange} value={inputValues.email} />
                  </div>
                  <div>
                    <input placeholder="Հեռախոսահամար" name="Հեռախոսահամար" id="phone" onChange={handleChange} value={inputValues.phone} />
                  </div>
                  <div>
                    <input placeholder="Եկամտի տեսակ" name="Եկամտի տեսակ" id="incomeType" onChange={handleChange} value={inputValues.incomeType} />
                  </div>
                  <div>
                    <input placeholder="Եկամտի չափ" name="Եկամտի չափ" id="income" onChange={handleChange} value={inputValues.income} type="number" />
                  </div>
                  <div>
                    <input placeholder="Վարկի ժամկետ" name="Վարկի ժամկետ" id="creditTerm" onChange={handleChange} value={inputValues.creditTerm} />
                  </div>
                  <div>
                    <input placeholder="Վարկի նպատակ" name="Վարկի նպատակ" id="creditReason" onChange={handleChange} value={inputValues.creditReason} />
                  </div>
                </div>
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

export default Request;