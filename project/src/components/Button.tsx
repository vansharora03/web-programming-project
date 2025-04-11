import React from "react";

type ButtonProps = {
  text:string;
  type?: 'button' | 'submit'
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, type = "button", className }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;