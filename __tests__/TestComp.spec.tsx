import * as React from "react";
import { shallow } from "enzyme";
import TestComp from "../components/TestComponents/TestComp";

describe("TestComp", () => {
  it("should render without throwing an error", function () {
    const wrap = shallow(<TestComp />);
    expect(wrap.find("div").text()).toBe("Something");
  });
});
