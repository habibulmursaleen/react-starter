import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Counter from "../components/Counter";

describe("Counter component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
  });

  it("renders correctly", () => {
    // Check if the counter is rendered
    expect(screen.getByTestId("count-span")).toBeInTheDocument();
    // Check if the buttons are rendered
    expect(screen.getByTestId("decrement-button")).toBeInTheDocument();
    expect(screen.getByTestId("increment-button")).toBeInTheDocument();
    // Check if the input and buttons for adding amount are rendered
    expect(screen.getByTestId("amount-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-button")).toBeInTheDocument();
    expect(screen.getByTestId("asyn-button")).toBeInTheDocument();
    expect(screen.getByTestId("odd-button")).toBeInTheDocument();
    // Check if the badges are rendered
    expect(screen.getAllByTestId(/^badge-/)).toBeTruthy();
    // Check if the footer text is rendered
    expect(screen.getByTestId("footer-text")).toBeInTheDocument();
  });

  it("increments count when the increment button is clicked", () => {
    const incrementButton = screen.getByTestId("increment-button");
    const countSpan = screen.getByTestId("count-span");

    fireEvent.click(incrementButton);

    expect(countSpan).toHaveTextContent("1");
  });

  it("decrements count when the decrement button is clicked", () => {
    const decrementButton = screen.getByTestId("decrement-button");
    const countSpan = screen.getByTestId("count-span");

    fireEvent.click(decrementButton);

    expect(countSpan).toHaveTextContent("0");
  });

  it("updates the input value correctly", () => {
    const input = screen.getByTestId("amount-input");

    fireEvent.change(input, { target: { value: "5" } });

    expect(input).toHaveValue("5");
  });

  it("adds the specified amount when the add button is clicked", () => {
    const addButton = screen.getByTestId("add-button");
    const countSpan = screen.getByTestId("count-span");
    const input = screen.getByTestId("amount-input");

    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(addButton);

    expect(countSpan).toHaveTextContent("5");
  });
});
