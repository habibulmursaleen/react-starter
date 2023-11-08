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

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h1
        className="text-3xl font-bold mt-8 text-violet-300"
        data-testid="app-title"
      >
        Vite + React + Redux + TypeScript + Tailwind
      </h1>
      <div className="card p-4 mt-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <button
            type="button"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 rounded bg-violet-500 text-white hover:bg-violet-600"
          >
            -
          </button>
          <span className="text-2xl mx-4 text-gray-600">{count}</span>
          <button
            type="button"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            className="px-4 py-2 rounded bg-violet-500 text-white hover:bg-violet-600"
          >
            +
          </button>
        </div>

        <div className="mt-4">
          <input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="px-4 py-2 rounded bg-violet-500 border border-violet-400"
          />
          <button
            type="button"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
            className="ml-2 px-4 py-2 rounded bg-violet-500 text-white hover:bg-violet-600"
          >
            Add Amount
          </button>
          <button
            type="button"
            onClick={() => dispatch(incrementAsync(incrementValue))}
            className="ml-2 px-4 py-2 rounded bg-violet-500 text-white hover:bg-violet-600"
          >
            Add Async
          </button>
          <button
            type="button"
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
            className="ml-2 px-4 py-2 rounded bg-violet-500 text-white hover:bg-violet-600"
          >
            Add If Odd
          </button>
        </div>
        <p className="text-gray-500 mt-4">
          Edit <code className="font-mono">src/App.tsx</code> and save to test
        </p>
      </div>
      <p className="read-the-docs mt-4">
        Click on the Vite, React and Redux logos to learn more
      </p>
    </div>
  );
}

export default Counter;
