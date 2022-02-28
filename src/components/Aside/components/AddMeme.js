import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SectionLayout from "./SectionLayout";
import "./AddMeme.css";
import { useDispatch } from "react-redux";
import { addInput, clearText, setSrcImg } from "../../../features/textSlice";
const AddMeme = () => {
  const [memes, setMemes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await res.json();
      setMemes(data.data.memes);
    };
    getMemes();
  }, []);

  const handleChoiceImg = (
    img = "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
    boxCount = 2
  ) => {
    dispatch(setSrcImg(img));
    dispatch(clearText());
    dispatch(addInput(boxCount));
  };
  return (
    <>
      <SectionLayout sectionTitle="Remplazar meme">
        <p>Consume un poco los datos móviles, recomendable usar Internet</p>
        <div className="gifs-list">
          {memes.map((meme) => (
            <article
              key={meme.id}
              className="gifs-list__card"
              onClick={() => handleChoiceImg(meme.url, meme.box_count)}
            >
              <img loading="lazy" src={meme.url} alt={meme.name} />
              <h3 className="gifs-list__name">{meme.name}</h3>
            </article>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default AddMeme;
