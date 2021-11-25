import { Rnd } from "react-rnd";

const ElementDraggable = ({ className, children }) => {
  return (
    <Rnd
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
