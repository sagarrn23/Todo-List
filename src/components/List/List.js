import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './List.module.css';

const List = (props) => {
    let taskClass = classes.myTask;

    if(props.status) {
        taskClass += " " + classes.taskDone;
    }

    return (
        <li className={classes.list}>
            <div className={classes.check}>
                <input type='checkbox' onClick={props.changeStatus} defaultChecked={props.status}/>
            </div>
            <p className={taskClass}>{props.task}</p>
            <div className={classes.trash} onClick={props.delete}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </li>
    )
}

export default List;