import Style from './style.module.css'
import SearchIcon from '../../assets/search.svg'

export default function SerachBar() {
    return (
        <div className={Style.pesquisar}>
            <button >
                <img src={SearchIcon} alt="Buscar" />
            </button>
            <input type="text" placeholder="Buscar" />
        </div>

    );
}

