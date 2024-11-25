import React from 'react'

const FooterLogoSection = ({content}) => {
  return (
    <div className="footer-logo-section">
      <img src={content.logo} alt="" />
      <h4>{content.desc}</h4>
      <h3>© 2024 <span>edujar</span> - All Rights Reserved</h3>
    </div>
  );
}

export default FooterLogoSection