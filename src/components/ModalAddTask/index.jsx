import styles from "./style.module.scss";
import ModalBase from "@/components/ModalBase";
import { useRef, useState } from "react";

const ModalAddTask = ( { setModalAddTask, tasks, setTasks } ) => {
  const newTaskTitleRef = useRef( null );

  const handleActionAddTask = () => {
    const newTaskTitle = newTaskTitleRef.current.value;

    if ( newTaskTitle === undefined || newTaskTitle === "" ) {
      alert( "Por favor, preencha o campo do título" );
      return;
    }

    const newTask = {
      title : newTaskTitle,
      status : false
    };
    setTasks( [ ...tasks, newTask ] );

    setModalAddTask( false );
  }

  return (
    <ModalBase title="Nova tarefa">
      <form className={ styles.modalInner }>
        <div className={ styles.formGroup }>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="Digite"
            ref={ newTaskTitleRef }
          />
        </div>

        <div className={ styles.btnActions }>
          <button
            className={ styles.btnCloseModal }
            onClick={ () => {
              confirm( "Deseja mesmo cancelar?" );
              setModalAddTask( false );
            } }
          >
            Cancelar
          </button>

          <button
            type="button"
            className={ styles.btnAddTask }
            onClick={ handleActionAddTask }
          >
            Adicionar
          </button>
        </div>
      </form>
    </ModalBase>
  );
}

export default ModalAddTask;
