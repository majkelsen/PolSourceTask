import React, { Component } from 'react';
import '../style/AddForm.css';

class AddForm extends Component {
  state = {
    taskName: '',
    taskValue: 3,

    importantValues: [{ id: 0, value: 1, text: 'high' }, { id: 1, value: 2, text: 'medium' }, { id: 2, value: 3, text: 'low' }],

    validator: false,
    resultMessage: ""
  }

  handleTaskName = (e) => {
    this.setState({
      taskName: e.target.value,
    })
  }

  changeTaskValue = (e) => {
    this.setState({
      taskValue: e.target.value,
    })

  }

  formValidation() {
    let { taskName } = this.state

    let taskShort = false
    let taskLong = false
    let taskIncorrect = false
    let message = ''
    let correct = false

    //1st check
    if (taskName.length > 8) {
      taskShort = true;
      //2nd check
      if (taskName.length < 40) {
        taskLong = true;
        //3rd check
        if (taskName.indexOf('.') === -1) {
          taskIncorrect = true;
        } else {
          message = "Task cannot contain dots!"
        }
      } else {
        message = "Task too long - max 40 chars!"
      }
    } else {
      message = "Task too short - min 8 chars!"
    }

    //if all true, then success
    if (taskShort && taskLong && taskIncorrect) {
      correct = true
      message = "Task added successfully!"
    }

    //sending results
    this.setState({
      validator: correct,
      resultMessage: message
    })

    return correct
  }

  handleAddTask = () => {
    //validation set
    let validationCheck = this.formValidation()
    if (validationCheck) {
      let { taskName, taskValue } = this.state

      //calculating biggest ID in database, and set +1 to new task
      let calculateID = this.props.tasks.map((item) => item.id)
      calculateID = calculateID.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0
      })
      calculateID = calculateID.slice(0, 1)
      calculateID = (calculateID * 1) + 1

      //creating new object to add
      let newTask = { id: calculateID, text: taskName, important: taskValue * 1, done: false }
      const add = this.props.add(newTask)
      if (add) {
        this.setState({
          taskName: '',
          taskValue: 3,
        })
      }

    }

  }

  render() {
    let resultMessageClass = 'checkMessage'
    if (this.state.validator) {
      resultMessageClass = 'checkMessage success'
    } else {
      resultMessageClass = 'checkMessage fail'
    }

    return (
      <div className='addForm'>
        <div className="addFormTitle">Add New Task:</div>

        <div className="ingredients">
          <input type="text" placeholder="write task name..." value={this.state.taskName} onChange={this.handleTaskName} />

          <select className="importantSelector" name="importantSelector" value={this.state.taskValue} onChange={this.changeTaskValue} >
            {this.state.importantValues.map((item) =>
              <option key={item.id} value={item.value}>{item.text}</option>
            )}
          </select>

          <button onClick={this.handleAddTask}>Add Task</button>
        </div>

        <div className={resultMessageClass}>{this.state.resultMessage}</div>
      </div>
    )

  }
}

export default AddForm;






