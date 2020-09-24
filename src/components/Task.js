import React from 'react';

const Task = (props) => {

  const { text, id, done, important } = props.task;
  let priority;

  if (important === 1) { priority = "high" }
  else if (important === 2) { priority = "medium" }
  else if (important === 3) { priority = "low" }

  return (
    <section className="tableRow">

      {/* desktop version of row */}
      <div className="columnFirst desktop">{text}</div>
      <div className="columnSecond desktop">{priority}</div>
      <div className="columnThird desktop">
        <input className="doneCheckbox" id="doneCheckbox" type="checkbox" checked={done} onChange={() => props.done(id)} />
        <button className="deleteButton hovered" onClick={() => props.delete(id)}>X</button>
      </div>

      {/* mobile version of row */}
      <div className="columnFirst mobile">
        <p>Task name:</p>
        <p className="taskData">{text}</p>
      </div>
      <div className="columnSecond mobile">
        <p>Priority:</p>
        <p className="taskData">{priority}</p>
      </div>
      <div className="columnThird mobile">
        <label htmlFor="doneCheckbox">Done: </label>
        <input className="doneCheckbox" id="doneCheckbox" type="checkbox" checked={done} onChange={() => props.done(id)} />
      </div>
      <button className="deleteButton mobile" onClick={() => props.delete(id)}>X</button>


    </section>
  )
}

export default Task;