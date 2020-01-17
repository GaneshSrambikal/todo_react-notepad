import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo list</h1>
      <Link to="/" style={linkStyle}>
        Home |{" "}
      </Link>{" "}
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </div>
  );
}
const headerStyle = {
  background: "#000000",
  color: "#fff",
  textAlign: "center",
  fontSize: "20px",
  padding: " 5px"
};
const linkStyle = { color: "#fff", textDecoration: "none", fontSize: "16px" };
