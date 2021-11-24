import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSrcImage, selectTitles } from "../../features/textSlice";
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
      <h3
        //output 16
        className="meme__titles top-text"
      >
        {titles.topText}
      </h3>
      <img className="meme__img" src={src} alt="meme" />
      <h3 className="meme__titles bottom-text">{titles.bottomText}</h3>
    </section>
  );
};

export default Meme;
