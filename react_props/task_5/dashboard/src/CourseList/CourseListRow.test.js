import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it("renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header Cell" />
    );

    const thElement = wrapper.find("th");
    expect(thElement).toHaveLength(1);
    expect(thElement.prop("colSpan")).toBe("2");
  });

  it("renders correctly two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data Cell 1"
        textSecondCell="Data Cell 2"
      />
    );

    const trElement = wrapper.find("tr");
    const tdElements = wrapper.find("td");

    expect(trElement).toHaveLength(1);
    expect(tdElements).toHaveLength(2);
  });
});
