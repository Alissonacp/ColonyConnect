import Style from './style.module.css'
import NavBar from '../../components/NavBar';
import CadButton from '../../components/CadButton';
import SearchBar from '../../components/SerachBar';
import ItensList from '../../components/ItensList'
import Footer from '../../components/Footer'

export default function InspecaoPage() {

  const cadButtonName = '+ cadastrar inspeção'
  const cadButtonName2 = 'Lembretes de Inspeção'

  const colmeias = [
    { id: 1, nome: "Inspeção 1", data: "2025-06-01" },
    { id: 2, nome: "Inspeção 2", data: "2025-06-15" },
  ];

  return (
    <>
      <NavBar />

      <div className={Style.container}>
        <h1>Inspeção</h1>

        <CadButton nome={cadButtonName} />
        <CadButton nome={cadButtonName2} cadButtonClass={Style.cadButtonClass2}/>

        <SearchBar />

        {colmeias.map((item) => (
          <ItensList nome={item.nome} data={item.data} />
        ))}
      </div>
      <Footer />
    </>


  )
}

