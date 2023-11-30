import { useEffect, useState } from "react";
import { AdicionarTarefa } from "./componets/AdicionarTarefa";
import { Header } from "./componets/Header";
import { PainelTarefas } from "./componets/PainelTarefas";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([
    "Melhorar painel de monitoração PJ",
    "Estudar",
    "",
    "",
  ]);
  const [quantidadeTarefasCriadas, setQuantidadeTarefasCriadas] = useState(0);
  const [quantidadeTarefasConcluidas, setQuantidadeTarefasConcluidas] = useState(0);

  useEffect(() => {
    setQuantidadeTarefasCriadas(listaTarefas.length);
  }),[listaTarefas];

  return (
    <div>
      <Header />
      <AdicionarTarefa listaTarefas={listaTarefas} setListaTarefas={setListaTarefas} setTarefa={setTarefa} />
      <PainelTarefas
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
        tarefa={tarefa}
        quantidadeTarefasCriadas={quantidadeTarefasCriadas}
        quantidadeTarefasConcluidas={quantidadeTarefasConcluidas}
      />
    </div>
  );
}

export default App;
