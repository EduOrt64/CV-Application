import { BasicInfo } from "./basicInfo";
import { useState } from "react";
import { CvTemplate } from "./cvTemplate";
import { EducationInfo } from "./educationInfo";
import { SkillInfo } from "./skillsInfo";
import { Experience } from "./experience";
import type { Company } from "./experience";
import { DownloadPdfButton } from "./components";

export function CVUI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [univTitle, setUnivTitle] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [company, setCompany] = useState<Company[]>([]);

  return (
    <div className=" text-center ">
      <div className="navbar bg-base-200 shadow-sm flex flex-row justify-around">
        <div className="w-xs"></div>
        <p>Start building your curriculum here 🚀</p>
        <DownloadPdfButton
          data={{
            name,
            email,
            phone,
            school,
            educationStartDate: startDate,
            educationEndDate: endDate,
            title: univTitle,
            skills,
            company,
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-around mt-4 ">
        <div className="max-h-screen overflow-scroll">
          <div className="flex flex-row gap-2 align-center ">
            <span className="w-10 h-10">
              <svg
                className="w-10 h-10 fill-accent"
                viewBox="-10 -5 1034 1034"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M160 324q-67 0 -113.5 46.5t-46.5 113.5v286q0 66 46.5 113t113.5 47h680q67 0 113.5 -47t46.5 -113v-286q0 -67 -46.5 -113.5t-113.5 -46.5h-680zM320 405q33 0 51 13q4 2 6 4q23 20 23 67q0 16 -12 52q-2 4 -4.5 11.5t-3.5 8.5q-19 55 -19 65v8q1 4 1 7q2 6 6 13 
    q6 11 17 21h1q10 9 25 17q12 6 29 13l43 17q21 10 29 18l3 2v1l4 6v58h-395v-54q0 -16 36 -33q3 -1 9 -4q3 -1 4 -2q66 -27 83 -42q5 -4 10 -9l2 -3q1 0 1.5 -0.5t0.5 -1.5l1 -2h1l7 -15l1 -7q1 -3 1 -7.5t-7 -23.5l-9 -27q-8 -20 -11 -32q-6 -17 -7 -21q-3 -10 -4 -19 
    l-2 -7v-8q0 -12 2 -23v-1q2 -10 4 -17q6 -16 17 -26q2 -2 6 -4q14 -10 34 -13h16zM743 498q35 0 65 17t49 45l35 -34v108h-109l34 -34q-10 -21 -30 -34t-44 -13q-34 0 -58 24t-24 57.5t24 57.5t59 24t60 -28h64q-17 37 -50.5 59.5t-74.5 22.5q-57 0 -96.5 -39.5t-39.5 -96 
    t39.5 -96.5t96.5 -40z"
                />
              </svg>
            </span>
            <h1 className="text-4xl font-bold mb-4 text-accent"> cvBuilder</h1>
          </div>
          <BasicInfo
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />

          <Experience company={company} setCompany={setCompany} />
          <EducationInfo
            school={school}
            setSchool={setSchool}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            title={univTitle}
            setUnivTitle={setUnivTitle}
          />

          <h1 className="text-center text-xl font-bold text-secondary mr-8">
            Skills
          </h1>

          <SkillInfo skills={skills} setSkills={setSkills} />
        </div>

        <div>
          <div className="p-4"></div>
          <CvTemplate
            name={name}
            email={email}
            phone={phone}
            school={school}
            educationStartDate={startDate}
            educationEndDate={endDate}
            title={univTitle}
            skills={skills}
            company={company}
          />
        </div>
      </div>
    </div>
  );
}
