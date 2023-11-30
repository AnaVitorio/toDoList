import { useState } from "react";
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

  return (
    <div>
      <Header />
      <AdicionarTarefa listaTarefas={listaTarefas} setListaTarefas={setListaTarefas} setTarefa={setTarefa} />
      <PainelTarefas
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
        tarefa={tarefa}
      />
    </div>
  );
}

export default App;
