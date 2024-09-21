import styles from "./style.module.scss";
import Task from "@/components/Task";

const AreaTasksUncompleted = () => {
  return (
    <article className={ "area-tasks-uncompleted" }>
      <h3 className={ "heading3" }>
        Suas tarefas de hoje
      </h3>

      <div className="tasks-group">
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
