import { useEffect, useState } from "react";
import { AdicionarTarefa } from "./componets/AdicionarTarefa";
import { Header } from "./componets/Header";
import { PainelTarefas } from "./componets/PainelTarefas";

export interface TypeTarefa {
  id: string;
  texto: string;
  status: boolean;
}

function App() {
  const [tarefa, setTarefa] = useState<TypeTarefa[]>([]);
  const [listaTarefas, setListaTarefas] = useState<TypeTarefa[]>([]);
  const [quantidadeTarefasCriadas, setQuantidadeTarefasCriadas] = useState(0);
  const [quantidadeTarefasConcluidas, setQuantidadeTarefasConcluidas] =
    useState(0);

  useEffect(() => {
    setQuantidadeTarefasCriadas(listaTarefas.length);
  }),
    [listaTarefas];

  return (
    <div>
      <Header />
      <AdicionarTarefa
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
        setTarefa={setTarefa}
      />
      <PainelTarefas
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
        quantidadeTarefasCriadas={quantidadeTarefasCriadas}
        quantidadeTarefasConcluidas={quantidadeTarefasConcluidas}
        setQuantidadeTarefasConcluidas={setQuantidadeTarefasConcluidas}
      />
    </div>
  );
}

export default App;
