import "./ButtonIcon.css";
const ButtonIcon = ({ iconComponent: Icon, onClick, title }) => {
  return (
    <button className="btn-icon bg-gradient" onClick={() => onClick(title)}>
      <Icon className="btn-icon__icon" />

      {title}
    </button>
  );
};

export default ButtonIcon;
