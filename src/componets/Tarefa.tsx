import sytles from './Tarefa.module.css';
import { Trash } from "phosphor-react";
export function Tarefa(){
    return(
        <div className={sytles.tarefa}>
            <input type='checkbox' id='checkbox' />
            <label htmlFor="checkbox"></label>
            <p>Melhorar painel de monitoração PJ</p>
            <Trash className='icone-trash' size={24} weight='regular' color='gray'/>
        </div>
    )
}