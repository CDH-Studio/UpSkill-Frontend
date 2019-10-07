import React from "react";
import ReactDOM from "react-dom";
import Advanced from "./Advanced";

import { shallow } from "enzyme";

it("contains home layout", () => {
  const wrapper = shallow(<Advanced />);
  const layouts = wrapper.find("HomeLayoutController");
  expect(layouts.length).toBe(1);
});
