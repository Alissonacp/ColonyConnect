import Style from './style.module.css'
import { Link } from 'react-router-dom';

export default function MenuPage() {

    return (
        <footer className={Style.container}>
            <div className={Style.buttonClose}>
                <Link className={Style.link} to={'/homepage'}>x</Link>
            </div>

            <div>
                <ul className={Style.list}>
                    <li className={Style.itemLink}><Link className={Style.link} to={"/homepage"}    >Home</Link></li>
                    <li className={Style.itemLink}><Link className={Style.link} to={"/apiariospage"}>Apiários</Link></li>
                    <li className={Style.itemLink}><Link className={Style.link} to={"/colmeiaspage"}>Colméias</Link></li>
                    <li className={Style.itemLink}><Link className={Style.link} to={"/producaopage"}>Produção</Link></li>
                    <li className={Style.itemLink}><Link className={Style.link} to={"/inspecaopage"}>Inspeção</Link></li>
                    <li className={Style.itemLink}><Link className={Style.link} to={"/perfilpage"}  >Perfil</Link></li>
                    <li className={Style.itemLink}><Link className={Style.link} to={"/faq"}         >Ajuda</Link></li>
                    <br />
                    <li className={Style.itemLink}><Link className={Style.link} to={"/"}            >Sair da conta</Link></li>
                </ul>
            </div>
        </footer>
    );
}

