import React,{ useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  // function mySetData(newData){
  //   console.log("calledMySetData")
  //   setData(newData);
  // }
  const [data, setData]= useState(TASKS);
  // const [formData, setFormData] = useState([])

  function handleClick(key){
    const newDataArray= data.filter((el)=> el.text !== key)
   //  console.log(key)
   //  console.log(newDataArray)
       setData(newDataArray) 
       }

  function handleFilter(key){
    const newDataArray=data.filter((el)=>{
      if(key==="All"){
        return true;
      } else{
        return el.category===key
      } 
     
    })
    setData(newDataArray) 
  }

  function onTaskFormSubmit(event){
    event.preventDefault();
    const submittedData={text:event.target[0].value, category:event.target[1].value}
    const submittedDataArray =[...data, submittedData]
    setData(submittedDataArray);
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter}  />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={data} data={data} handleClick={handleClick} />
    </div>
  );
}

export default App;
