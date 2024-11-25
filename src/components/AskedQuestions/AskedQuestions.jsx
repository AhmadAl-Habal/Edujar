import React from "react";
import Question from "./Question.jsx";
import "./AskedQuestions.css";
const AskedQuestions = () => {
  let questions = [
    {
      title: "Can Conversix sync my data to my CRM?",
      desc: "Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.",
      operator: "-",
    },
    {
      title: "How much data will I receive?",
      desc: "The amount of data you receive depends on the plan you choose. We offer flexible options to suit your needs, ranging from basic packages for casual use to unlimited plans for heavy usage. Check out our pricing page or contact our support team to find the best plan for you!",
      operator: "+",
    },
    {
      title: "Can marketers use Conversix data on behalf of client?",
      desc: "Yes, marketers can use Conversix data on behalf of their clients, provided they comply with all applicable data usage policies and maintain client consent. Conversix ensures that its data is ethically sourced and secured, empowering marketers to deliver insights and strategies while respecting privacy and compliance regulations.",
      operator: "+",
    },
    {
      title: "How accurate is my data?",
      desc: "Your data’s accuracy depends on various factors, including the source, collection method, and updates. At Conversix, we prioritize delivering high-quality, reliable data by using advanced verification processes and regular updates. This ensures that your data remains accurate, relevant, and actionable for making informed decisions.",
      operator: "+",
    },
  ];
  return (
    <div className="content-container">
      <div className="asked-questions">
        <div className="frequently-asked">
          <h2>Frequently Asked Questions</h2>
          <h1>
            Any Questions? <br />
            Find here.
          </h1>
          <button>Send Message</button>
        </div>
        <div className="questions">
          {questions.map((ques) => (
            <Question
              key={ques.index}
              title={ques.title}
              desc={ques.desc}
              operator={ques.operator}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;
