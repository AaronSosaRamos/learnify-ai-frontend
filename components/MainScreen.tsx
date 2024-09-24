import { FaBookOpen, FaClipboardCheck, FaShieldAlt, FaTasks } from 'react-icons/fa';
import Link from 'next/link'; 

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300 ease-in-out">
            <div className="container mx-auto px-6 py-10">
                <h1 className="text-5xl text-white font-bold text-center text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-300 animate-pulse">
                    Learnify AI 📘✨
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link href="/syllabus-generator" passHref>
                        <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <FaBookOpen className="text-6xl text-indigo-500 dark:text-indigo-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                                Syllabus Generator 📚
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Create a detailed syllabus for any course in seconds using AI.
                            </p>
                        </div>
                    </Link>

                    <Link href="/rubric-generator" passHref>
                        <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <FaClipboardCheck className="text-6xl text-green-500 dark:text-green-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                                Rubric Generator 📝
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Generate precise rubrics aligned with learning objectives.
                            </p>
                        </div>
                    </Link>

                    <Link href="/ai-resistant-assignments" passHref>
                        <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <FaShieldAlt className="text-6xl text-red-500 dark:text-red-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                                AI-Resistant Assignments 🛡️
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Design assignments resistant to AI-generated cheating.
                            </p>
                        </div>
                    </Link>

                    <Link href="/personalized-tasks" passHref>
                        <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <FaTasks className="text-6xl text-yellow-500 dark:text-yellow-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                                Personalized Tasks ✨
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Create personalized tasks for each student based on their needs.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
