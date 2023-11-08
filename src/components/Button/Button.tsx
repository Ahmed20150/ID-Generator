import React, { useState } from "react";
import "./button.css";
import { Button as MUIButton } from "@mui/material";

interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  type: string;

  onClick?: () => void;

  children?: React.ReactNode;

  // onHover?: () => void;
}

export const Button = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  type,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  onClick: () => {
    {
      onClick;
    }
  };
  children: "Click me!";
  const [buttonLabel, setButtonLabel] = useState(label);

  return (
    <MUIButton
      variant="outlined"
      style={{ backgroundColor }}
      {...props}
      onClick={onClick}
    >
      {label}
    </MUIButton>
  );
};
