import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-5 md:flex-row md:justify-between">
      <h1 className="text-lg pl-50px md:text-1xl text-slate-500">
        Recipe Finder
      </h1>
      <label className="input flex itesms-center border border-gray-300 rounded-md p-2 w-full max-w-xs sm:max-w-md md:max-w-lg">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
    </div>
  );
};

export default Header;
