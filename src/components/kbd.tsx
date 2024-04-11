import { HtmlHTMLAttributes } from "react";

const Kbd = (props: HtmlHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]"
      {...props}
    />
  );
};

export default Kbd;
