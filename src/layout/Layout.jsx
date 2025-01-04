import { useState } from "react";
import Header from "./Header";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList ";
import Modal from "./Modal";

function Layout() {
  const [students, setStudents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [absentModalOpen, setAbsentModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ open: false, studentId: null });

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
    setDeleteModal({ open: false, studentId: null });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      <Header setAbsentModalOpen={setAbsentModalOpen}  total={totalCount} present={presentCount} absent={absentCount} />
      <StudentForm onAddStudent={addStudent} />
      <StudentList
        students={students}
        onToggleAttendance={toggleAttendance}
        onDeleteStudent={(id) => setDeleteModal({ open: true, studentId: id })}
      />
      <button
        onClick={() => setAbsentModalOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded fixed bottom-4 right-4 hover:bg-red-600 transition"
      >
        Absent
      </button>
      {absentModalOpen && (
        <Modal onClose={() => setAbsentModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Absent Students</h2>
          <ul>
          <button  onClick={() => setAbsentModalOpen(false)}>Close</button>
            {students
              .filter((student) => !student.isPresent)
              .map((student) => (
                <li key={student.id} className="border-b py-2">
                  {student.name}
                </li>
              ))}
          </ul>
        </Modal>
      )}
      {deleteModal.open && (
        <Modal onClose={() => setDeleteModal({ open: false, studentId: null })}>
          <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this student?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              onClick={() => deleteStudent(deleteModal.studentId)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Yes
            </button>
            <button
              onClick={() => setDeleteModal({ open: false, studentId: null })}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              No
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Layout;






































// import { useState } from "react";
// import Header from "./Header";
// import StudentForm from "./StudentForm";
// import StudentList from "./StudentList ";


// function Layout() {
//   const [students, setStudents] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [presentCount, setPresentCount] = useState(0);
//   const [absentCount, setAbsentCount] = useState(0);

//   const addStudent = (name, number) => {
//     const newStudent = {
//       id: Date.now(),
//       name,
//       number,
//       isPresent: true,
//     };
//     setStudents([...students, newStudent]);
//     setTotalCount(totalCount + 1);
//     setPresentCount(presentCount + 1);
//   };

//   const toggleAttendance = (id) => {
//     setStudents(
//       students.map((student) =>
//         student.id === id
//           ? { ...student, isPresent: !student.isPresent }
//           : student
//       )
//     );
//     setPresentCount(
//       students.filter((student) => student.isPresent).length -
//         (students.find((s) => s.id === id).isPresent ? 1 : -1)
//     );
//     setAbsentCount(
//       students.filter((student) => !student.isPresent).length +
//         (students.find((s) => s.id === id).isPresent ? 1 : -1)
//     );
//   };

//   const deleteStudent = (id) => {
//     const isPresent = students.find((s) => s.id === id).isPresent;
//     setStudents(students.filter((student) => student.id !== id));
//     setTotalCount(totalCount - 1);
//     isPresent ? setPresentCount(presentCount - 1) : setAbsentCount(absentCount - 1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <Header total={totalCount} present={presentCount} absent={absentCount} />
//       <StudentForm onAddStudent={addStudent} />
//       <StudentList
//         students={students}
//         onToggleAttendance={toggleAttendance}
//         onDeleteStudent={deleteStudent}
//       />
//     </div>
//   );
// }

// export default Layout;
