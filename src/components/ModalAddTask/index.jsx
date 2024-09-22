import styles from "./style.module.scss";
import ModalBase from "@/components/ModalBase";

const ModalAddTask = ( { setModalAddTask } ) => {
  return (
    <ModalBase title="Nova tarefa">

      <form className={ styles.modalInner }>
        <div className={ styles.formGroup }>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="Digite"
          />
        </div>

        <div className={ styles.btnActions }>
          <button
            className={ styles.btnCloseModal }
            onClick={ () => setModalAddTask( false ) }
          >
            Cancelar
          </button>

          <button
            type="button"
            className={ styles.btnAddTask }
          >
            Adicionar
          </button>
        </div>
      </form>
    </ModalBase>
  );
}

export default ModalAddTask;
