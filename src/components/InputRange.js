import { useEffect } from "react";
import "./InputRange.css";
const calcPercentaje = (val) => {
  for (let i = 1; i < val + 1; i++) {
    console.log();
  }
};
const InputRange = ({ min, max, name, onChange, value }) => {
  useEffect(() => {
    const val = parseInt(((value - min) * 100) / (max - min));
    // console.log(`val: ${value}, min: ${min}`, value - min);
    // console.log(`${value}px ${val}%`);
    const $inpRange = document.querySelector(".input-range__input");
    $inpRange.style.background = `
    linear-gradient(90deg, rgb(186, 62, 165) ${val}%, #fff ${val + 2}%)`;
  }, [min, max, value]);
  return (
    <div className="input-range">
      <input
        className="input-range__input"
        type="range"
        min={min}
        max={max}
        name={name}
        onChange={onChange}
        value={value}
      />
      <span className="input-range__span">{value}px</span>
    </div>
  );
};

export default InputRange;
