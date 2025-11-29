import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // npm install react-icons

const Back = () => {
  return (
    <Link
      to="/"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "#333",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        textDecoration: "none",
        zIndex: 9999,
      }}
    >
      <FaHome size={18} />
      Home
    </Link>
  );
};

export default Back
