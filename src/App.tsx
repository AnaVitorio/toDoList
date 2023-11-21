import { AdicionarTarefa } from "./componets/AdicionarTarefa";
import { Header } from "./componets/Header";
import { PainelTarefas } from "./componets/PainelTarefas";

function App() {
  return (
    <div>
      <Header />
      <AdicionarTarefa/>
      <PainelTarefas/>
    </div>
  );
}

export default App;
