import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaStar } from "react-icons/fa";

type ScoreRange = {
    label: string;
    min_score: number;
    max_score: number;
    description: string;
};

type Criterion = {
    criterion_name: string;
    score: number | null;
    score_range: ScoreRange[];
    description: string;
};

type RubricData = {
    criteria: Criterion[];
    total_score: number | null;
    max_total_score: number;
};

interface RubricCardProps {
    data: RubricData;
}

const RubricCard: React.FC<RubricCardProps> = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 my-10 transition-colors duration-500">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                Rubric Evaluation
            </h1>

            {data.criteria.map((criterion, index) => (
                <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg mb-6 shadow transition-transform duration-300 hover:scale-[1.02] flex items-start space-x-4"
                >
                    <div className="flex-shrink-0 text-gray-600 dark:text-gray-400">
                        <FaStar size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center space-x-2">
                            {criterion.criterion_name} <FaInfoCircle className="text-gray-500 dark:text-gray-300 pl-2" />
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {criterion.description}
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                            {criterion.score === null ? (
                                <p className="text-yellow-500 dark:text-yellow-400 flex items-center mb-3">
                                    <FaExclamationTriangle className="mr-2" /> Not Yet Evaluated
                                </p>
                            ) : (
                                <p className="text-green-500 dark:text-green-400 flex items-center mb-3">
                                    <FaCheckCircle className="mr-2" /> Score: {criterion.score} /{" "}
                                    {data.max_total_score}
                                </p>
                            )}

                            {criterion.score_range.map((range, rangeIndex) => (
                                <div
                                    key={rangeIndex}
                                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-3 transition-shadow duration-300 hover:shadow-md flex items-start space-x-3"
                                >
                                    <FaCheckCircle className="text-gray-500 dark:text-gray-300" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                            {range.label} ({range.min_score} - {range.max_score})
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {range.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <div className="text-center mt-8">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Total Score:{" "}
                    <span className="font-semibold">
                        {data.total_score !== null ? data.total_score : "Not Evaluated"} /{" "}
                        {data.max_total_score}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RubricCard;
