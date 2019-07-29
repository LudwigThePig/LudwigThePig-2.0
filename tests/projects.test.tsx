import * as React from "react";
import { shallow } from "enzyme";

import Projects from "../client/pages/projects";

it("renders the heading", () => {
    const result = shallow(<Projects />).contains(<h1>Projects</h1>);
    expect(result).toBeTruthy();
});