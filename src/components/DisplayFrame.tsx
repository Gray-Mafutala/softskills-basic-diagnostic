import React from "react";
import ButtonNext from "./ButtonNext";

type DisplayFrameProps = {
  children: React.ReactNode;
  innerWrapperStyles?: string;
  nextBtnCaption?: string
  linkNextBtn: string;
};

const DisplayFrame = ({
  children,
  innerWrapperStyles="",
  nextBtnCaption,
  linkNextBtn,
}: DisplayFrameProps) => {
  return (
    <div
      className="relative max-w-[520px] min-w-[420px] min-h-[360px] bg-yellow-400 shadow-[#fff_-6px_-6px_0px_0px,_#19274f_-12px_-12px_0px_0px]
      rounded-xl px-8 py-12 flex flex-col gap-y-4"
    >
      {/* top rectangles */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-x-4">
        <span className="block w-14 h-3 rounded-lg bg-dark-blue shadow-[-2px_2px_0_0px_#fff]"></span>
        <span className="block w-3 h-3 rounded-lg bg-dark-blue shadow-[1.5px_1.5px_0_0px_#fff]"></span>
      </div>

      {/* inner wrapper */}
      <div
        className={`bg-slate-100 shadow-[#19274f_3px_3px_0px_0px_inset,#e4e4e4_-3px_-3px_0px_1px_inset] p-6
        ${innerWrapperStyles}`}
      >
        {children}
      </div>

      <ButtonNext caption={nextBtnCaption} link={linkNextBtn} addStyles="self-end" />

      {/* bottom rectangle */}
      <span className="w-10 h-3 rounded-sm absolute bg-dark-blue shadow-[-2px_2px_0_0px_#fff] bottom-4 left-1/2 -translate-x-1/2"></span>
    </div>
  );
};

export default DisplayFrame;