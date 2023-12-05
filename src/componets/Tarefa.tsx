import { TypeTarefa } from "../App";
import sytles from "./Tarefa.module.css";
import { Trash } from "phosphor-react";

interface Parameters {
  tarefa: TypeTarefa;
  deletarTarefa: (tarefa: string) => void;
  handleTarefaChecked: () => void;
}

export function Tarefa(props: Parameters) {

  const handleExcluirTarefa = () => {
    props.deletarTarefa(props.tarefa.id)
  };


  const handleVerificarTarefaChecked = () =>{
    var element  =  document.getElementById("checkbox") as HTMLInputElement; 
    if (element.checked) {
      props.handleTarefaChecked;
    } else {
      return;
    }
  }

  return (
    <div className={sytles.tarefa}>
      <input onChange={handleVerificarTarefaChecked} type="checkbox" id="checkbox" />
      <label htmlFor="checkbox"></label>
      <p>{props.tarefa.texto}</p>
      <Trash
        onClick={handleExcluirTarefa}
        className="icone-trash"
        cursor={"pointer"}
        size={24}
        weight="regular"
        color="gray"
      />
    </div>
  );
}
