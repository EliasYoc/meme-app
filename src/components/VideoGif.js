import "./VideoGif.css";
const VideoGif = ({ src, title }) => {
  return (
    <div className="alert">
      <video
        playsInline
        className="alert__video"
        loop
        autoPlay
        muted
        src={src}
      ></video>
      <h2>{title}</h2>
    </div>
  );
};

export default VideoGif;
