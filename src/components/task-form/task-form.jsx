import { useState } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';

import PriorityEnum from './../../enums/priority-enum';

import style from './task-form.module.css';

const TaskForm = (props) => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState(PriorityEnum.NORMAL);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Envoie des données
        const task = {
            id: nanoid(),
            name: name,
            desc: desc,
            priority: priority,
            isFinish: false
        }
        props.onNewTask(task);

        // Reset du formulaire
        setName('');
        setDesc('');
        setPriority(PriorityEnum.NORMAL);
    }


    return (
        <form className={style.taskForm} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom</label>
                <input id="name" type="text" 
                    value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <textarea id="desc" 
                    value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="priority">Priorité</label>
                <select id="priority" 
                    value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value={PriorityEnum.NORMAL}>Normal</option>
                    <option value={PriorityEnum.HIGH}>Urgent</option>
                    <option value={PriorityEnum.LOW}>Basse</option>
                </select>
                <input type="submit" value="Ajouter" />
            </div>
        </form>
    )
}

TaskForm.propTypes = {
    onNewTask: PropTypes.func.isRequired
}


export default TaskForm;