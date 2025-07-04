import Style from './style.module.css'
import Logo from '../../assets/logo.png'
import BurgIcon from '../../assets/Hamburger.png'

export default function navBar() {
    return (
        <nav className={Style.navBar}>
            <img className={Style.navBarLogo} src={Logo} alt="Logo Colony Connect" />

            <button className={Style.hambButton}>
                <img className={Style.hambIcon} src={BurgIcon} alt="Menu Hamburguer"  />
            </button>
        </nav>
    );
}