import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Results from "./results";

jest.mock("uuid", () => jest.fn(() => "1"));

describe(`results component`, () => {
  const props = {
    testObj: {},
    testItem: "test Item",
    testCheck: () => {},
    result: [{ test: "q" }, { test: "g" }, { test: [{}, {}] }]
  };

  it("renders the results given props", () => {
    const wrapper = shallow(<Results {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
