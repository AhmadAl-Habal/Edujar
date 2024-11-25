import React from "react";
import "./References.css";
import StandingWomen from "../../assets/standing-women.png";
import Quetation from "../../assets/references quotation.svg";
import BackgroundCard from "../../assets/categories-background.png";
import Reference1 from "../../assets/reference1.png";
import Reference2 from "../../assets/reference2.png";
import Reference3 from "../../assets/reference3.png";
import Reference4 from "../../assets/reference4.png";
import Reference5 from "../../assets/reference5.png";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const References = () => {
  return (
    <div className="references">
      <div className="standing-women-container">
        <img src={StandingWomen} alt="" />
      </div>
      <div className="reference-card">
        <h1>What our client’s say</h1>
        <img src={Quetation} alt="" />
        <h4>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim.
        </h4>
        <h3>Adrian Smith</h3>
        <div className="reference-slider">
          <FiChevronLeft className="swap-arrow" />
          <img src={Reference1} alt="" />
          <img src={Reference2} alt="" />
          <img src={Reference3} alt="" />
          <img src={Reference4} alt="" />
          <img src={Reference5} alt="" />
          <FiChevronRight className="swap-arrow" />
        </div>
      </div>
    </div>
  );
};

export default References;
