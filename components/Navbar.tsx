import { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Learnify AI ✨
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/">
            <span className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300">
              Home
            </span>
          </Link>
          <Link href="/syllabus-generator">
            <span className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300">
              Syllabus Generator 📚
            </span>
          </Link>
          <Link href="/rubric-generator">
            <span className="text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-300">
              Rubric Generator 📝
            </span>
          </Link>
          <Link href="/ai-resistant-assignments">
            <span className="text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">
              AI-Resistant Assignments 🛡️
            </span>
          </Link>
          <Link href="/personalized-tasks">
            <span className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-300">
              Personalized Tasks ✨
            </span>
          </Link>

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none">
            {theme === 'light' ? (
              <FaMoon className="text-gray-800" />
            ) : (
              <FaSun className="text-yellow-500" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-200 focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <Link href="/">
            <span onClick={toggleMenu} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300">
              Home
            </span>
          </Link>
          <Link href="/syllabus-generator">
            <span onClick={toggleMenu} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300">
              Syllabus Generator 📚
            </span>
          </Link>
          <Link href="/rubric-generator">
            <span onClick={toggleMenu} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-300">
              Rubric Generator 📝
            </span>
          </Link>
          <Link href="/ai-resistant-assignments">
            <span onClick={toggleMenu} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">
              AI-Resistant Assignments 🛡️
            </span>
          </Link>
          <Link href="/personalized-tasks">
            <span onClick={toggleMenu} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-300">
              Personalized Tasks ✨
            </span>
          </Link>

          <div className="block px-4 py-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none w-full flex justify-center">
              {theme === 'light' ? (
                <FaMoon className="text-gray-800" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
