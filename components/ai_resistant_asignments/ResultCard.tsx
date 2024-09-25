import React from "react";
import { FaBookOpen, FaBrain } from "react-icons/fa";

type Idea = {
  assignment_description: string;
  explanation: string;
};

type ResultData = {
  topic: string;
  grade_level: string;
  ideas: Idea[];
};

interface ResultCardProps {
  data: ResultData;
}

const ResultCard: React.FC<ResultCardProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 my-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          {data.topic} 🎓
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Grade Level: <span className="font-semibold">{data.grade_level.toUpperCase()}</span> 🏫
        </p>
      </div>
      {data.ideas.map((idea, index) => (
        <div key={index} className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-4 rounded-lg mb-4 shadow-md transition-transform transform hover:scale-105">
          <div className="flex items-center mb-2">
            <FaBookOpen className="text-green-500 dark:text-green-400 text-2xl mr-2" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Assignment #{index + 1} 🧠</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">{idea.assignment_description}</p>
          <div className="flex items-center mb-2">
            <FaBrain className="text-blue-500 dark:text-blue-300 text-2xl mr-2" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">Why AI-Resistant? 🤖</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-400">{idea.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultCard;
