import React from "react";

const TextBox = () => {
  return (
    <div className="flex justify-center mt-8">
      <textarea
        className="w-3/4 h-40 px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
        placeholder="どんなお店を予約したいですか？"
      />
    </div>
  );
};

export default TextBox;
