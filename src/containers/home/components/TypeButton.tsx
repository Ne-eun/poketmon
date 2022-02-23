import { useState } from "react";
import style from "./TypeButton.module.scss";

type Props = {
  on?: boolean;
  color: string;
  onClick?: () => void | Promise<void>;
};

const TypeButton: React.FC<Props> = ({ color, onClick, children, on }) => {
  const [isOn, setIsOn] = useState(on ? on : false);
  const onClickHandler = () => {
    setIsOn(!isOn);
    onClick && onClick();
  };
  return (
    <button
      className={`${style.type_button} ${isOn ? style.on : ""}`}
      style={{ ["--my-color" as any]: color }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default TypeButton;
