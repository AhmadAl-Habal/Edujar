import React from "react";

import "./Courses.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import CoursesList from "./CoursesList.jsx";

const Courses = () => {
  return (
    <div className="courses">
      <div className="content-container">
        <header>
          <h1>Popular Courses</h1>
          <div className="second-row">
            <h5>
              Let’s join our best classess with our famous instructor and
              institutes
            </h5>

            <div className="courses-arrows">
              <FiChevronLeft className="swap-arrow" />
              <FiChevronRight className="swap-arrow" />
            </div>
          </div>
        </header>
        <CoursesList />
        <div className="courses-footer"><button>Explore Courses</button></div>
      </div>
    </div>
  );
};

export default Courses;
