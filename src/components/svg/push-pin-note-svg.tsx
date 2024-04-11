import { SVGProps } from "react";

const PushPinSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      id="Pin--Streamline-Ultimate"
      {...props}
    >
      <path
        d="M9.914 14.085 0.5 23.499"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21.414 8.585a0.707 0.707 0 0 0 1 0l0.793 -0.793a1 1 0 0 0 0 -1.414L17.621 0.792a1 1 0 0 0 -1.414 0l-0.793 0.793a0.707 0.707 0 0 0 0 1 0.707 0.707 0 0 1 0 1l-4.207 4.207a1 1 0 0 1 -0.707 0.293H7.328a1 1 0 0 0 -0.707 0.293l-0.5 0.5a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0l0.5 -0.5a1 1 0 0 0 0.293 -0.707V13.5a1 1 0 0 1 0.293 -0.707l4.207 -4.207a0.707 0.707 0 0 1 1 -0.001Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default PushPinSvg;
