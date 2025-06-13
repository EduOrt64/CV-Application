import { Input } from "./components";
import "cally";
import { EducationCal } from "./educationDate";

export interface EducationProps {
  school: string;
  setSchool: (value: string) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  title: string;
  setUnivTitle: (value: string) => void;
}

export function EducationInfo({
  school,
  setSchool,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  title,
  setUnivTitle,
}: EducationProps) {
  return (
    <div className="flex flex-row gap-10 mt-6 ">
      <form className="flex flex-col gap-4">
        <h1 className=" text-xl font-bold text-secondary mr-8">Education</h1>

        <div className="flex flex-col gap-4">
          <label className="floating-label">
            <Input
              type="text"
              placeholder="Michigan University"
              className="input input-md"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
            <span>School</span>
          </label>

          <EducationCal
            inputValue={startDate}
            setInputValue={setStartDate}
            calLabel="Start date"
          />

          <div className="divider divider-neutral">And</div>

          <EducationCal
            calLabel="End date"
            inputValue={endDate}
            setInputValue={setEndDate}
          />

          <label className="floating-label">
            <Input
              type="text"
              placeholder="Professional Title"
              className="input input-md mb-4"
              value={title}
              onChange={(e) => setUnivTitle(e.target.value)}
            />
            <span>Professional Title</span>
          </label>
        </div>
      </form>
    </div>
  );
}
