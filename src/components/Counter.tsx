import { useState } from "react";
import "../App.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "../features/counter/counterSlice";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
// import { Input } from "./ui/input";

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-x-2 space-y-6">
        <Badge data-testid="badge-vite" variant="outline">
          Vite
        </Badge>
        <Badge data-testid="badge-react" variant="default">
          React
        </Badge>
        <Badge data-testid="badge-tailwind" variant="default">
          Tailwind
        </Badge>
        <Badge data-testid="badge-ui" variant="default">
          Shadcn/ui
        </Badge>
        <Badge data-testid="badge-redux" variant="secondary">
          Redux
        </Badge>
        <Badge data-testid="badge-typescript" variant="outline">
          TypeScript
        </Badge>
        <Badge data-testid="badge-cypress" variant="outline">
          Cypress
        </Badge>
      </div>

      <div className="card p-4 mt-4 bg-white rounded-lg shadow-md space-y-6">
        <div className="flex items-center justify-center">
          <Button
            data-testid="decrement-button"
            variant="destructive"
            size="default"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>

          <span
            data-testid="count-span"
            className="text-2xl mx-4 text-black-600"
          >
            {count}
          </span>
          <Button
            data-testid="increment-button"
            variant="default"
            size="default"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Input
            data-testid="amount-input"
            type="email"
            placeholder="Email"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />

          <Button
            data-testid="add-button"
            variant="default"
            size="default"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </Button>

          <Button
            data-testid="asyn-button"
            variant="secondary"
            size="default"
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </Button>

          <Button
            data-testid="odd-button"
            variant="outline"
            size="default"
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </Button>
        </div>

        <p data-testid="footer-text" className="read-the-docs mt-4">
          Click on the Vite, React and Redux logos to learn more
        </p>
      </div>
    </div>
  );
}

export default Counter;
