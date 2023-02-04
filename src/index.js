import React from "react";
import ReactDOM from "react-dom";
const fName = "Zuber";
const lName = "Khan";
const fullName = lName ? `${fName} ${lName}` : fName;
const currentYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {fullName}.</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);
