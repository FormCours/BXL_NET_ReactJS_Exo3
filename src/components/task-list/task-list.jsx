import React from 'react';
import PropTypes from 'prop-types';

import style from './task-list.module.css';
import TaskListItem from './task-list-item';

const TaskList = (props) => {
    const {onDelete, onFinish} = props;

    const taskList = props.taskList.map(
        task => <TaskListItem key={task.id} {...task} 
                    onTaskDelete={onDelete} onTaskFinish={onFinish} />
    );

    return(
        <ul class={style.taskList}>
            {taskList}
        </ul>
    );
}

TaskList.propTypes = {
    taskList: PropTypes.array,
    onDelete: PropTypes.func,
    onFinish: PropTypes.func
}

TaskList.defaultProps = {
    taskList: [],
    onDelete: () => {},
    onFinish: () => {}
}


export default TaskList;