import React from "react";

const Course = ({ key, lessonNumber, label, title, desc, lessonIcon ,brandIcon}) => {
  console.log(key);

  return (
    <div className={`course course-${key}`}>
      <div className="course-header">
        <div className="courses-lessons-number">
          <img src={lessonIcon} alt="" />
          <h5>
            <span className="lessons-number">{lessonNumber}x Lesson</span>
          </h5>
        </div>
        <h4 className="label">{label}</h4>
      </div>

      <h2>{title}</h2>
      <h3>{desc}</h3>
      <hr />
      <div className="join-section">
        <button>Join</button>
        <img src={brandIcon} alt="" />
      </div>
    </div>
  );
};

export default Course;
