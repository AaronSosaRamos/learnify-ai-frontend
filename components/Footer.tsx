import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {currentYear} Learnify AI. All rights reserved.
        </p>
        <p className="text-sm mt-2 md:mt-0">
          Made by: <span className="font-bold">Wilfredo Aaron Sosa Ramos</span>
        </p>
      </div>
    </footer>
  );
}
