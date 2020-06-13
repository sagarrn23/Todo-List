import React from 'react';
import classes from './AddTask.module.css';

const AddTask = (props) => {
    return (
        <div className={classes.addTask}>
            <div className={classes.inputWrap}>
                <input type="text"/>
            </div>
            <div className={classes.buttonWrap}>
                <button onClick={props.addData}>Add</button>
            </div>
        </div>
    )
}

export default AddTask;