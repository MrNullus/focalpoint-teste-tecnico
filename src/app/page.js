'use client';
import { useState } from "react";
import styles from "./page.module.scss";

import Header from "@/components/Header";
import AreaTasksUncompleted from "@/components/AreaTasksUncompleted";
import AreaTasksCompleted from "@/components/AreaTasksCompleted";
import ModalDeleteTask from "@/components/ModalDeleteTask";
import ModalAddTask from "@/components/ModalAddTask";
import task from "@/components/Task";

export default function Home() {
  const [ modalAddTask, setModalAddTask ] = useState( false );
  const [ modalDeleteTask, setModalDeleteTask ] = useState( false );
  const [ taskSelected, setTaskSelected ] = useState( {} );

  const [ tasks, setTasks ] = useState( [ {
    title : 'Estudar React',
    status : false
  },
    {
      title : 'Levar o lixo para fora',
      status : true
    }
  ] );
  const [ newTask, setNewTask ] = useState( { title : '' } );

  const addTask = () => {
    setNewTask( { title : '', status : false } );
    setTasks( [ ...tasks, newTask ] );
  };

  return (
    <div className={ styles.page }>

      <Header/>

      <main className={ styles.appContainer }>
        <div className={ styles.wrapper }>
          <section className={ styles.tasksContainer }>
            <AreaTasksUncompleted
              setModalDeleteTask={setModalDeleteTask}
              setTaskSelected={setTaskSelected}
              tasks={ tasks.filter( task => task.status == false ) }
            />

            <AreaTasksCompleted
              setModalDeleteTask={setModalDeleteTask}
              setTaskSelected={setTaskSelected}
              tasks={ tasks.filter( task => task.status == true ) }
            />
          </section>
        </div>

        <button
          className={ styles.btnAddTask }
          onClick={ () => setModalAddTask( true ) }
        >
          Adicionar nova tarefa
        </button>
      </main>

      {
        modalAddTask && (
          <ModalAddTask
            tasks={tasks}
            setTasks={setTasks}
            setModalAddTask={ setModalAddTask }
          />
        )
      }
      {
        modalDeleteTask && (
          <ModalDeleteTask
            setTasks={setTasks}
            tasks={tasks}
            taskSelected={taskSelected}
            setTaskSelected={setTaskSelected}
            setModalDeleteTask={ setModalDeleteTask }
          />
        )
      }
    </div>
  );
}
