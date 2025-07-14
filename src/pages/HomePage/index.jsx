import Style from './style.module.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Logo from '../../assets/logo.png';

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <div className={Style.container}>
                <h1>Bem-vindo ao painel de controle</h1>
                <div className={Style.secDiv}>
                    <Link to={'/apiariospage'} className={Style.linkButton}>
                        <button><img src={Logo} alt="Logo" /><p>Apiários</p></button>
                    </Link>
                    <Link to={'/colmeiaspage'} className={Style.linkButton}>
                        <button><img src={Logo} alt="Logo" /><p>Colméias</p></button>
                    </Link>
                    <Link to={'/producaopage'} className={Style.linkButton}>
                        <button><img src={Logo} alt="Logo" /><p>Produção</p></button>
                    </Link>
                    <Link to={'/inspecaopage'} className={Style.linkButton}>
                        <button><img src={Logo} alt="Logo" /><p>Inspeção</p></button>
                    </Link>
                </div>
                <div className={Style.secFooter}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}