import { useDispatch, useSelector } from "react-redux";
import { CgClose } from "react-icons/cg";
import { selectSrcImage } from "../../features/textSlice";
import { openCloseAside, selectShowAside } from "../../features/buttonsSlice";
import "./Aside.css";
import EditTitles from "./components/EditTitles";
const Aside = () => {
  const dispatch = useDispatch();
  const srcImg = useSelector(selectSrcImage);
  const isAsideOpen = useSelector(selectShowAside);
  const handleCloseAside = () => dispatch(openCloseAside());
  return (
    <>
      {srcImg && (
        <aside
          className={`aside general-padding animate__animated animate__fadeInUpBig ${
            !isAsideOpen && "hide"
          }`}
        >
          <span className="aside__exit" onClick={handleCloseAside}>
            <CgClose />
          </span>
          <EditTitles />
        </aside>
      )}
    </>
  );
};

export default Aside;
