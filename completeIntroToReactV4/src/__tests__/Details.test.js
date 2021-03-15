import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("snapshot", () => {
  const component = create(<Details />);
  expect(component.toJSON()).toMatchSnapshot();
});

test("shows modal when toggleModal is called", () => {
  const c = create(<Details />);
  const instance = c.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toogleModal();
  expect(instance.state.showModal).toBe(false);
});
