import React from 'react'
//import CheckBoxBody from '../FormHelpers/CheckBoxBody'
import CheckBoxEquip from '../FormHelpers/CheckBoxEquip'
import Result from '../../components/Results/results'
import WorkoutSearchService from '../../services/workout-search-service'
class SearchForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      error: null,
      time: 0,
      equipment:[
      {id: 7, value: "dumbell", isChecked: false},
      {id: 8, value: "barbell", isChecked: false},
      {id: 9, value: "treadmill", isChecked: false},
      {id: 10, value: "pullup-bar", isChecked: false},
      {id: 11, value: "medicine-ball", isChecked: false},
      {id: 12, value: "stationary-bike", isChecked: false},
      {id: 13, value: "bands", isChecked: false}],
      result: [],
    }
  }
  
  updateTime = e => {
    console.log(' SET STATE ')

    this.setState({
      time: e.target.value
    })
  }
/*   updateBodyParts = event => {
    let newParts = this.state.body_parts
    newParts.forEach(part => {
      if(part.value === event.target.value)
      part.isChecked = event.target.checked
    })
    this.setState({
      body_parts: newParts
    })
  }
 */
  updateEquipment = event => {
    let newEquipment = this.state.equipment
    newEquipment.forEach(equipment => {
      if(equipment.value === event.target.value)
      equipment.isChecked = event.target.checked
    })
    console.log(' SET STATE ')

    this.setState({
      
      equipment: newEquipment
    })
  }

  saveWorkout = e => {
    e.preventDefault()
    let time = this.state.time
    console.log(time)
    let userId = this.props.req.params.userId
    console.log(userId)
  }

  handleSubmit = e => {
    e.preventDefault()
   /*  let parts=[]
    let bodyParts = this.state.body_parts.filter(part => part.isChecked);
    bodyParts.forEach(item => {
      parts.push(item.value)
    }); */
    
    let time = this.state.time
    let equipment=[]
    let equipObj = this.state.equipment.filter(equip => equip.isChecked);
    equipObj.forEach(item => {
      equipment.push(item.value)
    });
    let equipmentString = equipment.join(" ")

    WorkoutSearchService.submitSearch(time, equipmentString)
    .then(res=> {
      console.log('RESULTS SET STATE')
      this.setState({result: res})
      })
  
  }
  render(){
    
    return (    <>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="time">Select Your Workout Time Between 5 and 60 Minutes(required):</label>
        <input id="time" type='number' min='5' max='60' onChange={this.updateTime} required></input>
       {/*  <fieldset>
        <legend htmlFor="body_parts">Select Up to 5 Body Parts to Target (optional):</legend>
        <ul>
        {
          this.state.body_parts.map((part) => {
            return (<CheckBoxBody handleCheck={this.updateBodyParts}  {...part} />)
          })
        }
        </ul>

      </fieldset> */}
      <fieldset>
        <legend>Select Equipment (optional):</legend>
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
      {this.state.result.length > 0 ?  <Result result={this.state.result} time={this.state.time} saveWorkout={this.saveWorkout} /> : null}

      </>

    )
  }
}


export default SearchForm