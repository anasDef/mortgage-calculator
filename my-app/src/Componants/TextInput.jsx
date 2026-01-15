import "../CSS/App.css";

function TextInput({ label, prop, icon, value, handleChagne, id }) {
  return (
    <div className="mortgage-form__wrapper">
      <label className="mortgage-form__label" htmlFor={id}>
        {label}
      </label>
      <div className="mortgage-form__input-group">
        <span className="mortgage-form__input-icon">{icon}</span>
        <input
          value={value}
          type="text"
          id={id}
          onChange={(e) => {
            handleChagne(prop, e.target.value);
          }}
          className="mortgage-form__input"
        />
      </div>
    </div>
  );
}

export default TextInput;
