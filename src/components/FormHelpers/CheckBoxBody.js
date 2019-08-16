import React from "react";
import "./check-box.css";

export const CheckBoxBody = props => {
  return (
    <li className="checkbox_list">
      <input
        key={props.id}
        onChange={props.handleCheck}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};

export default CheckBoxBody;
