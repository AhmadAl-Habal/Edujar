import React from 'react'

const FooterLinksSection = ({content}) => {

  console.log(content.links);

  return (
    <div className="footer-links-section">
      <h2>{content.title}</h2>
      <ul>
       
        {content.links.map((li) => (
          <li>{li}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinksSection