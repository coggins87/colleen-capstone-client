import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "./Header";
import { ApiProvider } from "../../context/ApiContext";

describe(`Header component`, () => {
  const props = {
    testObj: {},
    history: {
      testCheck: () => {}
    }
  };

  it("renders a Header by default", () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Header given props", () => {
    const wrapper = shallow(<Header {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Header given context", () => {
    const wrapper = shallow(
      <ApiProvider>
        <Header />
      </ApiProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
