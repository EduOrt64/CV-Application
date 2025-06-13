import { useState } from "react";
import { Input } from "./components";
import { EducationCal } from "./educationDate";

export interface Company {
  name: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  company: Company[];
  setCompany: (company: Company[]) => void;
}

export function Experience({ company, setCompany }: ExperienceProps) {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");

  const addCompany = () => {
    const trimmedName = companyName.trim();
    const trimmedRole = role.trim();
    const trimmedPeriod = period.trim();
    const trimmedDescription = description.trim();

    if (
      trimmedName &&
      trimmedRole &&
      trimmedPeriod &&
      trimmedDescription &&
      !company.some((c) => c.name === trimmedName)
    ) {
      const newCompany: Company = {
        name: trimmedName,
        role: trimmedRole,
        period: trimmedPeriod,
        description: trimmedDescription,
      };

      setCompany([...company, newCompany]);
    }

    setCompanyName("");
    setRole("");
    setPeriod("");
  };

  const removeCompany = (index: number) => {
    setCompany(company.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold text-secondary mt-4 mb-4">
        Experience
      </h1>

      {company.length > 0 && (
        <ul className="menu bg-base-200 rounded-box p-2 mb-4 max-h-48 overflow-auto">
          {company.map((comp, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="truncate">{comp.name}</span>
              <button
                onClick={() => removeCompany(index)}
                className="btn btn-xs btn-error ml-2"
                aria-label={`Remove ${comp.name}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-4 mb-4">
        <Input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="input input-secondary input-sm"
          placeholder="Company Name"
        />
        <Input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input input-secondary input-sm"
          placeholder="Role"
        />
        <EducationCal
          calLabel="Period"
          inputValue={period}
          setInputValue={setPeriod}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-secondary textarea-sm w-full my-2"
          placeholder="Describe your responsibilities or achievements"
        />
      </div>

      <button onClick={addCompany} className="btn btn-primary w-full">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current text-secondary"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
            fill="currentColor"
          />
        </svg>
        Add Company
      </button>
    </div>
  );
}
