// import React, { useState } from "react";
// import Header from "./components/Header";
// import StudentForm from "./components/StudentForm";
// import StudentList from "./components/StudentList";
import { useState } from "react";
import Header from "./Header";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList ";


function Layout() {
  const [students, setStudents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  const addStudent = (name, number) => {
    const newStudent = {
      id: Date.now(),
      name,
      number,
      isPresent: true,
    };
    setStudents([...students, newStudent]);
    setTotalCount(totalCount + 1);
    setPresentCount(presentCount + 1);
  };

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    );
    setPresentCount(
      students.filter((student) => student.isPresent).length -
        (students.find((s) => s.id === id).isPresent ? 1 : -1)
    );
    setAbsentCount(
      students.filter((student) => !student.isPresent).length +
        (students.find((s) => s.id === id).isPresent ? 1 : -1)
    );
  };

  const deleteStudent = (id) => {
    const isPresent = students.find((s) => s.id === id).isPresent;
    setStudents(students.filter((student) => student.id !== id));
    setTotalCount(totalCount - 1);
    isPresent ? setPresentCount(presentCount - 1) : setAbsentCount(absentCount - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header total={totalCount} present={presentCount} absent={absentCount} />
      <StudentForm onAddStudent={addStudent} />
      <StudentList
        students={students}
        onToggleAttendance={toggleAttendance}
        onDeleteStudent={deleteStudent}
      />
    </div>
  );
}

export default Layout;
