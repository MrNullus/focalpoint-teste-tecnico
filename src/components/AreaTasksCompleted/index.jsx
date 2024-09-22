import styles from "./style.module.scss";
import styleGlobals from "../../app/resources/styles/globals.module.scss";
import Task from "@/components/Task";

const AreaTasksCompleted = () => {
  return (
    <article className={ `${ styleGlobals.tasksGroup } areaTasksCompleted` }>
      <h3 className={ styleGlobals.headingAreaTask }>
        Tarefas finalizadas
      </h3>

      <div className={ styleGlobals.tasksGroup }>
        <Task
          status={ true  }
          title="Levar o lixo para fora"
        />
      </div>
    </article>
  );
}

export default AreaTasksCompleted;
