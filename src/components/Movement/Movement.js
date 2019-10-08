import React from 'react'
import uuid from "uuid";

export default class Movement extends React.Component {
state = {
  visible: false
}
  handleToggleVideo = e => {
    e.preventDefault()
    this.setState({
      visible:!this.state.visible
    })
  }
render(){
const movement = this.props.movement

  return (
  <li className="saved_workout_item" key={uuid()}>
  {movement.reps} {movement.movement_name}{" "}
  {movement.equipment ? `with ${movement.equipment}` : ""}
  <button className="toggle_video" onClick={(e) => this.handleToggleVideo(e)}>{this.state.visible ? 'Hide Video' : 'Show Video'}</button>
  {this.state.visible && (
    <video id={this.key} className="video" autoPlay loop>
      <source src={movement.video} type="video/mp4" />
    </video>
  )}
</li>
  )
}

}