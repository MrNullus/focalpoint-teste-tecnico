import styleGlobals from "../../app/resources/styles/globals.module.scss";
import styles from "./style.module.scss";
import Task from "@/components/Task";

const AreaTasksUncompleted = () => {
  return (
    <article className={ `${styleGlobals.tasksGroup} areaTasksUncompleted` }>
      <h3 className={ styleGlobals.headingAreaTask }>
        Suas tarefas de hoje
      </h3>

      <div className={ styleGlobals.tasksGroup }>
        <Task
          title="Levar o lixo para fora"
        />

        <Task
          title="Fazer um bolo"
        />

        <Task
          title="Lavar a louça"
        />
      </div>
    </article>
  );
}

export default AreaTasksUncompleted;
