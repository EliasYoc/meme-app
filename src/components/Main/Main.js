import { useSelector } from "react-redux";
import { selectSrcImage } from "../../features/textSlice";
import VideoGif from "../VideoGif";
import "./Main.css";
import Meme from "./Meme";
const Main = () => {
  const srcImg = useSelector(selectSrcImage);
  return (
    <main className={`main ${srcImg ? "add-bg" : "gifNotFound"}`}>
      {srcImg ? (
        <Meme />
      ) : (
        <VideoGif
          src="https://res.cloudinary.com/diusrxrra/video/upload/v1637548903/akita-llora_juosy3.webm"
          title="No hay imagenes para hacer memazos"
        />
      )}
    </main>
  );
};

export default Main;
