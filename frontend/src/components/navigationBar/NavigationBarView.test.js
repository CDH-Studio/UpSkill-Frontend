import React from "react";
import NavigationBarView from "./NavigationBarView";

import { shallow } from "enzyme";

it("home layout view contains critical components", () => {
  const wrapper = shallow(<NavigationBarView />);

  const logoutButton = wrapper.find("#logoutButton");
  expect(logoutButton.length).toBe(1);
});
