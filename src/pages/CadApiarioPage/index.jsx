import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CadButton from '../../components/CadButton';
import Style from './style.module.css';

import { db } from '../../firebase/firebaseConfig';
import { ref, push, set } from 'firebase/database';


export default function CadApiarioPage() {

  const cadButtonName = 'Salvar Apiário';

  const [nomeApiario, setNomeApiario] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [quantidadeColmeias, setQuantidadeColmeias] = useState('');
  const [dataFundacao, setDataFundacao] = useState('');

  const navigate = useNavigate();

  const lidarComCadastroApiario = async (event) => {
    event.preventDefault();

    if (!nomeApiario.trim() || !localizacao.trim() || !dataFundacao.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios: Nome, Localização e Data de Fundação.');
      return;
    }

    if (quantidadeColmeias.trim() !== '' && (isNaN(quantidadeColmeias) || parseInt(quantidadeColmeias) < 0)) {
        alert('A quantidade de colmeias deve ser um número válido e não negativo.');
        return;
    }

    // adicionar mais validações, como formato de data, etc.
    try {
      const dadosApiario = {
        nome: nomeApiario.trim(),
        localizacao: localizacao.trim(),
        quantidadeColmeias: quantidadeColmeias.trim() !== '' ? parseInt(quantidadeColmeias) : 0,
        dataFundacao: dataFundacao,
        dataCadastro: Date.now() // Timestamp da criação do registro 
      };

      const apiariosRef = ref(db, 'apiarios');
      const novoApiarioRef = push(apiariosRef);
      await set(novoApiarioRef, dadosApiario);

      console.log('Apiário salvo com sucesso no Firebase:', dadosApiario);
      alert('Apiário cadastrado com sucesso!');

      setNomeApiario('');
      setLocalizacao('');
      setQuantidadeColmeias('');
      setDataFundacao('');

      navigate('/apiariospage');

    } catch (error) {
      console.error('Erro ao cadastrar apiário:', error);
      alert('Ocorreu um erro ao cadastrar o apiário. Por favor, tente novamente.');
    }
  };

  return (
    <div className={Style.container}>
      <h1>Cadastro de Apiário</h1>
      <form className= {Style.forms}onSubmit={lidarComCadastroApiario}>
        <p>Nome do Apiário</p>
        <input
          placeholder=''
          type="text"
          name='nomeApiario'
          value={nomeApiario}
          onChange={(e) => setNomeApiario(e.target.value)}
        />
        <p>Localização *</p>
        <input
          placeholder=''
          type="text"
          name='localizacao'
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />
        <p>Quantidade de Colmeias (opcional)</p>
        <input
          placeholder=''
          type="number"
          name='quantidadeColmeias'
          value={quantidadeColmeias}
          onChange={(e) => setQuantidadeColmeias(e.target.value)}
        />
        <p>Data de Fundação</p>
        <input
          type="date"
          name='dataFundacao'
          value={dataFundacao}
          onChange={(e) => setDataFundacao(e.target.value)}
        />

        <div className={Style.button}>
          <CadButton nome={cadButtonName} cadButtonClass={Style.cadButton} type="submit" />
        </div>
      </form>
      <p className={Style.link}>
        <Link to={'/apiariospage'}>Voltar para Lista de Apiários</Link>
      </p>
    </div>
  );
}