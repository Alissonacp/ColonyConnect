import Style from './style.module.css'

export default function CadButton(props) {
    const cadButtonClass = props.cadButtonClass || Style.cadButton;

    return (
        <button className={cadButtonClass}> {props.nome}</button>
    );
}