import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

import { shallow } from "enzyme";

it("contains home layout", () => {
  const wrapper = shallow(<Home />);
  const layouts = wrapper.find("HomeLayoutController");
  expect(layouts.length).toBe(1);
});
