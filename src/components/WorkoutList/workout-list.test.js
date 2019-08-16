import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import WorkoutList from "./workout-list";

jest.mock("uuid", () => jest.fn(() => "1"));
describe(`WorkoutList component`, () => {
  const props = {
    workouts: [
      {
        workout_length: 1,
        movements: [
          { movement_name: "name" },
          { reps: "reps" },
          { equipment: "equip" }
        ]
      }
    ]
  };

  it("renders the Workout given props", () => {
    const wrapper = shallow(<WorkoutList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
