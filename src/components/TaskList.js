import React from "react";
import Task from "./Task";

function TaskList({tasks, handleClick}) {

  const  renderTaskAndCat = tasks.map(el=><Task key={el.text} category={el.category} text={el.text} handleClick={handleClick}/>)




  return (
    <div className="tasks">
      {renderTaskAndCat}
      {/* <Task tasks={tasks}/> */}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
