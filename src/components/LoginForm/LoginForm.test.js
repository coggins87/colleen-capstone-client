import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginForm from "./LoginForm";
import { ApiProvider } from "../../context/ApiContext";

describe(`LoginForm component`, () => {
  const props = {
    testCheck: () => {}
  };

  it("renders a LoginForm by default", () => {
    const wrapper = shallow(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the LoginForm given props", () => {
    const wrapper = shallow(<LoginForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the LoginForm given context", () => {
    const wrapper = shallow(
      <ApiProvider>
        <LoginForm />
      </ApiProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
