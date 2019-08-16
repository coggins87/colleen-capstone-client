import React from "react";

export const CheckBoxEquip = props => {
  return (
    <>
      <input
        onChange={props.handleCheck}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </>
  );
};

export default CheckBoxEquip;
