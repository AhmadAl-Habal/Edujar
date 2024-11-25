import React from "react";
import logoImg from "../../assets/Edujar.png";
import "./Footer.css";
import FooterLogoSection from "./FooterLogoSection.jsx";
import FooterLinksSection from "./FooterLinksSection.jsx";
import FooterSubSection from "./FooterSubSection.jsx";
const Footer = () => {
  let footerContent = [
    {
      logo: logoImg,
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...",
      copyRight: "© 2024 <span>edujar<span/> - All Rights Reserved",
    },
    {
      title: "Quick links",
      links: ["Home", "Courses", "About us", "Works", "Blog"],
    },
    {
      title: "Legal",
      links: [
        "Term of use",
        "Terms & conditions",
        "Privacy policy",
        "Cookie policy",
      ],
    },
    {
      title: "Quick links",
      placeHolder: "Enter Email",
      buttonDesc: "Subscribe",
    },
  ];
  return (
    <div className="content-container">
      <div className="footer">
        <FooterLogoSection content={footerContent[0]} />
        <FooterLinksSection content={footerContent[1]} />
        <FooterLinksSection content={footerContent[2]} />
        <FooterSubSection content={footerContent[3]} />
      </div>
    </div>
  );
};

export default Footer;
