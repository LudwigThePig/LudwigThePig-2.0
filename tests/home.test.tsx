import * as React from "react";
import { shallow } from "enzyme";

import Home from "../client/pages/about";

it("renders the heading", () => {
    const result = shallow(<Home />).contains(<h1>About</h1>);
    expect(result).toBeTruthy();
});