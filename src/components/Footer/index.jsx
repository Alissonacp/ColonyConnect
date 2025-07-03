import Style from './style.module.css';

export default function Footer() {
    return (
        <footer className={Style.footer}>
            <div className={Style.footerContent}>
                <h3 className={Style.sectionTitle}>Links Úteis</h3>
                <ul className={Style.linkList}>
                    <li><a href="/sobre" className={Style.footerLink}>Sobre Nós</a></li>
                    <li><a href="/faq" className={Style.footerLink}>FAQ</a></li>
                </ul>
            </div>
        </footer>
    );
}