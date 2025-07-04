import Style from './style.module.css'
import Icon from '../../assets/search.svg'

export default function ItensList(props) {

    return (
        <div className={Style.item}>
            <img src={Icon} alt="" />
            <h4>{props.nome}</h4>
            <h4>{props.data}</h4>
            <img src={Icon} alt="" />
        </div>
    );
}

