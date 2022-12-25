import React from "react";


function CategoryFilter({categories, handleFilter}) {
  const renderBtn = categories.map((category) =>{
    return <button onClick={()=>handleFilter(category)} key={category}>{category}</button>
  })
  console.log(categories)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderBtn}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
