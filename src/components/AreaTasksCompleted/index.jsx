import styleGlobals from "../../app/resources/styles/globals.module.scss";
import styles from "./style.module.scss";
import Task from "@/components/Task";

const AreaTasksCompleted = ({ tasks, setModalDeleteTask, setTaskSelected }) =>
  (
    <article className={ `${ styleGlobals.tasksGroup } areaTasksCompleted` }>
      <h3 className={ styleGlobals.headingAreaTask }>
        Tarefas finalizadas
      </h3>

      <div className={ styleGlobals.tasksGroup }>
        {
          tasks.map( ( task ) => (
            <Task
              setTaskSelected={ setTaskSelected }
              setModalDeleteTask={ setModalDeleteTask }
              key={ task.id }
              status={ tasks.status }
              title={ task.title }
            />
          ) )
        }
      </div>
    </article>
  )

export default AreaTasksCompleted;
