import React from "react";

const DynamicButton = ({ text, onClick }: any) => {
  return (
    <button
      className="w-[135px] h-[48px] bg-[#5F4BDB] text-white font-medium rounded-lg hover:bg-[#4a3ab8] transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DynamicButton;
