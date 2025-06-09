
import { BasicInfo } from "./basicInfo";
import { useState } from "react";
import { CvTemplate } from "./cvTemplate";
import { EducationInfo } from "./educationInfo";


export function CVUI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("")

  return (
    <div className="p-10 text-center ">
      <h1 className="text-4xl font-bold mb-4 text-accent">Your CV Builder</h1>
      <p>Start building your curriculum here 🚀</p>
      <div className="flex flex-col sm:flex-row justify-around max-w-full ">
        <div className="max-h-screen overflow-scroll" >
          <BasicInfo
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
          <EducationInfo 
          school={school}
          setSchool={setSchool}/>
        </div>

        <div>
          <CvTemplate name={name} email={email} phone={phone} school={school}/>
        </div>
      </div>
    </div>
  );
}
