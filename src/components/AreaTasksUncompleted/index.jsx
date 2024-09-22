import styleGlobals from "../../app/resources/styles/globals.module.scss";
import Task from "@/components/Task";

const AreaTasksUncompleted = ( { tasks, setModalDeleteTask, setTaskSelected, taskSelected, setTasks } ) =>
  (
    <article className={ `${ styleGlobals.tasksGroup } areaTasksUncompleted` }>
      <h3 className={ styleGlobals.headingAreaTask }>
        Suas tarefas de hoje
      </h3>

      <div className={ styleGlobals.tasksGroup }>
        {
          tasks.length > 0 &&
          tasks.map( ( task ) => (
              <Task
                tasks={ tasks }
                setTasks={ setTasks }
                taskSelected={ taskSelected }
                setTaskSelected={ setTaskSelected }
                setModalDeleteTask={ setModalDeleteTask }
                key={ task.title }
                status={ task.status }
                title={ task.title }
              />
            )
          )
        }
      </div>
    </article>
  )

export default AreaTasksUncompleted;
