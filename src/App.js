import React, { Component } from 'react';
import List from './components/List/List';
import AddTask from './components/add-task/AddTask';
import classes from './App.module.css';
import './global.css';
import { v4 as uuidv4 } from "uuid";

class Todo extends Component {
  state = {
    todo: [
      {
        name: "task 1",
        status: true
      },
      {
        name: "task 2",
        status: false
      },
      {
        name: "this is task 3",
        status: false
      },
    ],
  };

  deleteTaskHandler = (index) => {
    const data = [...this.state.todo];
    data.splice(index, 1);
    this.setState({todo: data});
  }

  taskDoneHandler = (index) => {
    const data = [...this.state.todo];
    data[index].status = !data[index].status;
    this.setState({todo: data});
  }

  addTaskHandler = () => {
    
  }

  render() {
    return (
      <div className={classes.main}>
        <h1 className={classes.title}>My To Do</h1>
        <div className={classes.wrap}>
          <AddTask addData={this.addTaskHandler}/>
          <ul>
            {this.state.todo.map((data, index) => {
              return <List 
                key={uuidv4()} 
                task={data.name}
                delete={() => this.deleteTaskHandler(index)}
                status={data.status}
                changeStatus={() => this.taskDoneHandler(index)}
                defaultCheck={data.status}/>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Todo;
