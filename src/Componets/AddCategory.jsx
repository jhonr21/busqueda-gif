import React, { useState } from "react";

const AddCategory = ({ onNewCategories }) => {
  const [intupValue, setIntupValue] = useState("");

  const onInputChange = ({ target }) => {
    //  setIntupValue('hola mundo')
    //console.log(target.value);
    setIntupValue(target.value);
  };

  const onSumit = (event) => {
    event.preventDefault();

    if (intupValue.trim().length <= 1) return;
    //setCategories((categories) => [intupValue, ...categories]);
    onNewCategories(intupValue.trim())
    setIntupValue('');
  };

  return (
    <form onSubmit={onSumit}>
      <input
        type="text"
        placeholder="Buscar gits"
        value={intupValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
