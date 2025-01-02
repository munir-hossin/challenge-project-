
// import React from "react";

const Header = ({ total, present, absent }) => {
  return (
    <div className="text-center mb-4">
      <h1 className="text-3xl font-bold text-gray-800">Student Counter</h1>
      <div className="flex justify-center space-x-4 mt-2">
        <p>Total: {total}</p>
        <p>Present: {present}</p>
        <p>Absent: {absent}</p>
      </div>
    </div>
  );
};

export default Header;
