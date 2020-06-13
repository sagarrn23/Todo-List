import React from 'react';
import classes from './AddTask.module.css';

const AddTask = (props) => {
    return (
        <div className={classes.addTask}>
            <div className={classes.inputWrap}>
                <input type="text" value={props.initValue} onChange={props.addTask}/>
            </div>
            <div className={classes.buttonWrap}>
                <button onClick={props.submit}>Add</button>
            </div>
        </div>
    )
}

export default AddTask;