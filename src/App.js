import React from "react";
import Accordion from "./components/Accordion";
import items from "./data";

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
