import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button title="Increment +" color="blue" onClick={handleIncrement} />
        <Button title="Decrement -" color="red" onClick={handleDecrement} />
      </div>
    </div>
  );
}

export default App;
