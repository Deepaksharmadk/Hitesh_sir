import { useState } from "react";

import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card address="deepak" content="i love you" />
      <Card address="sulabh" content="i love you to" />
    </>
  );
}

export default App;
