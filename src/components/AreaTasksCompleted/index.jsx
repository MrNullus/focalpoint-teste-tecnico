import styles from "./style.module.scss";
import styleGlobals from "../../app/resources/styles/globals.module.scss";
import Task from "@/components/Task";

const AreaTasksCompleted = ({ tasks, setModalDeleteTask }) => {

  return (
    <article className={ `${ styleGlobals.tasksGroup } areaTasksCompleted` }>
      <h3 className={ styleGlobals.headingAreaTask }>
        Tarefas finalizadas
      </h3>

      <div className={ styleGlobals.tasksGroup }>
         {
          tasks.map((task) => (
            <Task
              setModalDeleteTask={setModalDeleteTask}
              key={task.id}
              status={tasks.status}
              title={task.title}
            />
          ))
        }
      </div>
    </article>
  );
}

export default AreaTasksCompleted;
