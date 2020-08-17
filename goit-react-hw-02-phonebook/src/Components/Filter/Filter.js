import React from "react";

const Filter = ({ inputHeandlerFilter }) => {
  return (
    <form>
      <label>
        <b>Find contacts by name</b>
        <br />
        <input type="text" name="name" placeholder="Name" onChange={(e) => inputHeandlerFilter(e)}></input>
      </label>
    </form>
  );
};

export default Filter;
