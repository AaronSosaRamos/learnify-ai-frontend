import React from 'react';
import { FaChalkboardTeacher, FaBook, FaClipboardList, FaRegClock, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

interface SyllabusGeneratorDataProps {
    syllabusGeneratorData: any;
}

const SyllabusGeneratorResults: React.FC<SyllabusGeneratorDataProps> = ({ syllabusGeneratorData }) => {
    const {
        course_information,
        instructor_information,
        course_description_objectives,
        course_content,
        policies_procedures,
        assessment_grading_criteria,
        learning_resources,
        course_schedule
    } = syllabusGeneratorData;

    return (
        <div className="p-6 transition-all duration-500 ease-in-out transform hover:scale-105 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 flex items-center text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                <FaGraduationCap className="mr-2 text-indigo-500 dark:text-indigo-300 animate-bounce" />
                {course_information.course_title} ({course_information.grade_level}) 📘
            </h1>
            <p className="mb-6 text-gray-700 dark:text-gray-300">{course_information.description}</p>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-blue-500 dark:text-blue-300 transition-all duration-300">
                <FaChalkboardTeacher className="mr-2 text-blue-600 dark:text-blue-400" />
                Instructor Information 👨‍🏫
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300"><strong>Name:</strong> {instructor_information.name}</p>
            <p className="mb-6 text-gray-700 dark:text-gray-300"><strong>Title:</strong> {instructor_information.title}</p>
            <p className="mb-6 text-gray-700 dark:text-gray-300"><strong>Description:</strong> {instructor_information.description_title}</p>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-green-500 dark:text-green-300 transition-all duration-300">
                <FaClipboardList className="mr-2 text-green-600 dark:text-green-400" />
                Course Objectives 🎯
            </h2>
            <ul className="list-disc ml-6 mb-4">
                {course_description_objectives.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:translate-x-2">
                        <FaCheckCircle className="mr-2 text-green-600 dark:text-green-400" />
                        {objective}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-purple-500 dark:text-purple-300 transition-all duration-300">
                <FaClipboardList className="mr-2 text-purple-600 dark:text-purple-400" />
                Intended Learning Outcomes 🧠
            </h2>
            <ul className="list-disc ml-6 mb-4">
                {course_description_objectives.intended_learning_outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:translate-x-2">
                        <FaCheckCircle className="mr-2 text-green-600 dark:text-green-400" />
                        {outcome}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-pink-500 dark:text-pink-300 transition-all duration-300">
                <FaBook className="mr-2 text-pink-600 dark:text-pink-400" />
                Course Content 📚
            </h2>
            <ul className="list-decimal ml-6 mb-4">
                {course_content.map((content: any, index: number) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:translate-x-2">
                        <FaRegClock className="mr-2 text-pink-600 dark:text-pink-400" />
                        {content.unit_time_value} {content.unit_time} - {content.topic}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-yellow-500 dark:text-yellow-300 transition-all duration-300">
                <FaClipboardList className="mr-2 text-yellow-600 dark:text-yellow-400" />
                Policies and Procedures 📋
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300"><strong>Attendance Policy:</strong> {policies_procedures.attendance_policy}</p>
            <p className="mb-6 text-gray-700 dark:text-gray-300"><strong>Late Submission Policy:</strong> {policies_procedures.late_submission_policy}</p>
            <p className="mb-6 text-gray-700 dark:text-gray-300"><strong>Academic Honesty:</strong> {policies_procedures.academic_honesty}</p>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-teal-500 dark:text-teal-300 transition-all duration-300">
                <FaClipboardList className="mr-2 text-teal-600 dark:text-teal-400" />
                Assessment and Grading Criteria 📝
            </h2>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Assessment Methods</h3>
            <ul className="list-disc ml-6 mb-4">
                {assessment_grading_criteria.assessment_methods.map((method: any, index: number) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:translate-x-2">
                        <FaCheckCircle className="mr-2 text-green-600 dark:text-green-400" />
                        {method.type_assessment} - Weight: {method.weight}%
                    </li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Grading Scale</h3>
            <ul className="list-disc ml-6 mb-4">
                {Object.entries(assessment_grading_criteria.grading_scale).map(([grade, range]) => (
                    <li key={grade} className="flex items-center text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:translate-x-2">
                        <FaCheckCircle className="mr-2 text-green-600 dark:text-green-400" />
                        {grade}: {String(range)}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-red-500 dark:text-red-300 transition-all duration-300">
                <FaBook className="mr-2 text-red-600 dark:text-red-400" />
                Learning Resources 📖
            </h2>
            <ul className="list-disc ml-6 mb-4">
                {learning_resources.map((resource: any, index: number) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:translate-x-2">
                        {resource.title} by {resource.author} ({resource.year})
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2 flex items-center text-indigo-500 dark:text-indigo-300 transition-all duration-300">
                <FaRegClock className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Course Schedule 🗓️
            </h2>
            <ul className="list-decimal ml-6 mb-4">
                {course_schedule.map((schedule: any, index: number) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:translate-x-2">
                        <FaRegClock className="mr-2 text-indigo-600 dark:text-indigo-400" />
                        {schedule.date} - {schedule.topic}: {schedule.activity_desc}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SyllabusGeneratorResults;
