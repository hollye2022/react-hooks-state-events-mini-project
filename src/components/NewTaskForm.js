import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const newCategories = categories.splice(1);

   const renderCategory = newCategories.map(el=><option key={el}>{el}</option>)

  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {renderCategory}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
