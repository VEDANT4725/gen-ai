
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Plus } from "lucide-react";

interface AddStudentFormProps {
  onAdd: (student: { firstName: string; lastName: string; email: string }) => void;
}

export const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) return;
    onAdd({ firstName, lastName, email });
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg border p-6 bg-white shadow-sm"
    >
      <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
        <Plus size={20} />
        Add New Student
      </h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={handleChange(setFirstName)}
          className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="John"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={handleChange(setLastName)}
          className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Doe"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={handleChange(setEmail)}
          className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="john.doe@example.com"
          required
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <Plus size={18} />
        Add Student
      </button>
    </form>
  );
};