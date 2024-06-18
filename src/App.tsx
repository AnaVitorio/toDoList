import { useState } from "react";
import { AdicionarTarefa } from "./componets/AdicionarTarefa";
import { Header } from "./componets/Header";
import { PainelTarefas } from "./componets/PainelTarefas";

export interface TypeTarefa {
  id: string;
  texto: string;
  status: boolean;
}

function App() {
  const [listaTarefas, setListaTarefas] = useState<TypeTarefa[]>([]);
  const [quantidadeTarefasConcluidas, setQuantidadeTarefasConcluidas] =
    useState(0);

  return (
    <div>
      <Header />
      <AdicionarTarefa
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
      />
      <PainelTarefas
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
        quantidadeTarefasConcluidas={quantidadeTarefasConcluidas}
        setQuantidadeTarefasConcluidas={setQuantidadeTarefasConcluidas}
      />
    </div>
  );
}

export default App;
