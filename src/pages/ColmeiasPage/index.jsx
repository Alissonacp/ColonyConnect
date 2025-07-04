import Style from './style.module.css'
import NavBar from '../../components/NavBar';
import CadButton from '../../components/CadButton';
import SearchBar from '../../components/SerachBar';
import ItensList from '../../components/ItensList'
import Footer from '../../components/Footer'

export default function ColmeiasPage() {

  const cadButtonName = '+ cadastrar colméia'

  const colmeias = [
    { id: 1, nome: "Colméia 1", data: "2025-06-01" },
    { id: 2, nome: "Colméia 2", data: "2025-06-15" },
  ];

  return (
    <>
      <NavBar />

      <div className={Style.container}>
        <h1>Colméias</h1>

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

