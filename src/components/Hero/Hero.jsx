import React from "react";
import "./Hero.css";
import manImg from "../../assets/man.png";
import girlImg from "../../assets/girl.png";
const Hero = () => {
  return (
    <div className="content-container">
      <div className="hero">
        <img src={manImg} alt="" />
        <div className="hero-content">
          <h1>Learn with us anywhere with the best  <span class="highlighted-text">experts</span> </h1>
          <h4>We collaborate with 275+ leading universities and companies</h4>
          <div className="hero-input">
            <input type="text" placeholder="What do you want to learn?" />
            <button>Explore</button>
          </div>
        </div>
        <img src={girlImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
