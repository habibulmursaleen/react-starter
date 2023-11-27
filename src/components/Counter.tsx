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
import { Input } from "./ui/input";

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-x-2 space-y-6">
        <Badge variant="outline">Vite</Badge>
        <Badge variant="default">React</Badge>
        <Badge variant="default">Tailwind</Badge>
        <Badge variant="default">Shadcn/ui</Badge>
        <Badge variant="secondary">Redux</Badge>
        <Badge variant="outline">TypeScript</Badge>
      </div>

      <div className="card p-4 mt-4 bg-white rounded-lg shadow-md space-y-6">
        <div className="flex items-center justify-center">
          <Button
            variant="destructive"
            size="default"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>

          <span className="text-2xl mx-4 text-gray-600">{count}</span>
          <Button
            variant="default"
            size="default"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Input
            type="email"
            placeholder="Email"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />

          <Button
            variant="default"
            size="default"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </Button>

          <Button
            variant="secondary"
            size="default"
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </Button>

          <Button
            variant="outline"
            size="default"
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </Button>
        </div>

        <p className="read-the-docs mt-4">
          Click on the Vite, React and Redux logos to learn more
        </p>
      </div>
    </div>
  );
}

export default Counter;
