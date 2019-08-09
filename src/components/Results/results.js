import React from 'react'
import TokenService from '../../services/token-service'

class Result extends React.Component{


  renderSaveButton = () =>{
    return (
      <button onClick={this.props.saveWorkout}>Save Workout</button>
    )
  }
  render (){
   
    return (<>
      <ul>
     <h3>In {this.props.time ? this.props.time : ''} minutes complete:</h3>
      {this.props.result.length > 0 ? this.props.result.map(movement=> {
        return (<li key={movement.id}>
          {movement.reps} {movement.movement_name} {movement.equipment ? `with ${movement.equipment}` : ''}
          </li>)
      }): '' }
    </ul>
    {TokenService.hasAuthToken() ? this.renderSaveButton(): ''}
    </>
    );
     
  }
}

export default Result