import Style from './style.module.css';

export default function Footer() {
    return (
        <footer className={Style.footer}>
            <div className={Style.footerContent}>
                <h3 className={Style.sectionTitle}>Links Úteis</h3>
                <ul className={Style.linkList}>
                    <li><a href="/sobrepage" className={Style.footerLink}>Sobre Nós</a></li>
                    <li><a href="/ajudapage" className={Style.footerLink}>Ajuda</a></li>
                </ul>
            </div>
        </footer>
    );
}