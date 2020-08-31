import React from 'react';

const Task = (props) => {

  const { text, id, done, important } = props.task;
  let priority;

  if (important === 1) { priority = "high" }
  else if (important === 2) { priority = "medium" }
  else if (important === 3) { priority = "low" }

  return (
    <section className="tableRow">
      <div className="columnFirst">{text}</div>
      <div className="columnSecond">{priority}</div>
      <div className="columnThird">
        <input className="doneCheckbox" id="doneCheckbox" type="checkbox" checked={done} onChange={() => props.done(id)} />
        <button className="deleteButton hovered" onClick={() => props.delete(id)}>X</button>
      </div>
    </section>
  )
}

export default Task;