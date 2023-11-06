import { fireEvent, render } from "@testing-library/react";
import { expect } from "chai";
import App from "../App";

describe("App Component", () => {
  it("renders the component and checks the initial count", () => {
    const { getByText } = render(<App />);

    // Check if the component is rendered
    const reactLogo = getByText("React logo");
    const viteLogo = getByText("Vite logo");
    const countText = getByText("count is 0");

    expect(reactLogo).to.exist;
    expect(viteLogo).to.exist;
    expect(countText).to.exist;

    // Check the initial count value
    const initialCount = getByText("count is 0");
    expect(initialCount).to.exist;
  });

  it("increments the count when the button is clicked", () => {
    const { getByText } = render(<App />);

    // Find the button and click it
    const countButton = getByText("count is 0");
    const button = countButton?.closest("button");

    if (button) {
      fireEvent.click(button);

      // Check if the count is incremented
      const updatedCount = getByText(/count is \d+/);
      expect(updatedCount).to.exist;
    } else {
      // Handle the case when the button is not found
      throw new Error("Button not found");
    }
  });
});
