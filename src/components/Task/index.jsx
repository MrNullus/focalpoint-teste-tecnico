import styles from "./style.module.scss";

const Task = ( { title, status, key, setModalDeleteTask, setTaskSelected, tasks, taskSelected, setTasks } ) => {

  const handleDeleteTask = () => {
    setTaskSelected( { title : title } );
    setModalDeleteTask( true );
  };

  const handleCompleteTask = () => {
    setTaskSelected({ title });

    const newTasks = tasks.map( ( task ) => {
      if ( task.title === taskSelected.title ) {
        task.status = !task.status;
      }
    });
  };

  return (
    <div key={ key } className={ `${ styles.taskItem } ${ status ?? styles.taskCompleted }` }>

      <div className={ styles.tasksContainer }>
        <div className={ styles.taskStatus }>
          <img
            src="/icons/check.svg" alt="Check"
          />
          <input
            type="checkbox"
            name="status"
            onClick={ handleCompleteTask }
          />
        </div>

        <p>
          { title }
        </p>
      </div>

      <div className={ styles.taskAction }>
        <button
          onClick={ handleDeleteTask }
        >
          <img
            src="/icons/trash.svg" alt="Delete"
          />
        </button>
      </div>
    </div>
  );
}

export default Task;
