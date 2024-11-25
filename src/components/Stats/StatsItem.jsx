import React from "react";
import { FaStar } from "react-icons/fa";
const StatsItem = ({ size, color, content }) => {
  let itemContent = content;

  return (
    <div className={`stats-item ${color} ${size}`}>
    
      {size === "stats-large" ? (
        <>
        <h2><FaStar className="green-star"></FaStar> <span>{itemContent.h1}</span></h2>
         
          <div className="second-row">
            <h4>{content.h4}</h4>
            <h4>
              {content.h4Rating}
              <span><FaStar className="yellow-star"></FaStar></span>
            </h4>
          </div>
        </>
      ) : (<>
        <h2>{itemContent.h1}</h2>
        <h4>{itemContent.h4}</h4></>
      )}
    </div>
  );
};

export default StatsItem;
