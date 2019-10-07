import React from "react";
import { shallow } from "enzyme";

import Home from "./Home";

it("contains home layout", () => {
  const wrapper = shallow(<Home />);
  const layouts = wrapper.find("HomeLayoutController");
  expect(layouts.length).toBe(1);
});
