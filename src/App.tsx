import viteLogo from "../public/vite.svg";
import reactLogo from "./assets/react.svg";
import reduxLogo from "./assets/Reduxlogo.svg";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <h1>hello world</h1>
      <div className="flex justify-center items-center">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className="mr-4"
        >
          <img src={viteLogo} className="logo w-32 h-32" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="blank"
          rel="noreferrer"
          className="ml-4"
        >
          <img src={reactLogo} className="logo w-32 h-32" alt="React logo" />
        </a>
        <a
          href="https://redux-toolkit.js.org"
          target="_blank"
          rel="noreferrer"
          className="mr-4"
        >
          <img src={reduxLogo} className="logo w-32 h-32" alt="Redux logo" />
        </a>
      </div>
      <Counter />
    </>
  );
}

export default App;
