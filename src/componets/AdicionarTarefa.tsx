import { PlusCircle } from "phosphor-react";
import styles from "./AdicionarTarefa.module.css";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

interface Parameters {
  listaTarefas: string[];
  setListaTarefas: Dispatch<SetStateAction<string[]>>;
  setTarefa: Dispatch<SetStateAction<string>>;
}

export function AdicionarTarefa(props: Parameters) {
  const [novaTarefa, setNovaTarefa] = useState("");

  function handleSubmitCriarTarefa(event: FormEvent) {
    event.preventDefault();
    props.setListaTarefas([...props.listaTarefas, novaTarefa]);
  }

  const handleNovaTarefa = (event: ChangeEvent<HTMLInputElement>) =>{
    setNovaTarefa(event.target.value);
    props.setTarefa(novaTarefa);
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
