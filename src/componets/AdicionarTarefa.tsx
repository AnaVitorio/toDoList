import { PlusCircle } from "phosphor-react";
import styles from "./AdicionarTarefa.module.css";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
} from "react";
import uuid from "react-uuid";
import { TypeTarefa } from "../App";

interface Parameters {
  listaTarefas: TypeTarefa[];
  setListaTarefas: Dispatch<SetStateAction<TypeTarefa[]>>;
  setTarefa: Dispatch<SetStateAction<TypeTarefa[]>>;
}

var textoNovaTarefa = "";

export function AdicionarTarefa(props: Parameters) {

  function handleSubmitCriarTarefa(event: FormEvent) {
    event.preventDefault();
    var novaTarefa = {
      id: uuid(),
      texto: textoNovaTarefa,
      status: false
    }
    props.setListaTarefas([...props.listaTarefas, novaTarefa]);
  }

  const handleNovaTarefa = (event: ChangeEvent<HTMLInputElement>) =>{
    textoNovaTarefa = event.target.value
  }

  return (
    <form onSubmit={handleSubmitCriarTarefa} className={styles.adicionarTarefa}>
      <input
        onChange={handleNovaTarefa}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
