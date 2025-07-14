import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import CadButton from '../../components/CadButton';
import Style from './style.module.css';

import { db } from '../../firebase/firebaseConfig';
import { ref, push, set } from 'firebase/database';

export default function CadUserPage() {

  const navigate = useNavigate();
  const cadButtonName = 'cadastre-se';

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  const lidarComCadastro = async (event) => {
    event.preventDefault();

    if (!nomeCompleto.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    if (senha.length < 4) {
      alert('A senha deve ter pelo menos 4 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas estão diferentes. Por favor, verifique.');
      return;
    }

    if (!termosAceitos) {
      alert('Você deve ler e concordar com os Termos de Uso e a Política de Privacidade para prosseguir.');
      return;
    }

    try {
      const dadosUsuario = {
        nome: nomeCompleto.trim(),
        email: email.trim(),
        dataCadastro: Date.now()
      };

      const usuariosRef = ref(db, 'usuarios');
      const novoUsuarioRef = push(usuariosRef);
      await set(novoUsuarioRef, dadosUsuario);

      console.log('Dados do usuário salvos com sucesso no Firebase:', dadosUsuario);
      alert('Cadastro realizado com sucesso!');

      setNomeCompleto('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setTermosAceitos(false);

      navigate('/homepage');

    } catch (error) {
      console.error('Erro ao tentar salvar os dados no Firebase:', error);
      alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <div className={Style.container}>
      <img className={Style.logo} src={Logo} alt="Logo Colony Connect" />
      <h1>Cadastre-se</h1>
      <form onSubmit={lidarComCadastro}>
        <p>Nome completo</p>
        <input
          placeholder='Nome completo'
          type="text"
          name='nome completo'
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
        />
        <p>E-mail</p>
        <input
          placeholder='seuemail@email.com'
          type="email"
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Senha</p>
        <input
          placeholder='••••'
          type="password"
          name='senha'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <p>Confirmar senha</p>
        <input
          placeholder='••••'
          type="password"
          name='confirmar senha'
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <div className={Style.userTerm}>
          <p>
            <input
              className={Style.checkbox}
              type="checkbox"
              checked={termosAceitos}
              onChange={(e) => setTermosAceitos(e.target.checked)}
            />
            li e concordo com os
            <a target='_blank' href='https://fonts.google.com/selection/embed' rel="noopener noreferrer"> Termos de Uso</a> e a
            <a target='_blank' href='https://fonts.google.com/selection/embed' rel="noopener noreferrer"> Política de Privacidade</a>
          </p>
        </div>

        <div className={Style.button}>
          <CadButton nome={cadButtonName} cadButtonClass={Style.cadButton} type="submit" />
          <p>Já tem uma conta? <Link to={"/"}>ir para login</Link> </p>
        </div>
      </form>
    </div>
  );
}