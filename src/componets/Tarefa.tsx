import { TypeTarefa } from "../App";
import sytles from "./Tarefa.module.css";
import { Trash } from "phosphor-react";

interface Parameters {
  tarefa: TypeTarefa;
  deletarTarefa: (tarefa: string) => void;
  trocaStatusTarefa: (id: string) => void;
}

export function Tarefa(props: Parameters) {

  const handleExcluirTarefa = () => {
    props.deletarTarefa(props.tarefa.id)
  };


  const handleCheckedAndUncheked = () =>{
    props.trocaStatusTarefa(props.tarefa.id)
  }

  return (
    <div className={sytles.tarefa}>
      <div className={sytles.tarefaContainerItens}>
        <div className={sytles.containerCheckbox}>
          <input onChange={handleCheckedAndUncheked} id="checkbox" type="checkbox" />
          <label htmlFor="checkbox"></label>
          <p className={props.tarefa.status ? sytles.descricaoTarefaChecked : sytles.descricaoTarefaUnchecked}>{props.tarefa.texto}</p>
        </div>
        <Trash
        onClick={handleExcluirTarefa}
        className="icone-trash"
        cursor={"pointer"}
        size={24}
        weight="regular"
        color="gray"
        />
      </div>
    </div>
  );
}
