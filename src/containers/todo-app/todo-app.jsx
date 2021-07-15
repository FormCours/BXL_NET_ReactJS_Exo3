import React, { useState } from 'react';
import TaskForm from '../../components/task-form/task-form';
import TaskList from '../../components/task-list/task-list';

const TodoApp = (props) => {

    const [taskList, setTaskList] = useState([]);


    const handleNewTask = (task) => {
        setTaskList((tasks) => [task, ...tasks]);
    }

    const handleDeleteTask = (id) => {
        setTaskList((tasks) => tasks.filter(task => task.id !== id))
    }

    const handleFinishTask = (id) => {
        setTaskList((tasks) => 
            tasks.map(task => (task.id !== id) ? task : {...task, isFinish: true})
        );
    }

    return (
        <div>
            <h1>Formulaire</h1>
            <TaskForm onNewTask={handleNewTask} />

            <h1>La liste des taches</h1>
            <TaskList taskList={taskList} 
                    onDelete={handleDeleteTask}
                    onFinish={handleFinishTask} />
        </div>
    );
}

export default TodoApp;