import html2canvas from "html2canvas";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectSrcImage, setSrcImg } from "../../features/textSlice";
import { FiDownload } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import "./Header.css";
const Header = () => {
  const srcImg = useSelector(selectSrcImage);

  const dispatch = useDispatch();

  const handleDownloadPng = () => {
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
  const handleClickUpload = () => {
    document.getElementById("header__file").click();
  };
  const handleUploadImg = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if (e.target.files.length === 0) return;
    const blob = URL.createObjectURL(file);
    dispatch(setSrcImg(blob));
  };
  const handleShowOptions = () => {
    const $imageOptions = document.querySelector(".header__btns");
    $imageOptions.classList.toggle("show");
  };
  return (
    <header className="header general-padding">
      <h2 className="header__logo bg-gradient txt-gradient">MemeYoc </h2>
      <div className="header__btns ">
        {srcImg && (
          <button className="bg-gradient" onClick={handleDownloadPng}>
            descargar png
            <FiDownload className="header__icon" />
          </button>
        )}

        <input
          id="header__file"
          type="file"
          accept="image/*"
          onChange={handleUploadImg}
        />
        <button className="bg-gradient" onClick={handleClickUpload}>
          Subir imagen
          <BiImageAdd className="header__icon" />
        </button>
      </div>
      <HiDotsVertical
        onClick={handleShowOptions}
        className="header__icon options"
      />
    </header>
  );
};

export default Header;
