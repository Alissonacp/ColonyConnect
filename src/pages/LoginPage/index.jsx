import Style from './style.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import LoginButton from '../../components/CadButton';

export default function LoginPage() {

  const loginButtonName = 'Entrar';

  return (
    <div className={Style.container}>
      <img className={Style.logo} src={Logo} alt="Logo Colony Connect" />
      <h1>Fazer login</h1>
      <form>
        <p>E-mail</p>
        <input placeholder='seuemail@email.com' type="email" name='email' />
        <p>Senha</p>
        <input placeholder='••••••••' type="password" name='senha' />
      </form>
      <div className={Style.button}>
        <Link to={'/homepage'}>
          <LoginButton nome={loginButtonName} loginButtonClass={Style.Button} />
        </Link>
        <p>Não tem uma conta?<Link to={'/caduserpage'}> ir para cadastro</Link> </p>
      </div>
    </div>
  );
}
