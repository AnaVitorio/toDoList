import sytles from "./Tarefa.module.css";
import { Trash } from "phosphor-react";

interface Parameters {
  textoTarefa: string;
  deletarTarefa: (tarefa: string) => void;
}

export function Tarefa(props: Parameters) {
  const handleExcluirTarefa = () => {
    props.deletarTarefa(props.textoTarefa)
  };

  return (
    <div className={sytles.tarefa}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox"></label>
      <p>{props.textoTarefa}</p>
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
