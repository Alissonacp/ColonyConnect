import Style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import box from "../../assets/box.png";
import apiario from "../../assets/boxes.svg";
import user from "../../assets/user.png";
import home from "../../assets/home.png";
import interrogation from "../../assets/interrogation.png";
import signout from "../../assets/sign-out.png";
import x from "../../assets/x.svg";
import apiarios from "../../assets/apiario.svg";

export default function MenuPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <footer className={Style.container}>
      <div className={Style.buttonClose}>
        <button className={Style.button} onClick={handleBack}>
          <img src={x} alt="x" />
        </button>
      </div>
      <div>
        <ul className={Style.list}>
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/homepage"}>
              <img src={home} alt={home} className={Style.icon} />
              Home
            </Link>
          </li>
          <br />
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/apiariospage"}>
              <img src={apiario} alt={apiario} className={Style.icon} />
              Apiários
            </Link>
          </li>
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/colmeiaspage"}>
              <img src={box} alt={box} className={Style.icon} />
              Colméias
            </Link>
          </li>
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/producaopage"}>
              <img src={home} alt={home} className={Style.icon} />
              Produção
            </Link>
          </li>
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/inspecaopage"}>
              <img src={home} alt={home} className={Style.icon} />
              Inspeção
            </Link>
          </li>
          {/* <li className={Style.itemLink}><Link className={Style.link} to={"/lembretespage"}>Lembretes</Link></li> */}
          <br />
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/userpage"}>
              <img src={user} alt={user} className={Style.icon} />
              Perfil
            </Link>
          </li>
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/ajudapage"}>
              <img src={interrogation} alt={interrogation} className={Style.icon} />
              Ajuda
            </Link>
          </li>
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/sobrepage"}>
              <img src={home} alt={home} className={Style.icon} />
              Sobre Nós
            </Link>
          </li>
          <br />
          <li className={Style.itemLink}>
            <Link className={Style.link} to={"/"}>
              <img src={signout} alt={home} className={Style.icon} />
              Sair da conta
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
