import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CadButton from '../../components/CadButton';
import SearchBar from '../../components/SerachBar';
import LinhaDivisoria from '../../components/LinhaDivisoria';
import ItensList from '../../components/ItensList';
import Footer from '../../components/Footer';
import Style from './style.module.css';

import { db } from '../../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export default function ApiariosPage() {

  const cadButtonName = '+ cadastrar apiário';

  const [apiarios, setApiarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const apiariosRef = ref(db, 'apiarios');

    const unsubscribe = onValue(apiariosRef, (snapshot) => {
      try {
        const dados = snapshot.val();

        let apiariosArray = [];
        if (dados) {
          apiariosArray = Object.keys(dados).map(key => ({
            id: key,
            ...dados[key]
          }));
        }

        setApiarios(apiariosArray);
        setLoading(false);
        setError(null);
        console.log("Apiários carregados/atualizados:", apiariosArray);

      } catch (error) {
        console.error("Erro ao processar dados do Firebase:", error);
        setError("Ocorreu um erro ao carregar os apiários.");
        setLoading(false);
      }
    }, (dbError) => {
      console.error("Erro no listener do Firebase Realtime Database:", dbError);
      setError("Não foi possível conectar ao banco de dados ou permissão negada.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <>
        <NavBar />
        <div className={Style.container}>
          <h1>Apiários</h1>
          <div>Carregando apiários...</div>
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
          <h1>Apiários</h1>
          <div style={{ color: 'red' }}>Erro: {error}</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className={Style.container}>
        <h1>Apiários</h1>

        <Link to={'/cadapiariopage'}>
          <CadButton nome={cadButtonName} />
        </Link>
        <SearchBar />
        <LinhaDivisoria />

        {apiarios.length === 0 ? (
          <p>Nenhum apiário cadastrado ainda. Clique em "+ cadastrar apiário" para adicionar um novo.</p>
        ) : (
          apiarios.map((item) => (
            <ItensList
              key={item.id}
              id={item.id}
              nome={item.nome}
              data={item.dataFundacao}
              path="apiarioinfopage"
            />
          ))
        )}

      </div>
      <Footer />
    </>
  );
}