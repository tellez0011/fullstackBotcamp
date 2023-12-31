import React from "react";
import { createRoot } from "react-dom/client";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

const App = () => {

  return [
    <h1>Greetings</h1>,
      <Hello name="Maya" age={26 + 10} />,
      <Footer />
  ]
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
