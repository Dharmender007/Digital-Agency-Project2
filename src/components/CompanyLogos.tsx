import React from "react";

const CompanyLogos = () => {
  const logos = [
    { src: "/images/Group 13.svg", alt: "ClickUp" },
    { src: "/images/Group 14.svg", alt: "Dropbox" },
    { src: "/images/Group 15.svg", alt: "Segment" },
    { src: "/images/Mask group.svg", alt: "GitHub" },
    { src: "/images/Frame 25.svg", alt: "Intuit" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <p className="text-[#000000] text-[14px] font-medium mb-4">
        Powering next-gen companies
      </p>
      <div className="flex items-center gap-10">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-8 opacity-60" />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
