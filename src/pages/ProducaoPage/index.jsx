import Style from './style.module.css'
import NavBar from '../../components/NavBar';
import CadButton from '../../components/CadButton';
import SearchBar from '../../components/SerachBar';
import ItensList from '../../components/ItensList'
import Footer from '../../components/Footer'

export default function ProducaoPage() {

  const cadButtonName = '+ cadastrar produção'

  const colmeias = [
    { id: 1, nome: "Produção 1", data: "2025-06-01" },
    { id: 2, nome: "Produção 2", data: "2025-06-15" },
  ];

  return (
    <>
      <NavBar />

      <div className={Style.container}>
        <h1>Produção</h1>

        <CadButton nome={cadButtonName} />

        <SearchBar />

        {colmeias.map((item) => (
          <ItensList nome={item.nome} data={item.data} />
        ))}
      </div>
      <Footer />
    </>


  )
}

