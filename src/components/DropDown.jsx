import {useState} from "react";

const DropDown = () => {

  const showDropdown = () => {
    const listElement = document.querySelector('#list').classList.toggle('active');
  };

  return (
    <div>
      <p id="dropdown" onClick={showDropdown}>My List</p>

      <ul id="list" >

        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
};

export default DropDown;
