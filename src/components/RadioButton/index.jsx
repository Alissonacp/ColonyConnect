import Style from "./style.module.css";
function RadioButtom({ label, options, selected, onChange }) {
  return (
    <div className={Style.radio}>
      {label && <label className={Style.label}>{label}</label>}
      {options.map((option) => (
        <label key={option.value}>
          <input className={Style.radioOptions}
            type="radio"
            name={label}
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
export default RadioButtom;
