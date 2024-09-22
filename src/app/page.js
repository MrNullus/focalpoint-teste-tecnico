'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

import Header from "@/components/Header";
import AreaTasksUncompleted from "@/components/AreaTasksUncompleted";
import AreaTasksCompleted from "@/components/AreaTasksCompleted";
import ModalDeleteTask from "@/components/ModalDeleteTask";
import ModalAddTask from "@/components/ModalAddTask";

export default function Home() {
  const [ modalAddTask, setModalAddTask ] = useState( false );
  const [ modalDeleteTask, setModalDeleteTask ] = useState( false );
  const [ taskSelected, setTaskSelected ] = useState( {} );

  const [ tasks, setTasks ] = useState( [] );

  useEffect( () => {
   const storedTasks = localStorage.getItem( 'tasks' );
    if ( storedTasks ) {
      setTasks( JSON.parse( storedTasks ) );
    }
  }, [] );

  useEffect( () => {
   localStorage.setItem( 'tasks', JSON.stringify( tasks ) );
  }, [ tasks ] );

  console.table( tasks );


  return (
    <div className={ styles.page }>

      <Header/>

      <main className={ styles.appContainer }>
        <div className={ styles.wrapper }>
          <section className={ styles.tasksContainer }>
            <AreaTasksUncompleted
              setTasks={ setTasks }
              setModalDeleteTask={ setModalDeleteTask }
              setTaskSelected={ setTaskSelected }
              taskSelected={ taskSelected }
              tasks={
                tasks.length > 0 ?
                  tasks.filter( task => task.status == false )
                  :
                  []
              }
            />

            <AreaTasksCompleted
              setTasks={ setTasks }
              setModalDeleteTask={ setModalDeleteTask }
              setTaskSelected={ setTaskSelected }
              taskSelected={ taskSelected }
              tasks={
                tasks.length > 0 ?
                  tasks.filter( task => task.status == true )
                  :
                  []
              }
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
            tasks={ tasks }
            setTasks={ setTasks }
            setModalAddTask={ setModalAddTask }
          />
        )
      }
      {
        modalDeleteTask && (
          <ModalDeleteTask
            setTasks={ setTasks }
            tasks={ tasks }
            taskSelected={ taskSelected }
            setTaskSelected={ setTaskSelected }
            setModalDeleteTask={ setModalDeleteTask }
          />
        )
      }
    </div>
  );
}
