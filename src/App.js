import React, { Component } from 'react';
import List from './components/List/List';
import AddTask from './components/add-task/AddTask';
import classes from './App.module.css';
import './global.css';
import { v4 as uuidv4 } from "uuid";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: JSON.parse(localStorage.getItem('stored_task')),
      newTask: ''
    };
  }

  // this is to delete a task
  deleteTaskHandler = (index) => {
    const data = [...this.state.todo];
    data.splice(index, 1);

    this.updateLocalStore(data);
  }

  // this is to complete a task
  taskDoneHandler = (index) => {
    const data = [...this.state.todo];
    data[index].status = !data[index].status;
    this.updateLocalStore(data);
  }

  // to add new task
  addTaskHandler = () => {
    if(this.state.newTask) {
      const data = [...this.state.todo];
      data.push({
        name: this.state.newTask,
        status: false
      });
      this.setState({
        newTask: ''
      })
      this.updateLocalStore(data);
    }
  }

  // update in DB
  updateLocalStore = (data) => {
    let promise = new Promise((resolve) => {
      this.setState({
        todo: data
      });
      resolve();
    })

    promise.then(() => {
      this.storeLocally()
    });   
  }

  // store state in db
  storeLocally = () => {
    var storeTask = [...this.state.todo];
    localStorage.setItem('stored_task', JSON.stringify(storeTask));
  }

  // take user inputed text
  onChangeHandler = (e) => {
    const inputTask = e.target.value;
    this.setState({
      newTask: inputTask
    });
  }

  render() {
    const pastList = this.state.todo.map((data, index) => {
      return <List 
          key={uuidv4()} 
          task={data.name}
          delete={() => this.deleteTaskHandler(index)}
          status={data.status}
          changeStatus={() => this.taskDoneHandler(index)}
          defaultCheck={data.status}
        />;
    });

    return (
      <div className={classes.main}>
        <h1 className={classes.title}>My To Do</h1>
        <div className={classes.wrap}>
          <AddTask
            submit={this.addTaskHandler}
            addTask={(e) => this.onChangeHandler(e)}
            initValue={this.state.newTask}
          />

          <ul>{this.state.todo ? pastList : null}</ul>
        </div>
      </div>
    );
  }
}
export default Todo;
