import React, { useState } from "react";
import AddCategory from "./Componets/AddCategory";
import { GifGrid } from "./Componets/GifGrid";

const GitExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategories) => {
    if (categories.includes(newCategories)) return;

    // categories.push(newCategories)
    setCategories([newCategories, ...categories]);
    //setCategories(cat => [...cat,'Valorant'] );

  };

  return (
    <>
   
      <h1 className="titulo">Busca tu Git</h1>

      <AddCategory
        currentCategories={categories}
        onNewCategories={(event) => onAddCategory(event)}
      />
    

  
        {

        categories.map((categories) => (
          <GifGrid key={categories} category={categories} />
        ))
       
       }

   
    </>
  );
};

export default GitExpertApp;
