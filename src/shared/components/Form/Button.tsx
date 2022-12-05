import React, { MouseEventHandler } from "react";
import "./Button.css";

type ButtonType = "default" | "warning";
interface ButtonProps {
  title: string;
  type?: ButtonType;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  className = "",
  title,
  onClick,
}) => {
  return (
    <button className={"button " + className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
