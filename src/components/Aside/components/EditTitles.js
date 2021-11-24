import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editTitle, selectTitles } from "../../../features/textSlice";
import InputRange from "../../InputRange";
import "./EditTitles.css";
import SectionLayout from "./SectionLayout";
const EditTitles = () => {
  const titles = useSelector(selectTitles);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    // remove focus from inpText to avoid keyboard up
    if (e.target.matches('[type="range"]')) {
      const $inputTxt = document.querySelectorAll(".input-txt");
      $inputTxt.forEach((input) => input.blur());
    }
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
      <SectionLayout sectionTitle="Tamaño del texto">
        <InputRange
          min="16"
          max="200"
          name="titlesFontSize"
          onChange={handleInputChange}
          value={titles.titlesFontSize}
        />
      </SectionLayout>
      <SectionLayout sectionTitle="Bordes del texto">
        <InputRange
          min="0"
          max="5"
          name="titlesTextStroke"
          onChange={handleInputChange}
          value={titles.titlesTextStroke}
        />
      </SectionLayout>
    </>
  );
};

export default EditTitles;
