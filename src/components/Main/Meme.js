import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSrcImage, selectTitles } from "../../features/textSlice";
import ElementDraggable from "../ElementDraggable";
import "./Meme.css";
const Meme = () => {
  const titles = useSelector(selectTitles);
  const src = useSelector(selectSrcImage);
  useEffect(() => {
    const $titles = document.querySelectorAll(".meme__titles");
    $titles.forEach(($title) => {
      $title.style.fontSize = `${titles.titlesFontSize}px`;
      $title.style.webkitTextStroke = `${titles.titlesTextStroke}px black`;
      // console.log($title.style);
    });
  }, [titles.titlesFontSize, titles.titlesTextStroke]);

  return (
    <section id="meme" className="meme">
      <ElementDraggable>
        <h3
          //output 16

          className="meme__titles draggable-box"
        >
          {titles.topText}
        </h3>
      </ElementDraggable>

      <img className="meme__img" src={src} alt="meme" />
      <ElementDraggable>
        <h3 className="meme__titles draggable-box">{titles.bottomText}</h3>
      </ElementDraggable>
    </section>
  );
};

export default Meme;
