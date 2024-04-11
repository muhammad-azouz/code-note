import { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className="hover:text-sky-600" {...props} />;
};

export default Button;
