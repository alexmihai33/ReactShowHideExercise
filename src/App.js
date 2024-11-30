import "./styles.css";
import react, { useState } from "react";

export default function App() {
  const [view, setView] = useState(false);

  function handleClick() {
    setView(!view);
    console.log(view);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Show/hide</button>
      {view ? (
        <div>
          <h1>Click the Button</h1>
          <h2>To Hide/Unhide the text</h2>
        </div>
      ) : null}
    </div>
  );
}
