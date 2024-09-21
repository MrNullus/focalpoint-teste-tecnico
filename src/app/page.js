import styles from "./page.module.scss";
import Header from "@/components/Header";
import AreaTasksUncompleted from "@/components/AreaTasksUncompleted";
import AreaTasksCompleted from "@/components/AreaTasksCompleted";
import ModalDeleteTask from "@/components/ModalDeleteTask";
import ModalAddTask from "@/components/ModalAddTask";

export default function Home() {
  return (
    <div className={ styles.page }>

      <Header/>

      <main className={ "app-container" }>

        <div className="wrapper">
          <section className="tasks-container">

            <AreaTasksUncompleted/>

            <AreaTasksCompleted/>
          </section>

          <button className="btn-add-task">
            Adicionar nova tarefa
          </button>
        </div>

      </main>

      <ModalAddTask />
      <ModalDeleteTask />
    </div>
  );
}
