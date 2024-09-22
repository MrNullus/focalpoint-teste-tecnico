import styles from "./style.module.scss";

const ModalBase = ({ title, children }) => {
  return (

    <div className={ styles.modalContainer }>
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>
          { title }
        </h3>

        {
          children
        }
      </div>
    </div>
  );
}

export default ModalBase;
