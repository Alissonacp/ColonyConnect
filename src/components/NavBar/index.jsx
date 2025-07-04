import Style from './style.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import BurgIcon from '../../assets/Hamburger.png'

export default function navBar() {
    return (
        <nav className={Style.navBar}>
            <Link to={'/homepage'}>
                <img className={Style.navBarLogo} src={Logo} alt="Logo Colony Connect" />
            </Link>

            <Link to={'/menupage'}>
                <button className={Style.hambButton}>
                    <img className={Style.hambIcon} src={BurgIcon} alt="Menu Hamburguer" />
                </button>
            </Link>

        </nav>
    );
}