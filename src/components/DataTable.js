import React from 'react';
import '../style/DataTable.css';
import Task from './Task.js';

const DataTable = (props) => {
  let taskList = props.tasks;
  taskList = taskList.map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done} />)



  return (
    <div className='dataTable'>
      <section className="tableRow first">
        <div className="columnFirst">Task name</div>
        <div className="columnSecond">Priority</div>
        <div className="columnThird">Done</div>
      </section>
      {taskList}
    </div>
  )
}

export default DataTable;