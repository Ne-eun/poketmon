import { useState } from "react";
import style from "./TypeButton.module.scss";

type Props = {
  on: boolean;
  color: string;
  onClick?: () => void | Promise<void>;
};

const TypeButton: React.FC<Props> = ({ color, onClick, children, on }) => {
  return (
    <button
      className={`${style.type_button} ${on ? style.on : ""}`}
      style={{ ["--my-color" as any]: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TypeButton;
