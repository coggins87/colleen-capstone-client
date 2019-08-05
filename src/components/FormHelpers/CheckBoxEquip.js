import React from 'react'

export const CheckBoxEquip = props => {
    return (
      <li>
       <input key={props.id} onClick={props.handleCheck} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBoxEquip