interface CvTemplateProps {
  name: string;
  email: string;
  phone: string;
  school: string;
}

export function CvTemplate({ name, email, phone, school }: CvTemplateProps) {
  return (
    <div>
      <div className="bg-neutral-content p-6 rounded shadow text-left min-w-xl mt-8">
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

        <div className="flex flex-row">
          <div>
            <h1 className="text-2xl text-neutral font-bold font-[Montserrat]">Education</h1>
            <div>
                <h2 className="text-neutral font-normal font-[Montserrat]">School</h2>
                <h3 className="text-neutral font-semibold font-[Montserrat]">{school || "Michigan University"}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
