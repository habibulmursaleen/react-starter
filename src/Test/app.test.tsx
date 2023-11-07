import { render } from "@testing-library/react";
import { expect } from "chai";
import App from "../App";

describe("App Component", () => {
  it("renders the App title", () => {
    const { getByTestId } = render(<App />);

    // Check if the <h1> element with the test ID "app-title" is rendered
    const appTitle = getByTestId("app-title");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(appTitle).to.exist;
  });
});
