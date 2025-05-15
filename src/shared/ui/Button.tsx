import React from "react";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  background?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  borderRadius?: string;
  handler?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  width = "auto",
  height = "auto",
  background = "transparent",
  textColor = "inherit",
  fontSize = "inherit",
  fontWeight = "normal",
  margin = "0",
  borderRadius = "0",
  handler,
  className = "",
}) => {
  const buttonStyle: React.CSSProperties = {
    width,
    height,
    background,
    color: textColor,
    fontSize,
    fontWeight,
    margin,
    borderRadius,
  };

  return (
    <button
      type="button"
      className={`button ${className}`}
      style={buttonStyle}
      onClick={handler}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;
