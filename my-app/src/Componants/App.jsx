import "../CSS/App.css";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Result from "./Result";
import { useState } from "react";
import calcIcon from "/icon-calculator.svg";

function App() {
  const [formInputs, setFormInputs] = useState({
    amount: "",
    rate: "",
    term: "",
    type: "",
  });

  const [showResult, setShowResult] = useState(false);

  function handleTextInputChange(prop, value) {
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setFormInputs({ ...formInputs, [prop]: value });
    }
  }

  function handleRadioInputChange(value) {
    setFormInputs({ ...formInputs, type: value });
  }

  let isDisabled =
    formInputs.amount == "" ||
    formInputs.rate == "" ||
    formInputs.term == "" ||
    formInputs.type == ""
      ? "disabled"
      : "";

  return (
    <div className="app">
      <div className="mortgage-form">
        <header className="mortgage-form__header">
          <h1 className="mortgage-form__title">Mortgage Calculator</h1>

          <button
            className="mortgage-form__button mortgage-form__button--clear"
            onClick={() => {
              setFormInputs({ amount: "", rate: "", term: "", type: "" });
              setShowResult(false);
            }}
          >
            Clear All
          </button>
        </header>

        <form className="mortgage-form__form">
          <TextInput
            value={formInputs.amount}
            prop="amount"
            handleChagne={handleTextInputChange}
            label="Mortgage Amount"
            id="amount"
            icon="&#8364;"
          />
          <div>
            <TextInput
              value={formInputs.term}
              prop="term"
              handleChagne={handleTextInputChange}
              label="Mortgage Term"
              id="term"
              icon="years"
            />

            <TextInput
              value={formInputs.rate}
              prop="rate"
              handleChagne={handleTextInputChange}
              label="Mortgage Rate"
              id="rate"
              icon="%"
            />
          </div>

          <div className="mortgage-form__wrapper ">
            <label className="mortgage-form__label">Mortgage Type</label>
            <RadioInput
              value="repayment"
              name={formInputs.type}
              label="Repayment"
              handleChange={handleRadioInputChange}
              id="repayment"
            />
            <RadioInput
              value="interest"
              name={formInputs.type}
              label="Interest Only"
              handleChange={handleRadioInputChange}
              id="interest"
            />
          </div>
          {/* form button */}
          <button
            className={`mortgage-form__button mortgage-form__button--calc ${isDisabled} ${showResult}`}
            onClick={(e) => {
              e.preventDefault();
              setShowResult(true);
            }}
          >
            <img src={calcIcon} alt="calculator icon" />
            Calculate Repayments
          </button>
        </form>
      </div>

      <Result
        classname={showResult ? "show-result" : ""}
        mortgageInfo={showResult ? formInputs : ""}
      />
    </div>
  );
}

export default App;
