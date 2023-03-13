import { React, useState } from "react";

function EditRatingItem({ category, onChangeInput }) {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    onChangeInput({ [e.target.name]: e.target.value });
    setValue(e.target.value);
  };


  return (
    <div>
      <label htmlFor={category[0]}>{category[0]}</label>
      <input
        type="range"
        id={category[0]}
        name={category[0]}
        min="0"
        max="5"
        step="1"
        list={category[0]+"datalist"}
        value={value}
        // defaultValue={value}
        onChange={handleChange}

      />

      <datalist id={category[0]+"datalist"}>
        <option value="0" label="0"></option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5" label="5"></option>
      </datalist>
    </div>
  );
}

export default EditRatingItem;
