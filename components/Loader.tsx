import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        className="animate-spin h-10 w-10 text-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2s-.9 2-2 2H6c-1.1 0-2-.9-2-2z"
        />
      </svg>
    </div>
  );
};

export default Loader;
