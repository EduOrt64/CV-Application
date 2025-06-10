
import { BasicInfo } from "./basicInfo";
import { useState } from "react";
import { CvTemplate } from "./cvTemplate";
import { EducationInfo } from "./educationInfo";
import { SkillInfo } from "./skillsInfo";
import { Experience } from "./experience";
import type { Company } from "./experience";

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
    <div className="p-10 text-center ">
      <h1 className="text-4xl font-bold mb-4 text-accent">Your CV Builder</h1>
      <p>Start building your curriculum here 🚀</p>
      <div className="flex flex-col sm:flex-row justify-around ">
        <div className="max-h-screen overflow-scroll" >
          <BasicInfo
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
         
        

          <Experience 
          company={company}
          setCompany={setCompany}
          />
          <EducationInfo 
          school={school}
          setSchool={setSchool}
           startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          title= {univTitle}
          setUnivTitle= {setUnivTitle}
          />

           <h1 className="text-center text-xl font-bold text-secondary mr-8">Skills</h1>

           <SkillInfo skills={skills}
                      setSkills={setSkills} />
        </div>

        <div>
          <CvTemplate name={name} email={email} phone={phone} school={school} educationStartDate={startDate} educationEndDate={endDate} title={univTitle} skills={skills}/>
        </div>
      </div>
    </div>
  );
}
