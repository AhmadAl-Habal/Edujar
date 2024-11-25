import React from "react";
import Category from "./Category.jsx";
import "./Categories.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import categoriesBackground from "../../assets/categories-background.png";
import artAndDesign from "../../assets/Art&Design.svg";
import communication from "../../assets/Communication.png";
import financeAndBank from "../../assets/Finance & Bank.png";
import marketing from "../../assets/Marketing.png";
import photography from "../../assets/Photography.png";


const icons = import.meta.glob("../../assets/*.svg", { eager: true });

const Categories = () => {

  return (
    <div className="categories">
      <header>
        <h1>Explore Top Categories</h1>
        <h5>Click on the categories and explore all courses</h5>
      </header>

      <div className="categories-slider">
        <div className="design-container">
        <FiChevronLeft className="swap-arrow"/>
        <Category img={artAndDesign} categoryTitle="Art &Design" />
        <Category img={communication} categoryTitle="Communication" />
        <Category img={financeAndBank} categoryTitle="Finance & Bank   " />
        <Category img={marketing} categoryTitle="Marketing  " />
        <Category img={photography} categoryTitle="Photography" />
        <FiChevronRight className="swap-arrow"/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
