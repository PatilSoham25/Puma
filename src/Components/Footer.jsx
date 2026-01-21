import React from "react";
import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16">
      {/* Top Divider */}
      <div className="border-t border-gray-700 mb-12" />

        <div className="flex justify-between"
        data-aos="fade-down">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz7Z44uTlIs6bXrASDRh19Da_ArkCvW1msg&s" 
          alt=""
          className="w-40 h-30 px-2 mb-6"
           />
           <div>
                <p className="mb-4 text-base">Our Socials</p>
                <div className="flex gap-4">
                    <Instagram className="cursor-pointer hover:text-gray-400" />
                    <Youtube className="cursor-pointer hover:text-gray-400" />
                    <Facebook className="cursor-pointer hover:text-gray-400" />
                    <Linkedin className="cursor-pointer hover:text-gray-400" />
                </div>
            </div>
        </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12"
      data-aos="fade-up">

        {/* Press */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Press</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="text-base hover:text-white hover:underline cursor-pointer">Newsroom <span className="text-2xl">→</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Contact</h3>
          <ul className="space-y-2  text-gray-300">
            <li className="text-base hover:text-white hover:underline cursor-pointer">Get in Touch with us <span className="text-2xl">→</span></li>
            <li className="text-base hover:text-white hover:underline cursor-pointer">Start Your Career at PUMA <span className="text-2xl">→</span></li>
          </ul>
        </div>

        {/* Puma Insights */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Puma Insights</h3>
          <ul className="space-y-2">
            <li className="text-base text-gray-300 hover:text-white hover:underline cursor-pointer">About PUMA <span className="text-2xl">→</span></li>
            <li className="text-base text-gray-300 hover:text-white hover:underline cursor-pointer">Annual Report 2024 <span className="text-2xl">→</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
        <div className="flex flex-wrap gap-4">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Cookies Settings</span>
          <span className="hover:text-white cursor-pointer">Legal</span>
          <span className="hover:text-white cursor-pointer">Imprint</span>
          <span className="hover:text-white cursor-pointer">Shopping App Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Vulnerability Disclosure Policy</span>
          <span className="hover:text-white cursor-pointer">Complaints Procedure</span>
        </div>
        <p className="text-gray-400 hover:text-white cursor-pointer">All rights reserved © PUMA SE 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
