

import { FaPhoneAlt, FaTrashAlt } from "react-icons/fa";

const StudentList = ({ students, onToggleAttendance, onDeleteStudent }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Student List</h2>
      <ul>
        {students.map((student) => (
          <li
            key={student.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={student.isPresent}
                onChange={() => onToggleAttendance(student.id)}
              />
              <p className={student.isPresent ? "" : "line-through"}>
                {student.name}
              </p>
            </div>
            <div className="flex space-x-4">
              <a href={`tel:${student.number}`}>
                <FaPhoneAlt className="text-green-500 cursor-pointer" />
              </a>
              <FaTrashAlt
                className="text-red-500 cursor-pointer"
                onClick={() => onDeleteStudent(student.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
