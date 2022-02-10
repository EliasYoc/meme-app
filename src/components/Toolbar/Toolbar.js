import React from "react";
import ToolbarIcon from "./components/ToolbarIcon";
import { RiText } from "react-icons/ri";
import "./Toolbar.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsMobile, switchIsMobile } from "../../features/globalInfoSlice";
import { useDispatch } from "react-redux";
import { openCloseAside, selectShowAside } from "../../features/buttonsSlice";
const Toolbar = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(selectIsMobile);
  const isAsideOpen = useSelector(selectShowAside);
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isDeviceMobile = /mobi/i.test(ua);
    isDeviceMobile
      ? dispatch(switchIsMobile(true))
      : dispatch(switchIsMobile(false));
  }, [dispatch]);
  const handleShowTextAside = () => dispatch(openCloseAside());
  return (
    <div
      className={`tb-container ${isMobile ? "isMobile" : ""} ${
        isAsideOpen && "hide"
      }`}
    >
      <div className="toolbar">
        <ToolbarIcon iconComponent={RiText} onClick={handleShowTextAside} />
      </div>
    </div>
  );
};

export default Toolbar;
