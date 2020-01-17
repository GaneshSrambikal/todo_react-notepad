import React from "react";
export default function About() {
  return (
    <div style={aboutStyle}>
      <h1>Todo List App</h1>
      <p>Version : v1.0.0.0</p>
    </div>
  );
}
const aboutStyle = {
  background: "#fffa61",
  textAlign: "center",
  paddingTop: "30%",
  height: "90vh"
};
