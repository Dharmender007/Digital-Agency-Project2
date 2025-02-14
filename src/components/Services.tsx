// components/Services.tsx
import React from "react";
import styled from "styled-components";
import DynamicButton from "./Button";

const ServicesContainer = styled.section`
  padding: 50px;
  text-align: center;
  font : Plus Jakarta Sans
`;

const services = [
  {
    icon: "/images/app.svg",
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum.Nullam euismod metus vel sem bibendum.",
  },
  {
    icon: "/images/web.svg",
    title: "Web Designing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum.Nullam euismod metus vel sem bibendum.",
  },
  {
    icon: "/images/design.svg",
    title: "Graphic Designing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum.Nullam euismod metus vel sem bibendum.",
  },
  {
    icon: "/images/market.svg",
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum.Nullam euismod metus vel sem bibendum.",
  },
];

const Services: React.FC = () => {
  return (
    <ServicesContainer>
     <div className="flex flex-col items-center justify-center py-16 px-6 bg-white">
      <h2 className="text-[40px] font-semibold text-[#0F0049]">Explore Our Services</h2>
      <p className="text-[#47536B] text-center mt-2 mb-16">
        We are self-service data analytics software that lets you create visually.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-5xl">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start text-start mb-10">
             <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4 text-[#6854FC]" />
            <h3 className="text-lg font-semibold  text-[#0F0049]">{service.title}</h3>
            <p className="text-[#0F0049] text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <DynamicButton text="Learn More" onClick={() => alert("Button Clicked!")} />
    </div>
    </ServicesContainer>
  );
};

export default Services;



