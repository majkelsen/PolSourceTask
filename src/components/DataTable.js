import React, { Component } from 'react';
import '../style/DataTable.css';
import Task from './Task.js';
import TablePager from './TablePager';

// const DataTable = (props) => {
class DataTable extends Component {
  state = {
    couter: 5,
    tasks: [
      {
        id: 0,
        text: 'task 1',
        important: 1,
        done: true,
      },
      { id: 1, text: "task 2", important: 2, done: false },
      { id: 2, text: "task 3", important: 3, done: false },
      { id: 3, text: "task 4", important: 2, done: true },
      { id: 4, text: "task 5", important: 1, done: true },
      { id: 5, text: "task 6", important: 3, done: false },
      { id: 6, text: "task 7", important: 2, done: true },
      { id: 7, text: "task 8", important: 3, done: false },
      { id: 8, text: "task 9", important: 2, done: true },
      { id: 9, text: "task 10", important: 1, done: false },
      { id: 10, text: "task 11", important: 2, done: true },
      { id: 11, text: "task 12", important: 1, done: false },
    ],

    sortBy: '',
    sortDirection: 1,

    rowsPerPage: 10,
    rowsFrom: 1,
    rowsTo: 10,
  }

  deleteTask = (id) => {
    // console.log("delete elementu o id " + id);

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    // console.log("change w stanie elementu o id " + id);

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

  sizeSwitcher = (e) => {
    let size = e.target.value * 1
    if (size > this.state.tasks.length) {
      this.setState({
        rowsPerPage: size,
        rowsFrom: 1,
        rowsTo: this.state.tasks.length
      });
    } else {
      this.setState({
        rowsPerPage: size,
        rowsFrom: 1,
        rowsTo: size
      });
    }
  }



  pageBack = () => {
    let { rowsFrom, rowsTo, rowsPerPage } = this.state;
    let from, to;

    if (rowsFrom < rowsPerPage) {
      from = 1
      to = rowsPerPage
    } else {
      if ((rowsFrom - rowsPerPage) === 1) {
        from = 1
        to = rowsPerPage
      } else {
        if (rowsTo === this.state.tasks.length) {
          from = rowsFrom - rowsPerPage
          to = from + rowsPerPage
        } else {
          from = rowsFrom - rowsPerPage
          to = rowsTo - rowsPerPage
        }

      }

    }

    this.setState({
      rowsFrom: from,
      rowsTo: to,
    })
  }

  pageNext = () => {
    let { rowsFrom, rowsTo, rowsPerPage, tasks } = this.state;
    let from, to;

    if (rowsTo > tasks.length) {
      rowsTo = tasks.length
    }

    if (rowsTo === this.state.tasks.length) {
      // console.log("first")
      from = rowsFrom
      to = this.state.tasks.length
    } else if (rowsTo + rowsPerPage > tasks.length) {
      // console.log("second")
      from = rowsFrom + rowsPerPage
      to = this.state.tasks.length
    } else if (rowsTo + rowsPerPage < tasks.length) {
      // console.log("third")
      from = rowsFrom + rowsPerPage
      to = rowsTo + rowsPerPage
    }

    this.setState({
      rowsFrom: from,
      rowsTo: to,
    })
  }

  tableSort = (e) => {
    let sortType = e.target.id
    let { sortDirection, sortBy } = this.state

    if (sortType === sortBy)
      if (sortDirection === 1)
        sortDirection = -1
      else {
        sortDirection = 1
      }
    else {
      sortDirection = -1
    }

    this.setState({
      sortBy: sortType,
      sortDirection: sortDirection,
    })

  }

  render() {
    let { sortDirection, sortBy } = this.state

    let taskList = this.state.tasks;
    // console.log(this.state.sortDouble)

    taskList = taskList.sort((a, b) => {
      if (sortBy === "byText") {
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();
      } else if (sortBy === "byImportant") {
        a = a.important;
        b = b.important;
      } else if (sortBy === "byDone") {
        a = a.done;
        b = b.done;
      }


      if (sortDirection === 1) {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0
      } else {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
      }

    })

    taskList = taskList.map(task => <Task key={task.id} task={task} delete={this.deleteTask} done={this.changeTaskStatus} />)
    taskList = taskList.slice(this.state.rowsFrom - 1, this.state.rowsTo)


    return (
      <div className='dataTable' >
        <section className="tableRow first">
          <div className="columnFirst" onClick={this.tableSort} id="byText">Task name</div>
          <div className="columnSecond" onClick={this.tableSort} id="byImportant">Priority</div>
          <div className="columnThird" onClick={this.tableSort} id="byDone">Done</div>
        </section>
        {taskList}
        <TablePager state={this.state} sizeSwitcher={this.sizeSwitcher} pageBack={this.pageBack} pageNext={this.pageNext} />
      </div>
    )
  }
}

export default DataTable;