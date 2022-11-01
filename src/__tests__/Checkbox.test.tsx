import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { create, ReactTestRenderer } from "react-test-renderer";

import CheckBox, { CheckBoxProp } from "../components/Test/Checkbox";

let wrapper: ShallowWrapper<CheckBoxProp>;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  const checkbox = <CheckBox labelOn="On" labelOff="Off" />;

  wrapper = shallow(checkbox);
  snapshot = create(checkbox);
});

describe("<CheckBox />", () => {
  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it("체크 박스 클릭 이벤트", () => {
    expect(wrapper.text()).toEqual("Off");
    wrapper.find("input").simulate("change");
    expect(wrapper.text()).toEqual("On");
  });
});
