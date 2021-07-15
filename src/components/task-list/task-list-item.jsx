import React from 'react';
import PropTypes from 'prop-types';

import style from './task-list.module.css';
import PriorityEnum from '../../enums/priority-enum';

const TaskListItem = (props) => {
    const {id, name, desc, priority, isFinish} = props;
    const {onTaskDelete, onTaskFinish} = props;
    const isUrgent = priority === PriorityEnum.HIGH;

    return(
        <li className={`${style.task} ${isUrgent ? style.urgent: ''} ${isFinish ? style.finish: ''}`}>
            <div>
                <p className={style.taskTitle}>{name}</p>
                <p>{desc}</p>
            </div>
            <div className={style.taskButton}>
                <button onClick={() => onTaskFinish(id)} disabled={isFinish}>Terminer</button>
                <button onClick={() => onTaskDelete(id)}>Supprimer</button>
            </div>
        </li>
    );
}

TaskListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired, 
    priority: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,

    onTaskDelete: PropTypes.func.isRequired,
    onTaskFinish: PropTypes.func.isRequired
}

export default TaskListItem;