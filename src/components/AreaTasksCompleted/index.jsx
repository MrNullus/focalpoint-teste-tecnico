import styles from "./style.module.scss";
import Task from "@/components/Task";

const AreaTasksCompleted = () => {
  return (
    <article className={ "area-tasks-completed" }>
      <h3 className={ "heading3" }>
        Tarefas finalizadas
      </h3>

      <div className="tasks-group">
        <Task
          title="Levar o lixo para fora"
        />
      </div>
    </article>
  );
}

export default AreaTasksCompleted;
