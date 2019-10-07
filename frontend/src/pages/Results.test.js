import React from "react";
import ReactDOM from "react-dom";
import Results from "./Results";

import { shallow } from "enzyme";

it("contains results layout", () => {
  const wrapper = shallow(<Results />);
  const layouts = wrapper.find("ResultsLayoutController");
  expect(layouts.length).toBe(1);
});
