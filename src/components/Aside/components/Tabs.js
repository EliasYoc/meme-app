import React from "react";
import "./Tabs.css";
const Tabs = ({ positionTab, setPositionTab, tabs, onTransitionEnd }) => {
  // const tabs = ["Texto", "Memes", "MAs", "info", "valiosa", "otro", "taba"];
  return (
    <div className="tabs general-padding" onTransitionEnd={onTransitionEnd}>
      {tabs.map((tab, i) => (
        <span
          className={` ${positionTab === i ? "tabs__tab active" : "tabs__tab"}`}
          key={i}
          onClick={() => setPositionTab(i)}
        >
          {tab.title}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
