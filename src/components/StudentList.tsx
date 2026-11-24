
import React from "react";
import { Student } from "../types/Student";
import { Trash2 } from "lucide-react";

interface StudentListProps {
  students: Student[];
  onDelete: (id: number) => void;
}

export const StudentList: React.FC<StudentListProps> = ({
  students,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto rounded-lg border shadow-sm">
      <table className="w-full text-left divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-700">#</th>
            <th className="px-4 py-2 font-medium text-gray-700">Name</th>
            <th className="px-4 py-2 font-medium text-gray-700">Email</th>
            <th className="px-4 py-2 font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student, index) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">
                {student.firstName} {student.lastName}
              </td>
              <td className="px-4 py-2">{student.email}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onDelete(student.id)}
                  className="inline-flex items-center text-red-600 hover:text-red-800"
                  aria-label={`Delete ${student.firstName} ${student.lastName}`}
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                No students added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};