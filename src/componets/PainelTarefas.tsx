import styles from "./PainelTarefas.module.css";
import cliboard from "../assets/Clipboard.png";
import { Tarefa } from "./Tarefa";
import { Dispatch, SetStateAction } from "react";
import { TypeTarefa } from "../App";

interface Parameters {
  listaTarefas: TypeTarefa[];
  setListaTarefas: Dispatch<SetStateAction<TypeTarefa[]>>;
  setQuantidadeTarefasConcluidas: Dispatch<SetStateAction<number>>;
  quantidadeTarefasConcluidas: number;
}
export function PainelTarefas(props: Parameters) {

  const deletarTarefa = (idTarefaDeletar: string) => {
    const novaListaTarefas = props.listaTarefas.filter((tarefa) => {
      return tarefa.id != idTarefaDeletar;
    });

    props.setListaTarefas(novaListaTarefas);
  };


  const trocaStatusTarefa = (id : string) => {
    const tarefaEncontrada : TypeTarefa[] = props.listaTarefas.filter((tarefa) => tarefa.id === id);
    tarefaEncontrada[0].status = !tarefaEncontrada[0].status;
  
    if(tarefaEncontrada[0].status){
      props.setQuantidadeTarefasConcluidas((state) => {
        return state + 1;
      });
      console.log(props.listaTarefas);
    } else{
      props.setQuantidadeTarefasConcluidas((state) => {
        return state - 1;
      });
    }

  }

  return (
    <div className={styles.painelTarefas}>
      <header>
        <div className={styles.criadas}>
          <span>Tarefas criadas</span>
          <span className={styles.contadorCriadas}>
            {props.listaTarefas.length}
          </span>
        </div>
        <div className={styles.concluidas}>
          <span>Concluídas</span>
          <span className={props.quantidadeTarefasConcluidas === 0 ? styles.contadorCriadas : styles.contadorConcluidas}>
            {props.quantidadeTarefasConcluidas === 0 ? props.quantidadeTarefasConcluidas
            : `${props.quantidadeTarefasConcluidas} de ${props.listaTarefas.length}`} 
             
          </span>
        </div>
      </header>
      {props.listaTarefas.length === 0 ? (
        <div className={styles.painelTarefasCriadas}>
          <img src={cliboard} />
          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </span>
        </div>
      ) : (
        <></>
      )}

      {props.listaTarefas.map((tarefa) => {
        return (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            deletarTarefa={deletarTarefa}
            trocaStatusTarefa={trocaStatusTarefa}
          />
        );
      })}
    </div>
  );
}
