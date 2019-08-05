import React from 'react'
import CheckBoxBody from '../FormHelpers/CheckBoxBody'
import CheckBoxEquip from '../FormHelpers/CheckBoxEquip'

class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      time: 0,
      body_parts: [
      {id:1, value:"legs", isChecked: false},
      {id:2, value:"back", isChecked: false},
      {id:3, value:"arms", isChecked: false},
      {id:4, value:"shoulders", isChecked: false},
      {id:5, value:"full-body", isChecked: false},
      {id:6, value:"abs", isChecked: false}],
      equipment:[
      {id: 7, value: "dumbells", isChecked: false},
      {id: 8, value: "barbell", isChecked: false},
      {id: 9, value: "treadmill", isChecked: false},
      {id: 10, value: "pullup-bar", isChecked: false},
      {id: 11, value: "medicine-ball", isChecked: false},
      {id: 12, value: "stationary-bike", isChecked: false},
      {id: 13, value: "bands", isChecked: false}]
    }
  }
  
  updateTime = e => {
    this.setState({
      time: e.target.value
    })
  }
  updateBodyParts = event => {
    let newParts = this.state.body_parts
    newParts.forEach(part => {
      if(part.value === event.target.value)
      part.isChecked = event.target.checked
    })
    this.setState({
      equipment: newParts
    })
  }

  updateEquipment = event => {
    let newEquipment = this.state.equipment
    newEquipment.forEach(equipment => {
      if(equipment.value === event.target.value)
      equipment.isChecked = event.target.checked
    })
    this.setState({
      equipment: newEquipment
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    let parts=[]
    let bodyParts = this.state.body_parts.filter(part => part.isChecked);
    bodyParts.forEach(item => {
      parts.push(item.value)
    });
    
    console.log(parts)
    console.log(this.state.time)
    let equipment=[]
    let equipObj = this.state.equipment.filter(equip => equip.isChecked);
    equipObj.forEach(item => {
      equipment.push(item.value)
    });
    console.log(equipment)
  }
  render(){
    return(
      <>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="time">Select Your Workout Time (minutes)</label>
        <input id="time" type='number' min='5' max='60' onChange={this.updateTime}></input>
        <fieldset>
        <legend htmlFor="body_parts">Select Up to 5 Body Parts to Target</legend>
        <input type="checkbox" />
        <ul>
        {
          this.state.body_parts.map((part) => {
            return (<CheckBoxBody handleCheck={this.updateBodyParts}  {...part} />)
          })
        }
        </ul>

      </fieldset>
      <fieldset>
        <legend>Select Equipment (optional):</legend>
        <input type="checkbox" />
        <ul>
        {
          this.state.equipment.map((equipment) => {
            return (<CheckBoxEquip handleCheck={this.updateEquipment}  {...equipment} />)
          })
        }
        </ul>
        </fieldset>
        <button>Make My Workout</button>
      </form>
      </>
    )
  }
}

export default SearchForm