import styles from "./style.module.scss";
import ModalBase from "@/components/ModalBase";

const ModalAddTask = () => {
  return (
    <ModalBase title="Nova tarefa">

      <form className={ "modal-inner" }>
        <div className="form-group">
          <label htmlFor="title"></label>
          <input
            type="text"
            placeholder="Digite"
          />
        </div>

        <div className="btn-actions">
          <button className="btn-close-modal">
            Cancelar
          </button>

          <button
            type="button"
            className={ "btn-add-task" }
          >
            Adicionar
          </button>
        </div>
      </form>
    </ModalBase>
  );
}

export default ModalAddTask;
