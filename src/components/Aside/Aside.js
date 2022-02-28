import { useDispatch, useSelector } from "react-redux";
import { CgClose } from "react-icons/cg";
import { selectSrcImage } from "../../features/textSlice";
import { openCloseAside, selectShowAside } from "../../features/buttonsSlice";
import "./Aside.css";
import EditTitles from "./components/EditTitles";
import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import AddMeme from "./components/AddMeme";
import { useRef } from "react";
import { useCallback } from "react";
import TabsContent from "./components/TabsContent";
const Aside = () => {
  const dispatch = useDispatch();
  const [positionTab, setPositionTab] = useState(0);
  const srcImg = useSelector(selectSrcImage);
  const isAsideOpen = useSelector(selectShowAside);
  const refTabsContent = useRef();
  const handleSetAside = useCallback(() => {
    const $tabsSection = document.querySelector(
      ".tabInfo-wrapper__content.active"
    );
    // console.log($tabsSection.clientWidth);
    // console.log($tabsSection.clientHeight);
    const $tabsContent = refTabsContent.current;
    $tabsContent.style.height = `${$tabsSection.clientHeight}px`;
    $tabsContent.scrollLeft = positionTab * $tabsSection.clientWidth;
  }, [positionTab]);
  useEffect(() => {
    if (refTabsContent.current) {
      window.addEventListener("resize", handleSetAside);
      handleSetAside();
    }
    return () => window.removeEventListener("resize", handleSetAside);
  }, [handleSetAside]);
  const handleCloseAside = () => dispatch(openCloseAside());
  const tabsInfo = [
    { title: "Texto", sectionComponent: EditTitles },
    { title: "Memes", sectionComponent: AddMeme },
    // { title: "Memes", sectionComponent: () => <div>Hi</div> },
    // { title: "Memes", sectionComponent: () => <div>Hi</div> },
    // { title: "Memes", sectionComponent: () => <div>Hi</div> },
  ];
  return (
    <>
      {srcImg && (
        <aside
          onTransitionEnd={handleSetAside}
          className={`aside animate__animated animate__fadeInUpBig ${
            !isAsideOpen && "hide"
          }`}
        >
          <span
            className="aside__exit"
            onClick={handleCloseAside}
            onTransitionEnd={(e) => e.stopPropagation()}
          >
            <CgClose />
          </span>
          <Tabs
            onTransitionEnd={(e) => e.stopPropagation()}
            tabs={tabsInfo}
            setPositionTab={setPositionTab}
            positionTab={positionTab}
          />
          <TabsContent
            positionTab={positionTab}
            tabsInfo={tabsInfo}
            refTabsContent={refTabsContent}
          />
        </aside>
      )}
    </>
  );
};

export default Aside;
