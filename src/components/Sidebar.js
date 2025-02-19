import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav style={{ width: "200px", height: "100vh", background: "#222", color: "#fff", padding: "20px", position: "fixed" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Inicio</Link></li>
        <li><Link to="/about" style={linkStyle}>Acerca de</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

const linkStyle = { color: "white", textDecoration: "none", display: "block", padding: "10px 0" };

export default Sidebar;
