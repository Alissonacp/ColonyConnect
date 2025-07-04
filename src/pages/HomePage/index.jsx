import Style from './style.module.css'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer'
import Logo from '../../assets/logo.png';

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <div className={Style.container}>
                <h1>Bem-vindo ao painel de controle</h1>
            
                <div className={Style.sec}>
                    <button><img src={Logo} /><p>Apiários</p></button>
                    <button><img src={Logo} /><p>Colméias</p></button>

                </div>
                <div className={Style.sec}>
                    <button><img src={Logo} /><p>Produção</p></button>
                    <button><img src={Logo} /><p>Inspeção</p></button>
                </div>
                <div className={Style.secFooter}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}