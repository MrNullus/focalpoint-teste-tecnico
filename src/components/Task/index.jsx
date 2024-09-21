import styles from "./style.module.scss";

const Task = ( { title } ) => {
  return (
    <div className="task-item task-completed">
      <div className="task-status">
        <img
          src="/icons/check.svg" alt="Check"
        />
        <input type="checkbox" name="status"/>
      </div>
      <div className="task-content">
        <p>
          { title }
        </p>
      </div>
      <div className="task-action">
        <button className={ "btn-delete" }>
          <img
            src="/icons/trash.svg" alt="Delete"
          />
        </button>
      </div>
    </div>
  );
}

export default Task;
