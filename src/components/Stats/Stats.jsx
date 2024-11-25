import React from "react";
import "./Stats.css";
import StatsItem from "./StatsItem.jsx";
const Stats = () => {
  let content = [
    {
      h1: "60K+",
      h4: "Live Courses",
    },
    { h1: "35K+", h4: "Category" },
    { h1: "Trustpilot",h4:"View our 1,602 reviews" ,h4Rating:"4.9"},
    {
      h1: "25K+",
      h4: "Professionals",
    },
    { h1: "125K+", h4: "Students" },
  ];
  return (
    <div className="stats">
      <StatsItem color="stats-gray" size="stats-small" content={content[0]} />
      <StatsItem color="stats-green" size="stats-small" content={content[1]} />
      <StatsItem color="stats-gray" size="stats-large" content={content[2]} />
      <StatsItem color="stats-green" size="stats-small" content={content[3]} />
      <StatsItem color="stats-gray" size="stats-small" content={content[4]} />
    </div>
  );
};

export default Stats;
