import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UserMainPage from "./UserMainPage";

describe("UserMainPage component", () => {
  const props = {
    match: { params: {} }
  };

 
  it("renders the UserMainPage component given props", () => {
    const wrapper = shallow(<UserMainPage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
