import React from "react";
//import CheckBoxBody from '../FormHelpers/CheckBoxBody'
import CheckBoxEquip from "../FormHelpers/CheckBoxEquip";
import Result from "../../components/Results/results";
import WorkoutSearchService from "../../services/workout-search-service";
import TokenService from "../../services/token-service";
import uuid from "uuid";
import "./SearchForm.css";
import 'animate.css'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isHidden: false,
      error: null,
      time: 0,
      equipment: [
        { id: 7, value: "dumbell", isChecked: false },
        { id: 8, value: "barbell", isChecked: false },
        { id: 9, value: "treadmill", isChecked: false },
        { id: 10, value: "pullup-bar", isChecked: false },
        { id: 11, value: "medicine-ball", isChecked: false },
        { id: 12, value: "stationary-bike", isChecked: false },
        { id: 13, value: "bands", isChecked: false }
      ],
      result: []
    };
  }

  updateTime = e => {
    this.setState({
      time: e.target.value
    });
  };
toggleFormView = e => {
  e.preventDefault()
  this.setState({
    isHidden: !this.state.isHidden
  })
}
  updateEquipment = event => {
    let newEquipment = this.state.equipment;
    newEquipment.forEach(equipment => {
      if (equipment.value === event.target.value)
        equipment.isChecked = event.target.checked;
    });

    this.setState({
      equipment: newEquipment
    });
  };

  saveWorkout = e => {
    e.preventDefault();
    let workout_length = this.state.time;

    let token = TokenService.readJwtToken();
    let user_id = token.user_id;
    let movements = this.state.result;
    let workoutToSave = { user_id, workout_length, movements };
    WorkoutSearchService.saveWorkout(user_id, workoutToSave)
      .then(() => {
        this.setState({ isHidden: false, result: [] });
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    let time = this.state.time;
    let equipment = [];
    let equipObj = this.state.equipment.filter(equip => equip.isChecked);
    equipObj.forEach(item => {
      equipment.push(item.value);
    });
    let equipmentString = equipment.join(" ");
    this.setState({ error: null });
    WorkoutSearchService.submitSearch(time, equipmentString)
      .then(res => {
        
        this.setState({ result: res, isHidden: true });
      })
      .then(() => {
        window.scrollTo(0, this.myRef.current.offsetTop);
      })
      .catch(res => {
        if (res.message) {
          this.setState({ error: "Something went wrong! Try again later." });
        } else {
          this.setState({ error: res.error });
        }
      });
  };
  render() {
    const error = this.state.error;
    return (
      <>
        <div className="search_form_inputs">
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <button id="toggle_form" onClick={e=>this.toggleFormView(e)}>{this.state.isHidden ? '+' : '-'}</button>
         {!this.state.isHidden ? <form className="_form search_form animated fadeIn" onSubmit={this.handleSubmit}>
            <label className="time_label" htmlFor="time">
              Select Workout Time 5-60 Minutes (required):{" "}
            </label>
            <input
              className="time_input"
              id="time"
              type="number"
              min="5"
              max="60"
              onChange={this.updateTime}
              required
            />
            <div className="equiment_select">
              <fieldset className="equipment_field">
                <legend>Select Equipment (optional):</legend>
                <ul className="check_box_list">
                  {this.state.equipment.map(equipment => {
                    return (
                      <li key={uuid()}>
                        <CheckBoxEquip
                          id={this.state.equipment.id}
                          handleCheck={this.updateEquipment}
                          {...equipment}
                        />
                      </li>
                    );
                  })}
                </ul>
              </fieldset>
            </div>
            <button className="form_button">Make My Workout</button>
          </form> : <></>} 
        </div>

        {this.state.result.length > 0 ? (
          <div ref={this.myRef}>
            <Result
              result={this.state.result}
              time={this.state.time}
              saveWorkout={this.saveWorkout}
            />
          </div>
        ) : null}
      </>
    );
  }
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
}

export default SearchForm;
