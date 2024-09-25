import React from "react";
import { FaToolbox, FaCalendarAlt, FaLightbulb, FaExclamationTriangle } from "react-icons/fa";
import { LuClipboardSignature } from "react-icons/lu";

type Recommendation = {
  project_overview: string;
  rationale: string;
  difficulty_level: string;
  required_tools: string[];
  estimated_time: string;
};

type RecommendationsData = {
  recommendations: Recommendation[];
};

interface ProjectRecommendationsProps {
  data: RecommendationsData;
}

const Recommendations: React.FC<ProjectRecommendationsProps> = ({ data }) => {
  const getIconForProject = (index: number) => {
    const colors = ["text-pink-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500"];
    const colorClass = colors[index % colors.length];
  
    return <LuClipboardSignature className={`${colorClass} text-3xl mr-2`} />;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 my-8">
      <h1 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
        Recommended Projects ✨
      </h1>
      {data.recommendations.map((recommendation, index) => (
        <div key={index} className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-4 rounded-lg mb-6 shadow-md transition-transform transform hover:scale-105">
          <div className="flex items-center mb-2">
            {getIconForProject(index)}
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Project #{index + 1} 🎯</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">{recommendation.project_overview}</p>
          <div className="flex items-center mb-2">
            <FaLightbulb className="text-yellow-500 text-2xl mr-2" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">Rationale 💡</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-400 mb-4">{recommendation.rationale}</p>
          
          <div className="flex items-center mb-2">
            <FaExclamationTriangle className="text-red-500 text-2xl mr-2" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">Difficulty Level ⚙️</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-400 mb-4">{recommendation.difficulty_level}</p>

          <div className="flex items-center mb-2">
            <FaToolbox className="text-indigo-500 text-2xl mr-2" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">Required Tools 🛠️</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4">
            {recommendation.required_tools.map((tool, toolIndex) => (
              <li key={toolIndex}>{tool}</li>
            ))}
          </ul>

          <div className="flex items-center mb-2">
            <FaCalendarAlt className="text-green-500 text-2xl mr-2" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">Estimated Time ⏳</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-400">{recommendation.estimated_time}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
