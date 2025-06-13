import type { Company } from "./experience";

interface CvTemplateProps {
  name: string;
  email: string;
  phone: string;
  school: string;
  educationStartDate: string;
  educationEndDate: string;
  title: string;
  skills: string[];
  company: Company[];
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
  company,
}: CvTemplateProps) {
  return (
    <div>
      <div className="bg-neutral-content p-6 rounded shadow text-left max-h-[1123px] w-[794px] mt-8">
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
          <h1 className="text-2xl text-neutral font-bold font-[Inter] mb-4">
            Experience
          </h1>

          {company.length > 0 ? (
            company.map((comp, index) => (
              <div key={index} className="flex flex-1 flex-col ">
                <h2 className="text-lg text-neutral font-semibold font-[Inter] ">
                  {comp.name}
                </h2>
                <h3 className="text-sm text-neutral font-light font-[Inter]">
                  {comp.role}
                </h3>
                <h3 className="text-xs text-neutral font-semibold font-[Inter]">
                  {comp.period}
                </h3>
                <p className="text-xs text-neutral font-light font-[Inter] max-w-lg text-justify">
                  {comp.description}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col">
              <h2 className="text-lg text-neutral font-semibold font-[Inter]">
                Great-Tech
              </h2>
              <h3 className="text-sm text-neutral font-light font-[Inter]">
                Front-End Dev
              </h3>
              <h3 className="text-xs text-neutral font-semibold font-[Inter]">
                06/06/2025
              </h3>
              <p className="text-xs text-neutral font-light font-[Inter] max-w-lg text-justify">
                Managed a portfolio of over 50 client accounts, ensuring high
                customer satisfaction and retention rates. Acted as the primary
                point of contact for clients, resolving issues promptly and
                building strong, trust-based relationships. Collaborated with
                the sales and design teams to align client expectations with
                project deliverables. Analyzed client performance metrics to
                provide actionable insights and tailored recommendations. Upsold
                additional services, contributing to a 15% increase in revenue
                within the first year.
              </p>
            </div>
          )}
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
                {skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-neutral text-neutral-content px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </li>
                  ))
                ) : (
                  <>
                    <li className="bg-neutral text-neutral-content px-3 py-1 rounded-full text-sm font-medium">
                      HTML
                    </li>
                    <li className="bg-neutral text-neutral-content px-3 py-1 rounded-full text-sm font-medium">
                      CSS
                    </li>
                    <li className="bg-neutral text-neutral-content px-3 py-1 rounded-full text-sm font-medium">
                      JavaScript
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
