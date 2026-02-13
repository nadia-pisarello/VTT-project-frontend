import type { ButtonHTMLAttributes } from "react";

type BotonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Boton({ children, ...props }: BotonProps) {
  return <button {...props}>{children}</button>;
}
