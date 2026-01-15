function RadioInput({ name, handleChange, label, id, value }) {
  return (
    <div className="mortgage-form__input-group mortgage-form__input-group--type">
      <input
        type="radio"
        id={id}
        name="type"
        value={value}
        checked={name === value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <label className="mortgage-form__radio-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
