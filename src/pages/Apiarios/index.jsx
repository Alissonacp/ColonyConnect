import Style from './style.module.css'
import CadButton from '../../components/CadButton';
import SearchBar from '../../components/SerachBar';
import LinhaDivisoria from '../../components/LinhaDivisoria';
import Pagination from '../../components/Pagination';

function Apiarios() {

  const cadButtonName = '+ cadastrar apiário'

  const apiarios = [
    { id: 1, nome: "Apiário Santa Luzia", data: "2025-06-01" },
    { id: 2, nome: "Apiário Serra Azul", data: "2025-06-15" },
  ];

  return (
    <div className={Style.container}>
      <h1>Apiários</h1>

      <CadButton nome={cadButtonName} />

      <div className={Style.pesquisar}>
        <SearchBar />

      </div>

      <LinhaDivisoria />
      <div className={Style.Pagination}>
        <Pagination />
      </div>
      
      {/* <Pagination /> */}

      
   
      

      {/* <div>
        <h4>Apiário 01</h4>
        <h6>15/05/2025</h6>
      </div> */}



      {/* <div>
        <div>
          <h4>Nome</h4>
          <h4>Data da última alteração</h4>
        </div>
      
        {apiarios.map((item) => (
          <div key={item.id}>
            <span>{item.nome}</span>
            <span>{item.data}</span>
          </div>
        ))}
      </div> */}
    </div>

  )
}

export default Apiarios
