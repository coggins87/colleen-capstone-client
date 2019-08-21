import config from "../config";
import TokenService from "./token-service";

const WorkoutSearchService = {
  submitSearch(searchLength, equipment) {
    return fetch(`${config.API_ENDPOINT}/workouts`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        workout_length: searchLength,
        equipment
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getUserWorkouts(userId) {
    
    return fetch(`${config.API_ENDPOINT}/workouts/${userId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
   
  },
  saveWorkout(userId, newWorkout) {
    return fetch(`${config.API_ENDPOINT}/workouts/${userId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newWorkout)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteWorkout(userId, workoutId) {
    fetch(`${config.API_ENDPOINT}/workouts/${userId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(workoutId)
    })
      .catch(error => {
        console.error({ error });
      });
  }
};

export default WorkoutSearchService;
