import { ReactNode } from "react";

type Props = {
  size?: "sm" | "md";
  children: ReactNode;
};
const Heading = (props: Props) => {
  return (
    <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tight  ">
      {props.children}
    </h1>
  );
};

export default Heading;
