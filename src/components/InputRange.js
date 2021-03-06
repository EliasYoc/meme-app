import { useEffect } from "react";
import "./InputRange.css";
const InputRange = ({ min, max, name, onChange, value }) => {
  useEffect(() => {
    const val = parseInt(((value - min) * 100) / (max - min));
    // console.log(`val: ${value}, min: ${min}`, value - min);
    // console.log(`${value}px ${val}%`);
    const $inpRange = document.querySelector(`#${name}`);
    $inpRange.style.background = `
    linear-gradient(90deg, rgb(186, 62, 165) ${val}%, #fff ${val}%)`;
  }, [min, max, value, name]);
  return (
    <div className="input-range">
      <input
        id={name}
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
