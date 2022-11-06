import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";

// ReactDOM.render("What to show ", "Where to show")
function App() {
  var customStyle = {
    color: ""
  };
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);

  var greeting;

  if (hours < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "blue";
  } else {
    greeting = "Good Night";
    customStyle.color = "green";
  }

  ReactDOM.render(
    <div>
      <Heading />
      <List />
      {/* <h1 className="heading">hello</h1> */}
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>,
    document.getElementById("root")
  );
}
export default App;
