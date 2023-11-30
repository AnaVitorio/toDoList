import styles from "./PainelTarefas.module.css";
import cliboard from "../assets/Clipboard.png";
import { Tarefa } from "./Tarefa";
import { useState } from "react";

export function PainelTarefas() {

  const [listaTarefas, setListaTarefas] = useState(["Melhorar painel de monitoração PJ", "Estudar", "", ""]);

  const deletarTarefa = (tarefaDeletar: string) =>{
    const novaListaTarefas = listaTarefas.filter(tarefa => {
      return tarefa != tarefaDeletar;
    })

    setListaTarefas(novaListaTarefas);

  }
  
  return (
    <div className={styles.painelTarefas}>
      <header>
        <div className={styles.criadas}>
          <span>Tarefas criadas</span>
          <span className={styles.contador}>0</span>
        </div>
        <div className={styles.concluidas}>
          <span>Concluídas</span>
          <span className={styles.contador}>0</span>
        </div>
      </header>
      {listaTarefas.length === 0 ?
        <div className={styles.painelTarefasCriadas}>
        <img src={cliboard} />
        <span>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </div>
      :<></>}
      
      {listaTarefas.map((tarefa, index) =>{
        return <Tarefa key={tarefa+index} textoTarefa={tarefa} deletarTarefa={deletarTarefa}/>
      })}
    </div>
  );
}