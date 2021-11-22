import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editTitle, selectTitles } from "../../../features/textSlice";
import { useForm } from "../../../hooks/useForm";
import "./EditTitles.css";
import SectionLayout from "./SectionLayout";
const EditTitles = () => {
  const titles = useSelector(selectTitles);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    dispatch(editTitle({ name: e.target.name, value: e.target.value }));
  };
  return (
    <>
      <SectionLayout sectionTitle="Titulos">
        <input
          className="titles__input input-txt"
          name="topText"
          placeholder="titulo superior"
          type="text"
          onChange={handleInputChange}
          value={titles.topText}
        />
        <input
          className="titles__input input-txt"
          name="bottomText"
          placeholder="titulo inferior"
          type="text"
          onChange={handleInputChange}
          value={titles.bottomText}
        />
      </SectionLayout>
      <SectionLayout sectionTitle="Fuente">
        <input
          type="range"
          min="20"
          max="47"
          name="titlesFontSize"
          onChange={handleInputChange}
          value={titles.titlesFontSize}
        />
      </SectionLayout>
    </>
  );
};

export default EditTitles;
