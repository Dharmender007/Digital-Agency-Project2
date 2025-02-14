import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DynamicButton from "./Button";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px; /* Adjust spacing */
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Space between logo and text */
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px; /* Space between links */
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/* Logo Section */}
      <LogoSection>
        <img src="/images/logo.svg" alt="Logo" className="h-8" />
        <span className="text-black font-semibold text-[24px]">Digital agency</span>
      </LogoSection>

      {/* Navigation Links */}
      <NavLinks>
        <a href="#" className="hover:text-black text-[#2D3748]">About</a>
        <a href="#" className="hover:text-black text-[#2D3748]">Services</a>
        <a href="#" className="hover:text-black text-[#2D3748]">Projects</a>

        {/* Button */}
        <DynamicButton text="Get in Touch" onClick={() => alert("Button Clicked!")} />
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
