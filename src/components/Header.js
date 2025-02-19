import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const titles = {
    "/": "Inicio",
    "/about": "Acerca de",
    "/contact": "Contacto"
  };

  return (
    <header style={{ background: "#333", color: "#fff", padding: "15px", textAlign: "center" }}>
      <h1>{titles[location.pathname] || "Página"}</h1>
    </header>
  );
}

export default Header;
