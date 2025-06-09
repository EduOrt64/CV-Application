import { Input } from "./components";
import "cally";
import { EducationCal } from "./educationDate";


export interface EducationProps {
  school: string;
  setSchool: (value: string) => void;
}

export function EducationInfo({ school, setSchool }: EducationProps) {
  return (
    <div className="flex flex-row gap-10 mt-6 ">
      <form className="flex flex-col gap-4">
        <h1 className=" text-xl font-bold text-secondary mr-8">
          Education
        </h1>

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

          
<EducationCal calLabel="Start date"/>

 <div className="divider divider-neutral">And</div>

<EducationCal calLabel="End date" />
         
        </div>
      </form>
    </div>
  );
}
