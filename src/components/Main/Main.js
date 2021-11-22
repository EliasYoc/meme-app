import VideoGif from "../VideoGif";
import "./Main.css";
import Meme from "./Meme";
const Main = () => {
  return (
    <main className="main">
      <VideoGif
        src="https://res.cloudinary.com/diusrxrra/video/upload/v1637548903/akita-llora_juosy3.webm"
        title="No hay imagenes para hacer memazos"
      />
      {/* <Meme /> */}
    </main>
  );
};

export default Main;
