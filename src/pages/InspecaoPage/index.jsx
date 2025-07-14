import Style from "./style.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import CadButton from "../../components/CadButton";
import SearchBar from "../../components/SerachBar";
import ItensList from "../../components/ItensList";
import Footer from "../../components/Footer";
import LinhaDivisoria from "../../components/LinhaDivisoria";
import Pagination from "../../components/Pagination";

export default function InspecaoPage() {
  const cadButtonName = "+ cadastrar inspeção";
  const cadButtonName2 = "Lembretes de Inspeção";

  const inspecao = [
    { id: 1, nome: "Inspeção 1", data: "2025-06-01" },
    { id: 2, nome: "Inspeção 2", data: "2025-06-15" },
    { id: 3, nome: "Inspeção 2", data: "2025-06-15" },
    { id: 4, nome: "Inspeção 2", data: "2025-06-15" },
    { id: 5, nome: "Inspeção 2", data: "2025-06-15" },
  ];

  return (
    <>
      <NavBar />
      <div className={Style.container}>
        <h1>Inspeção</h1>
        <Link to = {'/cadinspecaopage'}>        
        <CadButton nome={cadButtonName} />
        </Link>
        <Link to={"/lembretespage"}>
          <CadButton
            nome={cadButtonName2}
            cadButtonClass={Style.cadButtonClass2}
          />
        </Link>
        <SearchBar />
        <LinhaDivisoria />
        {inspecao.map((item) => (
          <ItensList nome={item.nome} data={item.data} path="apiarioinfopage" />
        ))}
        <Pagination />
      </div>
      <Footer />
    </>
  );
}
