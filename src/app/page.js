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

      <main className={ styles.appContainer }>

        <div className={ styles.wrapper }>
          <section className={ styles.tasksContainer }>
            <AreaTasksUncompleted/>

            <AreaTasksCompleted/>
          </section>
        </div>


          <button className={ styles.btnAddTask }>
            Adicionar nova tarefa
          </button>
      </main>

      {/*<ModalAddTask/>*/}
      {/*<ModalDeleteTask/>*/}
    </div>
  );
}
