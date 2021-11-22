import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTitles } from "../../features/textSlice";
import "./Meme.css";
const Meme = () => {
  const titles = useSelector(selectTitles);
  const url = undefined;
  useEffect(() => {
    const $titles = document.querySelectorAll(".meme__titles");
    $titles.forEach(
      ($title) => ($title.style.fontSize = `${titles.titlesFontSize}px`)
    );
  }, [titles.titlesFontSize]);
  // https://image.winudf.com/v2/image1/Y29tLnJhcmUud2FsbHBhcGVyc19zY3JlZW5fMF8xNTkzNTA2OTY0XzAyMw/screen-0.jpg?fakeurl=1&type=.jpg
  // console.log(titles.titlesFontSize); //output 16,17,18,19...
  return (
    <section id="meme" className="meme">
      <h3
        //output 16
        className="meme__titles top-text"
      >
        {titles.topText}
      </h3>
      <img className="meme__img" src={url} alt="meme" />
      <h3 className="meme__titles bottom-text">{titles.bottomText}</h3>
    </section>
  );
};

export default Meme;
