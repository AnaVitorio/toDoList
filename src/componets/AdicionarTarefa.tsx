import { PlusCircle } from "phosphor-react";
import styles from "./AdicionarTarefa.module.css";
import { FormEvent } from "react";

export function AdicionarTarefa() {

    function handleSubmitForm(event: FormEvent){
        event.preventDefault();

    }

  return (
      <form onSubmit={handleSubmitForm} className={styles.adicionarTarefa}>
        <input placeholder="Adicione uma nova tarefa"></input>
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
  );
}
