import { ButtonHTMLAttributes } from "react";

import classes from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

export const Button = ({
  size = "medium",
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        classes.button,
        classes[`button--${size}`],
        classes[`button--${variant}`],
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
