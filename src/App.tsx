
import React, { useState, useCallback } from "react";
import { Users } from "lucide-react";
import { StudentList } from "./components/StudentList";
import { AddStudentForm } from "./components/AddStudentForm";
import { Student } from "./types/Student";

export const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const handleAddStudent = useCallback(
    (data: { firstName: string; lastName: string; email: string }) => {
      const newStudent: Student = {
        id: Date.now(),
        ...data,
      };
      setStudents((prev) => [...prev, newStudent]);
    },
    []
  );

  const handleDeleteStudent = useCallback((id: number) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2 text-indigo-600">
            <Users size={28} />
            <span className="text-2xl font-bold">Student Hub</span>
          </div>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#students" className="hover:text-indigo-500">
                Students
              </a>
            </li>
            <li>
              <a href="#add" className="hover:text-indigo-500">
                Add Student
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Manage Your Students Efficiently
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            Add, view, and organize student records in a clean, responsive
            interface. Perfect for schools, tutors, and training programs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Student List Section */}
        <section id="students">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Users size={22} className="text-indigo-600" />
            Student Roster
          </h2>
          <StudentList students={students} onDelete={handleDeleteStudent} />
        </section>

        {/* Add Student Section */}
        <section id="add">
          <AddStudentForm onAdd={handleAddStudent} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Student Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;