import { useSelector } from "react-redux";
import { selectSrcImage } from "../../features/textSlice";
import "./Aside.css";
import EditTitles from "./components/EditTitles";
const Aside = () => {
  const srcImg = useSelector(selectSrcImage);

  return (
    <>
      {srcImg && (
        <aside className="aside general-padding">
          <EditTitles />
        </aside>
      )}
    </>
  );
};

export default Aside;
