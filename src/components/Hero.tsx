// components/Hero.tsx
import React from "react";
import styled from "styled-components";
import DynamicButton from "./Button";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background: ${(props) => props.theme.colors.secondary};
  font : Plus Jakarta Sans
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 gap-20">
      
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748]">
         <div className="mb-5">
         Building Brands
          </div>  <div>
          in the <span className="text-[#6153CD]">Digital Age</span>
            </div>  
        </h1>
        <p className="text-[#47536B] text-lg mt-4 mb-10">
          Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
        </p>
        <DynamicButton text="Learn More" onClick={() => alert("Button Clicked!")} />
      </div>
      
      
      {/* Right Image Section */}
      <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-start">
        <img 
          src="/images/main.svg" 
          alt="Branding Team" 
          className="w-full max-w-md lg:max-w-lg rounded-[40px] shadow-lg" 
        />
        {/* Floating Stats Box */}
        <div className="absolute -bottom-8 right-4 bg-white shadow-md rounded-lg px-4 py-2 flex items-center">
          <div className="ml-2">
            <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-xl">⭐</span>
            <p className="text-gray-700 text-sm font-medium">PROJECTS</p>
            </div>
       
            <p className="text-gray-900 font-bold text-lg">600+ Done</p>
          </div>
        </div>
      </div>
      
    
    </div>
    </HeroSection>
  );
};

export default Hero;


