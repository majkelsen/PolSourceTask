import React, { Component } from 'react';
import './style/App.css';
import image from './directStyle.png'

import DataTable from './components/DataTable.js'
import AddForm from './components/AddForm.js'

class App extends Component {
  state = {
    couter: 4,
    tasks: [
      {
        id: 0,
        text: 'task 1',
        important: 'low',
        done: true,
      },
      { id: 1, text: "task 2", important: 'medium', done: false },
      { id: 2, text: "task 3", important: 'high', done: false },
      { id: 3, text: "task 4", important: 'low', done: true },

    ]
  }

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);

    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
    })
    this.setState({
      tasks
    })
    console.log(this.state.tasks)
  }

  // addTask = (text, date, important) => {
  //   console.log("dodany obiekt");
  //   const task = {
  //     id: this.state.counter,
  //     text, // tekst z inputa
  //     date, //tekst z inputa
  //     important, //wartość z inputa
  //     active: true,
  //     finishDate: null
  //   }
  //   this.counter++
  //   console.log(task, this.counter);

  //   this.setState(prevState => ({
  //     tasks: [...prevState.tasks, task]
  //   }))
  //   return true
  // }

  render() {
    return (
      <div className="App">
        <DataTable tasks={this.state.tasks} delete={this.deleteTask} done={this.changeTaskStatus} />
        <AddForm />
        <img src={image} alt="fotka" />
      </div>
    );
  }
}

export default App;
