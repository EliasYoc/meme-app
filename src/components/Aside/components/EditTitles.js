import { useSelector, useDispatch } from "react-redux";
import { CgFormatLeft, CgFormatRight } from "react-icons/cg";
import { FiAlignCenter } from "react-icons/fi";
import {
  changeAlignText,
  editTitle,
  selectTitles,
} from "../../../features/textSlice";
import ButtonIcon from "../../../ButtonIcon";
import ColorPicker from "../../ColorPicker";
import InputRange from "../../InputRange";
import SectionLayout from "./SectionLayout";
import "./EditTitles.css";

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
  const handleClickAlignText = (title) => {
    const minTitle = title.toLowerCase();
    console.log(minTitle);
    dispatch(changeAlignText(minTitle));
  };
  return (
    <>
      <SectionLayout sectionTitle="Títulos">
        <input
          className="titles__input input-txt"
          name="topText"
          placeholder="Título superior"
          type="text"
          onChange={handleInputChange}
          value={titles.topText}
        />
        <input
          className="titles__input input-txt"
          name="bottomText"
          placeholder="Título inferior"
          type="text"
          onChange={handleInputChange}
          value={titles.bottomText}
        />
      </SectionLayout>
      <SectionLayout sectionTitle="Tamaño del texto">
        <div className="flex-row grow-first-child">
          <InputRange
            min="16"
            max="200"
            name="titlesFontSize"
            onChange={handleInputChange}
            value={titles.titlesFontSize}
          />
          <ColorPicker />
        </div>
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
      <SectionLayout sectionTitle="Alineado">
        <div className="flex-row">
          <ButtonIcon
            onClick={handleClickAlignText}
            title="Left"
            iconComponent={CgFormatLeft}
          />
          <ButtonIcon
            onClick={handleClickAlignText}
            title="Center"
            iconComponent={FiAlignCenter}
          />
          <ButtonIcon
            onClick={handleClickAlignText}
            title="Right"
            iconComponent={CgFormatRight}
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default EditTitles;
