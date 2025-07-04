import Style from './style.module.css'
import { Link } from 'react-router-dom'
import Trash from '../../assets/trash.png'
import Logo from '../../assets/logo.png'
import CadButton from '../../components/CadButton';

export default function CadUserPage() {

  const cadButtonName = 'cadastre-se';

  const users = [{
    Uid: '1',
    Nome: 'João da Silva',
    Email: 'joaodasilva@email.com'
  }, {
    Uid: '2',
    Nome: 'Maria José',
    Email: 'mariajose@email.com'
  }
  ]

  return (

    <div className={Style.container}>
      <img className={Style.logo} src={Logo} alt="Logo Colony Connect" />

      <h1>Cadastre-se</h1>

      <form>
        <p>Nome completo</p>
        <input placeholder='Nome completo' type="text" name='nome completo' />

        <p>E-mail</p>
        <input placeholder='seuemail@email.com' type="email" name='email' />

        <p>Senha</p>
        <input placeholder='••••••••' type="password" name='senha' />

        <p>Confirmar senha</p>
        <input placeholder='••••••••' type="password" name='confirmar senha' />
      </form>


      <div className={Style.userTerm}>
        <p><input className={Style.checkbox} type="checkbox" /> li e concordo com os
          <a target='_blank' href='https://fonts.google.com/selection/embed'> Termos de Uso</a> e a
          <a target='_blank' href='https://fonts.google.com/selection/embed'> Política de Privacidade</a></p>
      </div>

      <div className={Style.button}>
        <Link to={'/homepage'}>
          <CadButton nome={cadButtonName} cadButtonClass={Style.cadButton} />
        </Link>
        

        <p>Já tem uma conta? <Link to={"/"}>ir para login</Link> </p>
      </div>


      {users.map((user) => (
        <div key={user.Uid} className={Style.uCard}>
          <p>
            Uid: <span>{user.Uid}  </span> <br />
            Nome:    <span>{user.Nome} </span> <br />
            E-mail:  <span>{user.Email}</span>
          </p>
          <button>
            <img src={Trash} alt="ícone de lixeira" />
          </button>
        </div>
      ))}

    </div>
  );
}
