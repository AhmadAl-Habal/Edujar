import React from "react";
import Course from "./Course.jsx";
import lessonIcon from "../../assets/course-lesson-icon.png";
import brandIcon from "../../assets/brand-icon2.png";
const CoursesList = () => {

  let listContent = [
    {
      index: 0,
      lessonNumber: 25,
      label: "Design",
      title: "Supervised Machine Learning: Regression and Classification",
      desc: "For athletes, high altitude produces two contradi effects on performance.",
      lessonIcon: lessonIcon,
      brandIcon: brandIcon,
    },
    {
      index: 1,
      lessonNumber: 25,
      label: "Design",
      title: "Supervised Machine Learning: Regression and Classification",
      desc: "For athletes, high altitude produces two contradi effects on performance.",
      lessonIcon: lessonIcon,
      brandIcon: brandIcon,
    },
    {
      index: 2,
      lessonNumber: 25,
      label: "Design",
      title: "Supervised Machine Learning: Regression and Classification",
      desc: "For athletes, high altitude produces two contradi effects on performance.",
      lessonIcon: lessonIcon,
      brandIcon: brandIcon,
    },
    {
      index: 3,
      lessonNumber: 25,
      label: "Design",
      title: "Supervised Machine Learning: Regression and Classification",
      desc: "For athletes, high altitude produces two contradi effects on performance.",
      lessonIcon: lessonIcon,
      brandIcon: brandIcon,
    },
    {
      index: 4,
      lessonNumber: 25,
      label: "Design",
      title: "Supervised Machine Learning: Regression and Classification",
      desc: "For athletes, high altitude produces two contradi effects on performance.",
      lessonIcon: lessonIcon,
      brandIcon: brandIcon,
    },
    {
      index: 5,
      lessonNumber: 25,
      label: "Design",
      title: "Supervised Machine Learning: Regression and Classification",
      desc: "For athletes, high altitude produces two contradi effects on performance.",
      lessonIcon: lessonIcon,
      brandIcon: brandIcon,
    },
  ];
  return (
    <div className="courses-list">
      {listContent.map((lesson) => (
        <Course
          key={lesson.index}
          lessonNumber={lesson.lessonNumber}
          label={lesson.label}
          title={lesson.title}
          desc={lesson.desc}
          lessonIcon={lesson.lessonIcon}
          brandIcon={brandIcon}
        />
      ))}
    </div>
  );
};

export default CoursesList;
