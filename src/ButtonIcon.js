import "./ButtonIcon.css";
const ButtonIcon = ({
  iconComponent: Icon,
  onClick,
  title,
  cssPropName,
  cssValue,
}) => {
  return (
    <button
      className="btn-icon bg-gradient"
      onClick={() => onClick(cssValue, cssPropName)}
    >
      {Icon ? <Icon className="btn-icon__icon" /> : ""}

      {title}
    </button>
  );
};

export default ButtonIcon;
