import styles from "./PainelTarefas.module.css";
import cliboard from "../assets/Clipboard.png";
import { Tarefa } from "./Tarefa";
import { Dispatch, SetStateAction, useState } from "react";
import { TypeTarefa } from "../App";

interface Parameters {
  listaTarefas: TypeTarefa[];
  setListaTarefas: Dispatch<SetStateAction<TypeTarefa[]>>;
}
export function PainelTarefas(props: Parameters) {
  const [quantidadeTarefasConcluidas, setQuantidadeTarefasConcluidas] =
    useState(0);

  const deletarTarefa = (idTarefaDeletar: string) => {
    const novaListaTarefas = props.listaTarefas.filter((tarefa) => {
      return tarefa.id != idTarefaDeletar;
    });
    props.setListaTarefas(novaListaTarefas);

    const tarefa = props.listaTarefas.filter(
      (tarefa) => tarefa.id === idTarefaDeletar
    )[0];
    
    if (tarefa.status === true) {
      setQuantidadeTarefasConcluidas((state) => {
        return state - 1;
      });
    }
  };

  const trocaStatusTarefa = (id: string) => {
    const tarefaEncontrada: TypeTarefa[] = props.listaTarefas.filter(
      (tarefa) => tarefa.id === id
    );
    tarefaEncontrada[0].status = !tarefaEncontrada[0].status;

    if (tarefaEncontrada[0].status) {
      setQuantidadeTarefasConcluidas((state) => {
        return state + 1;
      });
    } else {
      setQuantidadeTarefasConcluidas((state) => {
        return state - 1;
      });
    }
  };

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
          <span
            className={
              quantidadeTarefasConcluidas === 0
                ? styles.contadorCriadas
                : styles.contadorConcluidas
            }
          >
            {quantidadeTarefasConcluidas === 0
              ? quantidadeTarefasConcluidas
              : `${quantidadeTarefasConcluidas} de ${props.listaTarefas.length}`}
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
