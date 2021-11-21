import "./Meme.css";
const Meme = () => {
  return (
    <section id="meme" className="meme">
      <h3 className="meme__titles top-text">Top title</h3>
      <img
        className="meme__img"
        src="https://pbs.twimg.com/profile_images/1360711711217643521/JCy1AUvY_400x400.jpg"
        alt="meme"
      />
      <h3 className="meme__titles bottom-text">bottom title</h3>
    </section>
  );
};

export default Meme;
