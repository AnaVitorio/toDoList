import { PlusCircle } from "phosphor-react";
import styles from "./AdicionarTarefa.module.css";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import uuid from "react-uuid";
import { TypeTarefa } from "../App";

interface Parameters {
  listaTarefas: TypeTarefa[];
  setListaTarefas: Dispatch<SetStateAction<TypeTarefa[]>>;
}



export function AdicionarTarefa(props: Parameters) {

  const [textoNovaTarefa, settextoNovaTarefa] = useState("");

  function handleSubmitCriarTarefa(event: FormEvent) {
    event.preventDefault();
    const novaTarefa = {
      id: uuid(),
      texto: textoNovaTarefa,
      status: false
    }
    props.setListaTarefas([...props.listaTarefas, novaTarefa]);
    settextoNovaTarefa("");
  }

  const handleNovaTarefa = (event: ChangeEvent<HTMLInputElement>) =>{
    settextoNovaTarefa(event.target.value)
  }

  return (
    <form onSubmit={handleSubmitCriarTarefa} className={styles.adicionarTarefa}>
      <input
        onChange={handleNovaTarefa}
        placeholder="Adicione uma nova tarefa"
        value={textoNovaTarefa}
      ></input>
      <button disabled={textoNovaTarefa===""}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
