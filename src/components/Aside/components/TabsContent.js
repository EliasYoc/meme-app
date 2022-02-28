import React from "react";

const TabsContent = ({ positionTab, tabsInfo, refTabsContent }) => {
  return (
    <div
      ref={refTabsContent}
      // style={{
      //   transform: `translateX(-${positionTab * 100}%)`,
      // }}
      className="tabInfo-wrapper"
    >
      {tabsInfo.map(({ sectionComponent: Section }, i) => (
        <section
          key={i}
          className={`tabInfo-wrapper__content general-padding ${
            positionTab === i && "active"
          }`}
        >
          <Section />
        </section>
      ))}
    </div>
  );
};

export default TabsContent;
