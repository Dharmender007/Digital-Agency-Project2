
import React from "react";
import styled from "styled-components";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TestimonialSection = styled.section`
  padding: 40px;
  background: ${(props) => props.theme.colors.white};
  font : Plus Jakarta Sans
`;

const Testimonial: React.FC = () => {
  return (
    <TestimonialSection>
      <section className="relative flex flex-col md:flex-row items-start justify-center bg-white py-16 px-8 md:px-20 gap-10">
      
        <div className="relative flex-shrink-0">
    
          <div className="absolute -top-6 -left-6 text-black text-6xl font-serif">“</div>
      
          <img
            src="/images/director.svg"
            alt="David Calathan"
            className="w-[300px] h-[450px] object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Testimonial Content */}
        <div className="ml-10 max-w-xl">
          <p className="text-[22px] text-[#47536B] leading-relaxed">
            “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”
          </p>
          <p className="mt-10 text-[18px] font-bold text-[#47536B] ">
            David Calathan –{" "}
            <span className="font-normal text-[20px] text-[#47536B]">
              Director of Design Operations, New York
            </span>
          </p>
        </div>

        {/* Navigation Buttons  */}
        <div className="absolute bottom-10 right-40 flex items-center space-x-4 p-4">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowBackIcon className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowForwardIcon className="text-gray-600" />
          </button>
        </div>
      </section>
    </TestimonialSection>
  );
};

export default Testimonial;
