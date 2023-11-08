import "./InputField.css";
import { TextField } from "@mui/material";
interface InputProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  placeholder: string;

  label: string;

  onClick?: () => void;
  onChange?: (event: any) => void;

  type: "text" | "date";

  id: string;

  value: string;

  // onHover?: () => void;
}

export const InputField = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  placeholder,
  value,
  onChange,
  type,
  id,
  ...props
}: InputProps) => {
  return (
    <TextField
      type={type}
      id={id}
      variant="filled"
      className="InputField"
      placeholder={placeholder}
      label={label}
      style={{ backgroundColor }}
      {...props}
      // required
      onChange={onChange}
      value={value}
    />
  );
};
