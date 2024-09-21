import styles from "./style.module.scss";

const ModalBase = ({ title, children }) => {
  return (

    <div className="modal-container">
      <div className="modal-content">
        <h3 className="heading3">
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
