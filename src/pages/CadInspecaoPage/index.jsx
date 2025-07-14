import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { ref, onValue, push, set } from "firebase/database";
import Dropdown from "../../components/Dropdown";
import RadioButton from "../../components/RadioButton";
import MultiSelect from "../../components/Multiselect";
import Input from "../../components/Input";
import Style from "./style.module.css";
import NavBar from "../../components/NavBar";

export default function CadInspecaoPage() {
  const [apiarios, setApiarios] = useState([]);
  const [colmeias, setColmeias] = useState([]);
  const [apiarioSelecionado, setApiarioSelecionado] = useState("");
  const [colmeiaSelecionada, setColmeiaSelecionada] = useState("");
  const [dataInspecao, setDataInspecao] = useState("");

  const [saude, setSaude] = useState("");
  const [temRainha, setTemRainha] = useState("");
  const [posturaRainha, setPosturaRainha] = useState("");
  const [quadros, setQuadros] = useState("");
  const [estadoMel, setEstadoMel] = useState("");
  const [estadoPolen, setEstadoPolen] = useState("");
  const [doencasSelect, setDoencasSelect] = useState([]);
  const [tamanhoPopulacao, setTamanhoPopulacao] = useState("");
  const [manejosRealizados, setManejosRealizados] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const opcoesSaude = [
    { label: "Saudável", value: "saudavel" },
    { label: "Observação", value: "observacao" },
    { label: "Crítico", value: "critico" },
  ];

  const opcoesSimNao = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
  ];

  const estados = [
    { label: "Alto", value: "alto" },
    { label: "Médio", value: "medio" },
    { label: "Baixo", value: "baixo" },
  ];

  const opcoesDoencas = [
    { label: "Varroa", value: "varroa" },
    { label: "Traça", value: "traca" },
    { label: "Nenhuma", value: "nenhuma" },
    { label: "Outras", value: "outras" },
  ];

  const tamanhosPopulacao = [
    { label: "Grande", value: "grande" },
    { label: "Média", value: "media" },
    { label: "Pequena", value: "pequena" },
  ];

  // Carregar APIÁRIOS com colmeias
  useEffect(() => {
    const apiariosRef = ref(db, "apiarios");
    onValue(apiariosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.entries(data).map(([id, item]) => ({
          id,
          nome: item.nome,
          colmeias: item.colmeias || {},
        }));
        setApiarios(lista);
      }
    });
  }, []);

  const handleApiarioChange = (id) => {
    setApiarioSelecionado(id);
    const apiario = apiarios.find((a) => a.id === id);
    if (apiario) {
      const colmeiasFormatadas = Object.entries(apiario.colmeias).map(
        ([id, item]) => ({
          label: item.nome,
          value: id,
        })
      );
      setColmeias(colmeiasFormatadas);
    } else {
      setColmeias([]);
    }
    setColmeiaSelecionada("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!apiarioSelecionado || !colmeiaSelecionada || !dataInspecao) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    const novaInspecao = {
      apiarioId: apiarioSelecionado,
      colmeiaId: colmeiaSelecionada,
      dataInspecao,
      saude,
      temRainha,
      posturaRainha,
      quadrosComCrias: quadros,
      estadoMel,
      estadoPolen,
      doencas: doencasSelect,
      populacao: tamanhoPopulacao,
      manejos: manejosRealizados,
      observacoes,
      dataCadastro: Date.now(),
    };

    try {
      const novaRef = push(ref(db, "inspecoes"));
      await set(novaRef, novaInspecao);
      alert("Inspeção salva com sucesso!");

      // Resetar
      setApiarioSelecionado("");
      setColmeiaSelecionada("");
      setDataInspecao("");
      setSaude("");
      setTemRainha("");
      setPosturaRainha("");
      setQuadros("");
      setEstadoMel("");
      setEstadoPolen("");
      setDoencasSelect([]);
      setTamanhoPopulacao("");
      setManejosRealizados("");
      setObservacoes("");
    } catch (error) {
      console.error("Erro ao salvar inspeção:", error);
      alert("Erro ao salvar inspeção.");
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={Style.containerGeral}>
        <div className={Style.header}>
          <h1>Inspeção</h1>
        </div>
        <form onSubmit={handleSubmit} className={Style.forms}>
          <Dropdown
            label="Apiário *"
            items={apiarios.map((a) => ({ label: a.nome, value: a.id }))}
            selected={apiarioSelecionado}
            onChange={handleApiarioChange}
          />

          <Dropdown
            label="Colmeia *"
            items={colmeias}
            selected={colmeiaSelecionada}
            onChange={setColmeiaSelecionada}
          />

          <div className="form-group">
            <label>Data da Inspeção *</label>
            <input
              type="date"
              value={dataInspecao}
              onChange={(e) => setDataInspecao(e.target.value)}
            />
          </div>

          <RadioButton
            label="Saúde da Colmeia *"
            options={opcoesSaude}
            selected={saude}
            onChange={setSaude}
          />

          <RadioButton
            label="Rainha encontrada? *"
            options={opcoesSimNao}
            selected={temRainha}
            onChange={setTemRainha}
          />

          <RadioButton
            label="Postura da Rainha *"
            options={opcoesSimNao}
            selected={posturaRainha}
            onChange={setPosturaRainha}
          />

          <Input
            label="Quantidade de quadros com crias"
            placeholder="Ex: 4"
            value={quadros}
            onChange={setQuadros}
          />

          <RadioButton
            label="Mel *"
            options={estados}
            selected={estadoMel}
            onChange={setEstadoMel}
          />

          <RadioButton
            label="Pólen *"
            options={estados}
            selected={estadoPolen}
            onChange={setEstadoPolen}
          />

          <MultiSelect
            label="Ocorrência de doença *"
            options={opcoesDoencas}
            selected={doencasSelect}
            onChange={setDoencasSelect}
          />

          <RadioButton
            label="População da colmeia *"
            options={tamanhosPopulacao}
            selected={tamanhoPopulacao}
            onChange={setTamanhoPopulacao}
          />

          <Input
            label="Manejos realizados"
            placeholder="Ex: troca de cera"
            value={manejosRealizados}
            onChange={setManejosRealizados}
          />

          <Input
            multiline
            label="Observações"
            placeholder="Observações adicionais..."
            value={observacoes}
            onChange={setObservacoes}
          />

          <div className={Style.formActions}>
            <button type="submit" className={Style.salvar}>
              Salvar
            </button>
            <button
              type="button"
              className={Style.limpar}
              onClick={() => window.location.reload()}
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
