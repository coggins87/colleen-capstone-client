import React from 'react'

export default class Workout extends React.Component{
render(){
  return (
    <ul>
      <h3>In {this.props.prop.time} minutes complete:</h3>
      {this.props.prop.movements.map(movement=> {
        return (<li>{movement.reps} {movement.name} </li>)
      })}
    </ul>

  )}
}