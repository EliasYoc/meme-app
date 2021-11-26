import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import {
  displayOrHidePicker,
  selectColorPicker,
  setPickerColor,
} from "../features/textSlice";
const ColorPicker = () => {
  const picker = useSelector(selectColorPicker);
  const dispatch = useDispatch();
  const styles = {
    col: {
      width: "36px",
      height: "20px",
      borderRadius: "2px",
      background: `rgba(${picker.color.r}, ${picker.color.g}, ${picker.color.b}, ${picker.color.a})`,
    },
    swatch: {
      padding: "1px",
      background: "#fff",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      top: "30px",
      right: "0px",
      zIndex: "2",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  };
  const handleClick = () => {
    dispatch(displayOrHidePicker(!picker.displayColorPicker));
  };

  const handleClose = () => {
    dispatch(displayOrHidePicker(false));
  };

  const handleChange = (color) => {
    dispatch(setPickerColor(color.rgb));
  };

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.col} />
      </div>
      {picker.displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          {/* <SketchPicker color={picker.color} onChange={handleChange} /> */}
          <ChromePicker color={picker.color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
