import html2canvas from "html2canvas";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addInput,
  clearAllEdition,
  selectSrcImage,
  setSrcImg,
} from "../../features/textSlice";
import { FiDownload, FiShare2 } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import "./Header.css";
import { useState } from "react";
import Loader from "../Loader";
const Header = () => {
  const [shareIsLoading, setShareIsLoading] = useState(false);
  const srcImg = useSelector(selectSrcImage);
  const dispatch = useDispatch();
  const optionsCanvas = {
    useCORS: true,
    backgroundColor: null,
    // foreignObjectRendering: true,
  };
  const hideDragBoxBorder = () => {
    const $draggableBoxes = document.querySelectorAll(".draggable-box");

    $draggableBoxes.forEach(($draggableBox) => {
      $draggableBox.style.border = "none";
    });
  };
  const showDragBoxBorder = () => {
    const $draggableBoxes = document.querySelectorAll(".draggable-box");

    $draggableBoxes.forEach(($draggableBox) => {
      $draggableBox.style.border = "3px solid rgb(22, 191, 182)";
    });
  };
  const handleShowOrHideOptions = () => {
    const $imageOptions = document.querySelector(".header__btns");
    $imageOptions.classList.toggle("show");
  };
  const handleDownloadPng = () => {
    const $meme = document.getElementById("meme");
    hideDragBoxBorder();
    const prom = html2canvas($meme, optionsCanvas).then((canvas) => {
      const $a = document.createElement("a");
      $a.href = canvas.toDataURL("image/png");
      $a.download = `meme.png`;
      $a.click();
      showDragBoxBorder();
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
    dispatch(clearAllEdition());
    const file = e.target.files[0];
    if (e.target.files.length === 0) return;
    const url = URL.createObjectURL(file);
    dispatch(setSrcImg(url));
    handleShowOrHideOptions();
    dispatch(addInput(2));
  };

  const handleClickShare = async () => {
    setShareIsLoading(true);
    const $meme = document.getElementById("meme");
    let filesArray = null;
    hideDragBoxBorder();
    const canvas = await html2canvas($meme, optionsCanvas);
    canvas.toBlob(
      (blob) => {
        // console.log(blob);
        const file = new File([blob], "memazo.png", {
          type: "image/png",
        });
        filesArray = [file];
        //Share function
        if (navigator.canShare && navigator.canShare({ files: filesArray })) {
          navigator
            .share({
              files: filesArray,
              title: "MemeYoc",
              text: "Compartiendo meme",
            })
            .catch((error) => {
              alert(error);
            });
          showDragBoxBorder();
          setShareIsLoading(false);
        } else {
          alert(" no soporta compartir archivos");
        }
        // console.log(URL.createObjectURL(blob));
      },
      "image/png",
      1
    );
  };
  return (
    <header className="header general-padding">
      <h2 className="header__logo bg-gradient txt-gradient">MemeYoc </h2>
      <div className="header__btns ">
        {srcImg && (
          <>
            <button className="bg-gradient" onClick={handleClickShare}>
              Compartir
              {shareIsLoading ? (
                <Loader className="header__icon" />
              ) : (
                <FiShare2 className="header__icon" />
              )}
            </button>
            <button className="bg-gradient" onClick={handleDownloadPng}>
              Descargar png
              <FiDownload className="header__icon" />
            </button>
          </>
        )}

        <input
          id="header__file"
          type="file"
          accept="image/*"
          onChange={handleUploadImg}
        />
        <button className="bg-gradient" onClick={handleClickUpload}>
          Cargar imagen
          <BiImageAdd className="header__icon" />
        </button>
      </div>
      <HiDotsVertical
        onClick={handleShowOrHideOptions}
        className="header__icon options"
      />
    </header>
  );
};

export default Header;
