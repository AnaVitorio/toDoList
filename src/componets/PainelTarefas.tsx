import styles from "./PainelTarefas.module.css";
import cliboard from "../assets/Clipboard.png";
import { Tarefa } from "./Tarefa";
import { Dispatch, SetStateAction } from "react";

interface Parameters{
  tarefa: string;
  listaTarefas: string[];
  setListaTarefas: Dispatch<SetStateAction<string[]>>;
  quantidadeTarefasCriadas: number;
  quantidadeTarefasConcluidas: number;
}

export function PainelTarefas(props: Parameters) {

  const deletarTarefa = (tarefaDeletar: string) =>{
    const novaListaTarefas = props.listaTarefas.filter(tarefa => {
      return tarefa != tarefaDeletar;
    })

    props.setListaTarefas(novaListaTarefas);

  }



  return (
    <div className={styles.painelTarefas}>
      <header>
        <div className={styles.criadas}>
          <span>Tarefas criadas</span>
          <span className={styles.contador}>{props.quantidadeTarefasCriadas}</span>
        </div>
        <div className={styles.concluidas}>
          <span>Concluídas</span>
          <span className={styles.contador}>{props.quantidadeTarefasConcluidas}</span>
        </div>
      </header>
      {props.listaTarefas.length === 0 ?
        <div className={styles.painelTarefasCriadas}>
        <img src={cliboard} />
        <span>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </div>
      :<></>}
      
      {props.listaTarefas.map((tarefa, index) =>{
        return <Tarefa key={tarefa+index} textoTarefa={tarefa} deletarTarefa={deletarTarefa}/>
      })}
    </div>
  );
}
