

import { useState } from "react";
const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;
    onAddStudent(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Name"
        className="border px-2 py-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="border px-2 py-1"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default StudentForm;
