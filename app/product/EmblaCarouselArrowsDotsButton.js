import React from "react";

export const DotButton = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={`w-7 h-1 flex items-center mx-2 ${
        selected ? "bg-gradient-to-r from-cyan-500 to-blue-500" : ""
      } bg-black rounded-s content-none`}
      type="button"
      onClick={onClick}
    />
  );
};

export const PrevButton = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className="z-1 text-white absolute flex items-center justify-center top-1/2 transform -translate-y-1/2 cursor-pointer w-10 h-10 bg-gray-800 rounded-full left-4"
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className="w-3/5 h-3/5" viewBox="137.718 -1.001 366.563 644">
        <path
          fill="currentColor"
          d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
        />
      </svg>
    </button>
  );
};

export const NextButton = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className="z-1 text-white absolute flex items-center justify-center top-1/2 transform -translate-y-1/2 cursor-pointer w-10 h-10 bg-gray-800 rounded-full left-4"
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className="h-3/5 w-3/5" viewBox="0 0 238.003 238.003">
        <path
          fill="currentColor"
          d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
        />
      </svg>
    </button>
  );
};
