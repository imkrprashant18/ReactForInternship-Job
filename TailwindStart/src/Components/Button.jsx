import React from "react";

function Button({ bText, type, bgColor, hoverBgColor }) {
  return (
    <button
      type={type}
      className={`rounded-lg ${bgColor} px-3 py-2 text-sm font-semibold text-white shadow-sm ${hoverBgColor}focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"`}
    >
      {bText}
    </button>
  );
}

export default Button;
