import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white ">
      <div className="max-w-7xl mx-auto text-center ">
        <div className="flex flex-col gap-4">
        <Image src="/logoMono.svg" alt="Logo footer" width={200} height={100} />
        <p>© 2024 made with 💙 in Poland</p>
        <a href="mailto:contact@syncguide.io" className=" text-center link link-hover">
          contact@syncguide.io
        </a>
        </div>
      
      </div>
      {/* <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Branding
        </a>
        <a href="/" className="link link-hover">
          Design
        </a>
        <a href="/" className="link link-hover">
          Marketing
        </a>
        <a href="/" className="link link-hover">
          Advertisement
        </a>
      </div> */}
      {/* <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </div> */}
      {/* <div>
        <span className="footer-title">Contact</span>
      
       
      </div> */}
    </footer>
  );
};

export default Footer;
