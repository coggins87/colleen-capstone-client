import React from 'react'

class SearchForm extends React.Component {
  state = {
    error: null,
    time: 0,
    body_parts: [],
    equipment: null,
  }
  updateTime = e => {
    this.setState({
      time: e.target.value
    })
  }
  updateBodyParts = e => {
    this.setState({
      body_parts: {...e.target.value}
    })
  }

  updateEquipment = e => {
    this.setState({
      equipment: {...e.target.value}
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('searched')
  }
  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="time">Select Your Workout Time (minutes)</label>
        <input id="time" type='number' min='5' max='60' onChange={this.updateTime}></input>
        <fieldset>
        <legend htmlFor="body_parts">Select Up to 5 Body Parts to Target</legend>

    <input type="checkbox" id="legs" name="legs" value="legs"/>
    <label for="legs" onChange={this.updateBodyParts}>Legs</label>
  
    <input type="checkbox" id="back" name="back" value="back"/>
    <label for="back" onChange={this.updateBodyParts}>Back</label>


    <input type="checkbox" id="arms" name="arms" value="arms"/>
    <label for="back" onChange={this.updateBodyParts}>Arms</label>


    <input type="checkbox" id="shoulders" name="shoulders" value="shoulders"/>
    <label for="shoulders" onChange={this.updateBodyParts}>Shoulders</label>


    <input type="checkbox" id="abs" name="abs" value="abs"/>
    <label for="abs" onChange={this.updateBodyParts}>Abs</label>

    
    <input type="checkbox" id="full" name="full" value="full-body"/>
    <label for="full-body" onChange={this.updateBodyParts}>Full Body</label>
      </fieldset>
      <fieldset>
        <legend>Select Equipment (optional):</legend>
        <input type="checkbox" id="dumbells" name="dumbells" value="dumbells"/>
    <label for="dumbells" onChange={this.updateEquipment}>Dumbells</label>
    <input type="checkbox" id="bands" name="bands" value="bands"/>
    <label for="bands" onChange={this.updateEquipment}>Exercise Bands</label>
    <input type="checkbox" id="barbell" name="barbell" value="barbell"/>
    <label for="barbell" onChange={this.updateEquipment}>Barbell</label>
    <input type="checkbox" id="pullup-bar" name="pullup-bar" value="pullup-bar"/>
    <label for="pullup-bar" onChange={this.updateEquipment}>Pull Up Bar</label>
    <input type="checkbox" id="medicine-ball" name="medicine-ball" value="medicine-ball"/>
    <label for="medicine-ball" onChange={this.updateEquipment}>Medicine Ball</label>
    <input type="checkbox" id="treadmill" name="treadmill" value="treadmill"/>
    <label for="treadmill" onChange={this.updateEquipment}>Treadmill</label>
        </fieldset>
        <button>Make My Workout</button>
      </form>
      </>
    )
  }
}

export default SearchForm