interface CvTemplateProps {
  name: string;
  email: string;
  phone: string;
  school: string;
  educationStartDate: string;
  educationEndDate: string;
  title: string;
  skills: string[];
}

export function CvTemplate({
  name,
  email,
  phone,
  school,
  educationStartDate,
  educationEndDate,
  title,
  skills,
}: CvTemplateProps) {
  return (
    <div>
      <div className="bg-neutral-content p-6 rounded shadow text-left min-w-2xl mt-8">
        <div>
          <h1 className="text-2xl text-neutral font-bold font-[Inter]">
            {name || "John Doe"}
          </h1>
          <h2 className="text-neutral font-semibold font-[Inter]">
            {email || "john@thisisnotanemail.com"}
          </h2>
          <h2 className="text-neutral font-semibold font-[Inter]">
            {phone || "0011223344"}{" "}
          </h2>
        </div>

        <div className="divider divider-neutral"></div>

       <div>
       <h1 className="text-2xl text-center text-neutral font-bold font-[Inter]">Experience</h1>

       </div>

        <div className="divider divider-neutral"></div>
        <div className="flex flex-row">
          <div className="flex-1">
            <h1 className="text-2xl text-neutral font-bold font-[Inter]">
              Education
            </h1>
            <div>
              <h2 className="text-neutral font-normal font-[Inter]">School</h2>
              <h3 className="text-neutral font-semibold font-[Inter]">
                {school || "Michigan University"}
              </h3>
              <h5 className="text-neutral font-lighter font-[Inter]">
                {title || "MBA"}
              </h5>
              <h4 className="text-neutral font-light font-[Inter] text-sm">
                From {educationStartDate || "06/06/2025"} to{" "}
                {educationEndDate || "06/06/2025"}
              </h4>
            </div>
          </div>

          <div className="divider divider-neutral lg:divider-horizontal"></div>

          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-2xl text-center text-neutral font-bold font-[Inter]">
              Skills
            </h1>

            <div className="flex flex-col items-center">
              <ul className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-neutral text-neutral-content px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
