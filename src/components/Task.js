import React from "react";

function Task({ category, text, handleClick}) {

//  const renderCategory = tasks.map(el=><p>{el.category}</p>
//  )

//  const renderText=tasks.map(el=><p>{el.text}</p>)


 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => handleClick(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
