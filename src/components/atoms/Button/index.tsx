import React from "react";
import { Button as MuiButton, SvgIconTypeMap, Typography } from "@mui/material";

export interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  textVariant?: | "h4"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "b1"
  | "b2"
  | "c1"
  | "c2"
  | "button"
  | "overline";
  children?: React.ReactNode | string;
  startIcon?: React.ReactNode |any;
  endIcon?: React.ReactNode |any;
  buttonstyles?: React.CSSProperties | any;
  typograpystyles?: React.CSSProperties | any;
  className?: string;
  disabled?: boolean;
  type?:|
  'submit'|'button'|'reset' |any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      {...props}
      style={props.buttonstyles}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      type={props.type}
         
    >
      <Typography
        variant={props.textVariant}
        children={props.children}
        style={props.typograpystyles}
      />
    </MuiButton>
  );
};

export default Button;