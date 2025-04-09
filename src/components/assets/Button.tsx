import React from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, text, type = "button" }) => {
  return (
    <button onClick={onClick} type={type} className="custom-button">
      {text}
    </button>
  );
};

export default Button;
