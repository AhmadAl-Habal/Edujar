import React from "react";

const FooterSubSection = ({content}) => {
  return (
    <div className="footer-sub-section">
      <h2>{content.title}</h2>
      <input type="text" placeholder={content.placeHolder} />
      <hr />
      <button>{content.buttonDesc}</button>
    </div>
  );
};

export default FooterSubSection;
