import { useSelector, useDispatch } from "react-redux";
import { CgFormatLeft, CgFormatRight } from "react-icons/cg";
import { FiAlignCenter } from "react-icons/fi";
import {
  changeCssValue,
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
  const handleClickCssProp = (value, cssPropName) => {
    const minValue = value.toLowerCase();
    dispatch(changeCssValue({ minValue, cssPropName }));
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
            max="55"
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
      <SectionLayout sectionTitle="Ampliar">
        <div className="flex-row">
          <ButtonIcon
            title=".5x"
            onClick={handleClickCssProp}
            cssPropName="transformScale"
            cssValue=".5"
          />
          <ButtonIcon
            title="1x"
            cssValue="1"
            onClick={handleClickCssProp}
            cssPropName="transformScale"
          />
          <ButtonIcon
            title="1.5x"
            cssValue="1.5"
            onClick={handleClickCssProp}
            cssPropName="transformScale"
          />
          <ButtonIcon
            title="2x"
            cssValue="2"
            onClick={handleClickCssProp}
            cssPropName="transformScale"
          />
        </div>
      </SectionLayout>
      <SectionLayout sectionTitle="Alineado">
        <div className="flex-row">
          <ButtonIcon
            onClick={handleClickCssProp}
            title="Left"
            cssValue="left"
            iconComponent={CgFormatLeft}
            cssPropName="alignText"
          />
          <ButtonIcon
            onClick={handleClickCssProp}
            title="Center"
            cssValue="center"
            iconComponent={FiAlignCenter}
            cssPropName="alignText"
          />
          <ButtonIcon
            onClick={handleClickCssProp}
            title="Right"
            cssValue="right"
            iconComponent={CgFormatRight}
            cssPropName="alignText"
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default EditTitles;
