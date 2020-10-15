import React from "react";
import { shallow } from "enzyme";
import LoginPage from "../../components/LoginPage";

test("Should render Login Page component", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});
