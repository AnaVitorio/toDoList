import styles from "./PainelTarefas.module.css";
import cliboard from "../assets/Clipboard.png";
import { Tarefa } from "./Tarefa";

export function PainelTarefas() {
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

      <div className={styles.painelTarefasCriadas}>
        <img src={cliboard} />
        <span>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </div>

      <Tarefa/>
    </div>
  );
}
