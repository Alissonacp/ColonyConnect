import Style from './style.module.css';
import SetaEsquerda from '../../assets/seta_esquerda.svg';
import SetaDireita from '../../assets/seta_direita.svg';

export default function Pagination() {
    return (
        <div className={Style.pagination}>
            <a href="#"><img src={SetaEsquerda} alt="voltar" className={Style.seta_esquerda}/></a>
            <a href="#" className={`${Style.link} ${Style.active}`}>1</a>
            <a href="#" className={Style.link}>2</a>
            <a href="#" className={Style.link}>3</a>
            <p>...</p>
            <a href="#" className={Style.link}>10</a>
            <a href="#"><img src={SetaDireita} alt="voltar" className={Style.seta_direita}/></a>
        </div>
    );
}
