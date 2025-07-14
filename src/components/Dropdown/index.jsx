import Style from './style.module.css';

function Dropdown({ label, items, selected, onChange }) {

    return (
        <div className={Style.container}>
            {label && <label className={Style.label} >{label}</label>}
            <select className={Style.select}
                value={selected}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Selecione {label}</option>
                {items.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default Dropdown;




