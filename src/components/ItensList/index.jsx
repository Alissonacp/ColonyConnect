import Style from "./style.module.css";
import box from "../../assets/box.png";
import { Link } from "react-router-dom";

export default function ItensList({ id, nome, data, path }) {
  return (
    <Link to={`/${path}/${id}`} className={Style.link}>
      <div className={Style.card}>
        <div className={Style.esquerda}>
          <img src={box} alt="Ícone" className={Style.caixa} />
        </div>
        <div className={Style.centro}>
          <h4>{nome}</h4>
          <span>{data}</span>
        </div>
      </div>
    </Link>
  );
}