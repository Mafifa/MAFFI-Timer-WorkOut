import { useState } from "react";
import "./App.css";
import { TimerCard } from "./componets/TimerCard.tsx";
import { Header } from "./componets/Header.tsx";
import { Container } from "./componets/Container.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
