import { FaBookOpen, FaClipboardCheck, FaShieldAlt, FaTasks } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-300 animate-pulse">
          Learnify AI 📘✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaBookOpen className="text-6xl text-indigo-500 dark:text-indigo-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              Syllabus Generator 📚
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Crea un syllabus detallado para cualquier curso en segundos utilizando IA.
            </p>
          </div>

          <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaClipboardCheck className="text-6xl text-green-500 dark:text-green-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              Rubric Generator 📝
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Genera rúbricas precisas y alineadas con los objetivos de aprendizaje.
            </p>
          </div>

          <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaShieldAlt className="text-6xl text-red-500 dark:text-red-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              AI-Resistant Assignments 🛡️
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Diseña tareas resistentes a las trampas generadas por IA.
            </p>
          </div>

          <div className="group relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaTasks className="text-6xl text-yellow-500 dark:text-yellow-300 mb-4 group-hover:rotate-12 transition-transform duration-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              Personalized Tasks ✨
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Crea tareas personalizadas para cada estudiante basadas en sus necesidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
