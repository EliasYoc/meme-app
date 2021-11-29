import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectColorPicker,
  selectSrcImage,
  selectTitles,
} from "../../features/textSlice";
import ElementDraggable from "../ElementDraggable";
import "./Meme.css";
const Meme = () => {
  const titles = useSelector(selectTitles);
  const { color } = useSelector(selectColorPicker);
  const { r, g, b, a } = color;
  const src = useSelector(selectSrcImage);
  useEffect(() => {
    const $titles = document.querySelectorAll(".meme__titles");
    $titles.forEach(($title) => {
      $title.style.fontSize = `${titles.titlesFontSize}px`;
      $title.style.transform = `scale(${titles.transformScale})`;
      $title.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;
      $title.style.webkitTextStroke = `${titles.titlesTextStroke}px black`;
      $title.style.textAlign = `${titles.alignText}`;
    });
  }, [
    titles.alignText,
    titles.titlesFontSize,
    titles.titlesTextStroke,
    titles.transformScale,
    r,
    g,
    b,
    a,
  ]);

  return (
    <section id="meme" className="meme">
      <ElementDraggable className="draggable-box">
        <h3
          //output 16

          className="meme__titles"
        >
          {titles.topText}
        </h3>
      </ElementDraggable>

      <img draggable="false" className="meme__img" src={src} alt="meme" />
      <ElementDraggable className="draggable-box">
        <h3 className="meme__titles">{titles.bottomText}</h3>
      </ElementDraggable>
    </section>
  );
};

export default Meme;
