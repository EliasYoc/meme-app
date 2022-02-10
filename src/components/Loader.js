import React from "react";
import "./Loader.css";
const Loader = ({ className }) => {
  return (
    <div className={`lds-ring ${className}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
