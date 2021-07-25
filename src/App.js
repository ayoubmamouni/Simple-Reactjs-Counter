import "./styles.css";
import { useState } from "react";
export default function App() {
  const [txt, setTxt] = useState(0);
  let btnClicked = () => {
    setTxt(txt + 1);
  };
  return (
    <div className="App">
      <h1>{txt}</h1>
      <input
        type="button"
        onClick={btnClicked}
        value="Click Me to see the magic!"
      />
    </div>
  );
}
