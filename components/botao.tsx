import Link from "next/link";
import React, { ReactNode } from "react";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  buttonStyle: string;
  buttonSize: string;
  path: string;
};

export const Botao = (props: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[0];

  return (
    <Link href={props.path} passHref>
      <a className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={props.onClick}
          type="submit"
        >
          {props.children}
        </button>
      </a>
    </Link>
  );
};