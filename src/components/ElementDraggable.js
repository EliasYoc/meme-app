import { Rnd } from "react-rnd";

const ElementDraggable = ({ className, children }) => {
  return (
    <Rnd
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={className}
      default={{
        x: 0,
        y: 0,
      }}
    >
      {children}
    </Rnd>
  );
};

export default ElementDraggable;
