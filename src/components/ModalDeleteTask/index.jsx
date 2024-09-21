import styles from "./style.module.scss";
import ModalBase from "@/components/ModalBase";

const ModalAddTask = () => {
  return (
    <ModalBase title="Deletar tarefa">

      <div className="modal-inner">
        <p className={ "text-weak" }>
          Tem certeza que você deseja deletar essa tarefa?
        </p>

        <div className="btn-actions">
          <button className="btn-close-modal">
            Cancelar
          </button>

          <button
            type="button"
            className={ "btn-delete-task" }
          >
            Deletar
          </button>
        </div>
      </div>
    </ModalBase>
  );
}

export default ModalAddTask;
