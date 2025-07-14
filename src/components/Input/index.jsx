import Style from "./style.module.css";
function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  multiline = false,
}) {
  return (
    <div className={Style.container}>
      {label && <label className={Style.label}>{label}</label>}
      {multiline ? (
        <textarea
          className={Style.textarea}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={Style.input}
          name={label}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
export default Input;
