import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import apiarioImg from "../../assets/apiario.png";
import Style from "./style.module.css";

import { db } from '../../firebase/firebaseConfig';
import { ref, onValue, update, remove } from 'firebase/database';

export default function ApiarioInfoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiario, setApiario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editNomeApiario, setEditNomeApiario] = useState('');
  const [editLocalizacao, setEditLocalizacao] = useState('');
  const [editQuantidadeColmeias, setEditQuantidadeColmeias] = useState('');
  const [editDataFundacao, setEditDataFundacao] = useState('');

  useEffect(() => {
    if (!id) {
      setError("ID do apiário não fornecido na URL.");
      setLoading(false);
      return;
    }

    const apiarioRef = ref(db, `apiarios/${id}`);

    const unsubscribe = onValue(apiarioRef, (snapshot) => {
      try {
        const data = snapshot.val();

        if (data) {
          setApiario({ id, ...data });
          setEditNomeApiario(data.nome || '');
          setEditLocalizacao(data.localizacao || '');
          setEditQuantidadeColmeias(data.quantidadeColmeias !== undefined ? data.quantidadeColmeias.toString() : '');
          setEditDataFundacao(data.dataFundacao || '');
          setError(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Erro ao processar dados do apiário:", error);
        setError("Ocorreu um erro ao carregar os detalhes do apiário.");
        setLoading(false);
      }
    }, (dbError) => {
      console.error("Erro no listener do Firebase Realtime Database para apiário:", dbError);
      setError("Não foi possível conectar ao banco de dados ou permissão negada.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  const handleCancel = () => {
    if (isEditing) {
      setIsEditing(false);
      setEditNomeApiario(apiario.nome || '');
      setEditLocalizacao(apiario.localizacao || '');
      setEditQuantidadeColmeias(apiario.quantidadeColmeias !== undefined ? apiario.quantidadeColmeias.toString() : '');
      setEditDataFundacao(apiario.dataFundacao || '');
    } else {
      navigate('/apiariospage');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async (event) => {
    event.preventDefault();

    if (!editNomeApiario.trim() || !editLocalizacao.trim() || !editDataFundacao.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios: Nome, Localização e Data de Fundação.');
      return;
    }
    if (editQuantidadeColmeias.trim() !== '' && (isNaN(editQuantidadeColmeias) || parseInt(editQuantidadeColmeias) < 0)) {
      alert('A quantidade de colmeias deve ser um número válido e não negativo.');
      return;
    }

    try {
      const apiarioRef = ref(db, `apiarios/${id}`);
      const dadosAtualizados = {
        nome: editNomeApiario.trim(),
        localizacao: editLocalizacao.trim(),
        quantidadeColmeias: editQuantidadeColmeias.trim() !== '' ? parseInt(editQuantidadeColmeias) : 0,
        dataFundacao: editDataFundacao,
        ultimaAtualizacao: Date.now()
      };

      await update(apiarioRef, dadosAtualizados);

      alert('Apiário atualizado com sucesso!');
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar apiário:', error);
      alert('Ocorreu um erro ao atualizar o apiário. Por favor, tente novamente.');
    }
  };

  const handleDelete = async () => {

    if (!window.confirm('Tem certeza que deseja deletar este apiário? Esta ação é irreversível.')) {
      return;
    }

    try {
      const apiarioRef = ref(db, `apiarios/${id}`);
      await remove(apiarioRef);

      alert('Apiário deletado com sucesso!');
      navigate('/apiariospage');
    } catch (error) {
      console.error('Erro ao deletar apiário:', error);
      alert('Ocorreu um erro ao deletar o apiário. Por favor, tente novamente.');
    }
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <div className={Style.container}>
          <h2>Detalhes do Apiário</h2>
          <div>Carregando detalhes do apiário...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <div className={Style.container}>
          <h2>Detalhes do Apiário</h2>
          <div style={{ color: 'red' }}>{error}</div>
          <button onClick={handleCancel}>Voltar para Lista</button>
        </div>
        <Footer />
      </>
    );
  }

  if (!apiario) {
    return (
      <>
        <NavBar />
        <div className={Style.container}>
          <h2>Detalhes do Apiário</h2>
          <div>Apiário não encontrado.</div>
          <button onClick={handleCancel}>Voltar para Lista</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className={Style.container}>
        <h2>{isEditing ? 'Editar Apiário' : `Detalhes do Apiário`}</h2>

        {isEditing ? (
          <form onSubmit={handleSaveEdit} className={Style.infoBox}>
            <p>Nome do Apiário</p>
            <input
              type="text"
              value={editNomeApiario}
              onChange={(e) => setEditNomeApiario(e.target.value)}
              required
            />
            <p>Localização</p>
            <input
              type="text"
              value={editLocalizacao}
              onChange={(e) => setEditLocalizacao(e.target.value)}
              required
            />
            <p>Quantidade de Colmeias</p>
            <input
              type="number"
              value={editQuantidadeColmeias}
              onChange={(e) => setEditQuantidadeColmeias(e.target.value)}
            />
            <p>Data de Fundação</p>
            <input
              type="date"
              value={editDataFundacao}
              onChange={(e) => setEditDataFundacao(e.target.value)}
              required
            />
            <div className={Style.botoes}>
              <button type="submit" className={Style.edit}>Salvar</button>
              <button type="button" className={Style.cancel} onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        ) : (
          <div className={Style.infoBox}>
            <p><strong>Nome:</strong> {apiario.nome}</p>
            <p><strong>Localização:</strong> {apiario.localizacao}</p>
            {apiario.quantidadeColmeias !== undefined && apiario.quantidadeColmeias !== null && (
              <p><strong>Colmeias:</strong> {apiario.quantidadeColmeias}</p>
            )}
            {apiario.dataFundacao && (
              <p><strong>Data de Fundação:</strong> {apiario.dataFundacao}</p>
            )}
            {apiario.dataCadastro && ( 
              <p style={{ fontSize: '0.8em', color: '#777' }}>
                Cadastrado em: {new Date(apiario.dataCadastro).toLocaleString()}
              </p>
            )}
            <img className={Style.imagem} src={apiarioImg} alt="apiarioImg" />

            <div className={Style.botoes}>
              <button className={Style.edit} onClick={handleEdit}>Editar</button>
              <button className={Style.delete} onClick={handleDelete}>Deletar</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}