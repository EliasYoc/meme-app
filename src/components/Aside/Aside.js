import html2canvas from "html2canvas";

const Aside = () => {
  const handleDownload = () => {
    const $meme = document.getElementById("meme");
    html2canvas($meme, { useCORS: true }).then((canvas) => {
      const $a = document.createElement("a");
      $a.href = canvas.toDataURL("image/png");
      $a.download = `meme.png`;
      $a.click();
    });
  };
  return (
    <div>
      <button onClick={handleDownload}>descargar</button>
    </div>
  );
};

export default Aside;
