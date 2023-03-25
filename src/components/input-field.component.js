// input-search component with tailwindcss

import React from "react";

const InputField = () => {
  return (
    <div className="flex justify-center">
      <input
        className="w-1/2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default InputField;
