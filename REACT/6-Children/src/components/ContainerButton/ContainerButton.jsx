import React from "react";
import "./containerButton.css";

export const ContainerButton = ({ children, texto }) => {
  return (
    <div className="container">
      <p>{texto}</p>
      {children}
    </div>
  );
};
