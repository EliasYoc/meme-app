import html2canvas from "html2canvas";
import toast from "react-hot-toast";
import "./Header.css";
const Header = () => {
  const handleDownload = () => {
    const $meme = document.getElementById("meme");
    const prom = html2canvas($meme, {
      useCORS: true,
      backgroundColor: null,
      // foreignObjectRendering: true,
    }).then((canvas) => {
      const $a = document.createElement("a");
      $a.href = canvas.toDataURL("image/png");
      $a.download = `meme.png`;
      $a.click();
    });
    toast.promise(prom, {
      error: "error",
      loading: "cargando...",
      success: "Descargado",
    });
  };
  return (
    <header className="header general-padding">
      <h2 className="header__logo bg-gradient txt-gradient">MemeYoc </h2>
      <div className="header__btns ">
        <button className="bg-gradient" onClick={handleDownload}>
          descargar png
        </button>
        <button className="bg-gradient">Subir imagen</button>
      </div>
    </header>
  );
};

export default Header;
