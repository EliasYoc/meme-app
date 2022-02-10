import React from "react";

const ToolbarIcon = ({ iconComponent: Icon, onClick }) => {
  return (
    <span className="toolbar-icon" onClick={onClick}>
      <Icon />
    </span>
  );
};

export default ToolbarIcon;
