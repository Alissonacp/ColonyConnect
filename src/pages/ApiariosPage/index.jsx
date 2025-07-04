import Style from './style.module.css'
import NavBar from '../../components/NavBar';
import CadButton from '../../components/CadButton';
import SearchBar from '../../components/SerachBar';
import ItensList from '../../components/ItensList'
import Footer from '../../components/Footer'

export default function ApiariosPage() {

  const cadButtonName = '+ cadastrar apiário'

  const apiarios = [
    { id: 1, nome: "Apiário Santa Luzia", data: "2025-06-01" },
    { id: 2, nome: "Apiário Serra Azul", data: "2025-06-15" },
  ];

  return (
    <>
      <NavBar />

      <div className={Style.container}>
        <h1>Apiários</h1>

        <CadButton nome={cadButtonName} />

        <SearchBar />

        {apiarios.map((item) => (
          <ItensList nome={item.nome} data={item.data} />
        ))}
        {/* <div>
        <h4>Apiário 01</h4>
        <h6>15/05/2025</h6>
        </div> */}
      </div>
          <Footer />
    </>


  )
}

