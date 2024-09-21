import styles from "./style.module.scss";

const Task = ( { title, status } ) => {
  return (
    <div className={ `${ styles.taskItem } ${status?  styles.taskCompleted : ''}`  }>

      <div className={ styles.tasksContainer}>
        <div className={ styles.taskStatus}>
          <img
            src="/icons/check.svg" alt="Check"
          />
          <input type="checkbox" name="status"/>
        </div>

        <p>
          { title }
        </p>
      </div>

      <div className={styles.taskAction}>
        <button>
          <img
            src="/icons/trash.svg" alt="Delete"
          />
        </button>
      </div>
    </div>
  );
}

export default Task;
