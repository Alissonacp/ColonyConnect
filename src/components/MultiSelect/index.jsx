
import Style from './style.module.css';
export default function MultiSelect({ label, options, selected, onChange }) {
    const toggleOption = (value) => {
    const isNenhuma = value === 'nenhuma';
    const isSelected = selected.includes(value);

    if (isNenhuma) {
      onChange(isSelected ? [] : ['nenhuma']);
      return;
    }

    const newSelected = selected.filter((item) => item !== 'nenhuma');

    onChange(
      isSelected
        ? newSelected.filter((item) => item !== value)
        : [...newSelected, value]
    );
  };


    return (
        <div className={Style.container}>
            {label && <label className={Style.label}>{label}</label>}
            <div className={Style.options}>
                {options.map((option) => (
                    <label key={option.value}>
                        <input className={Style.option}
                            type="checkbox"
                            value={option.value}
                            checked={selected.includes(option.value)}
                            onChange={() => toggleOption(option.value)}

                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
}