import React from "react";
import "./Sponsers.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Sponser1 from "../../assets/sponser1.svg";
import Sponser2 from "../../assets/sponser2.svg";
import Sponser3 from "../../assets/sponser3.svg";
import Sponser4 from "../../assets/sponser4.svg";
import Sponser5 from "../../assets/sponser5.svg";
const Sponsers = () => {
  return (
    <div className="sponsers">
      <FiChevronLeft className="swap-arrow" />
      <img src={Sponser1} alt="" />
      <img src={Sponser2} alt="" />
      <img src={Sponser3} alt="" />
      <img src={Sponser4} alt="" />
      <img src={Sponser5} alt="" />
      <FiChevronRight className="swap-arrow" />
    </div>
  );
};

export default Sponsers;
