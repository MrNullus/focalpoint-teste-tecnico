import styleGlobals from "../../app/resources/styles/globals.module.scss";
import styles from "./style.module.scss";
import ModalBase from "@/components/ModalBase";

const ModalAddTask = () => {
  return (
    <ModalBase title="Deletar tarefa">

      <form className={ styles.modalInner }>
        <p className={ styleGlobals.textWeak }>
          Tem certeza que você deseja deletar essa tarefa?
        </p>

         <div className={ styles.btnActions }>
          <button className={ styles.btnCloseModal }>
            Cancelar
          </button>

          <button
            type="button"
            className={ styles.btnDeleteTask }
          >
            Deletar
          </button>
        </div>
      </form>
    </ModalBase>
  );
}

export default ModalAddTask;
