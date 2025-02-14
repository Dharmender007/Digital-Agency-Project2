// components/Footer.tsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const Footer: React.FC = () => {
  return <FooterContainer>
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Digital Agency Section */}
        <div>
          <h3 className="text-lg font-semibold">Digital agency</h3>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquam accumsan porta. Vestibulum dictum mauris. Nullam sodales mauris ut diam scelerisque amet adipiscing fermentum.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Works</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold">Help</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Delivery Details</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Free eBooks</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">How-to - Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </FooterContainer>;
};

export default Footer;
