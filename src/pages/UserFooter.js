// components/Footer.js
import React from 'react';
import { FaPhone, FaWhatsapp, FaShareAlt, FaQrcode } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto flex justify-around items-center">
        <div className="menu_item">
          <a href="tel:+919833675687" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaPhone className="text-xl" />
            <div className="link_btn">Call Now</div>
          </a>
        </div>
        <div className="menu_item">
          <a 
            href="https://api.whatsapp.com/send?text=Hi, Sagir, Got your information from your https://digicarda.com ...&phone=919833675687" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center"
          >
            <FaWhatsapp className="text-xl" />
            <div className="link_btn">Whatsapp</div>
          </a>
        </div>
        <div 
          className="menu_item cursor-pointer flex flex-col items-center" 
          onClick={() => window.location.hash = '#home'} 
          id="share_box_pop"
        >
          <FaShareAlt className="text-xl" /> 
          Share
        </div>
        <div 
          className="menu_item cursor-pointer flex flex-col items-center" 
          onClick={() => window.location.hash = '#home'} 
        >
          <FaQrcode className="text-xl" id="qr_box_pop" /> 
          QR Code
        </div>
      </div>
    </div>
  );
};

export default Footer;
