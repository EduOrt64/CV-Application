import { useState } from "react";
import { Input } from "./components";

interface SkillsInputProps {
  skills: string[];
  setSkills: (skills: string[]) => void;
}

export function SkillInfo({ skills, setSkills }: SkillsInputProps) {
  const [input, setInput] = useState("");

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
    }
    setInput("");
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-accent text-blue-800 px-3 py-1 rounded-full flex items-center gap-1"
          >
            {skill || "Salesforce"}
            <button
              onClick={() => removeSkill(index)}
              className="text-blue-600 hover:text-blue-800 font-bold"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input input-secondary input-sm"
          placeholder="Type a skill and press Enter"
        />
        <button onClick={addSkill} className="btn btn-ghost">
          Add
        </button>
      </div>
    </div>
  );
}
