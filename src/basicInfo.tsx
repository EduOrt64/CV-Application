import { Input } from "./components";

export interface BasicInfoProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
}

export function BasicInfo({name, setName, email, setEmail, phone, setPhone } : BasicInfoProps) {


  return (
    <div className="flex flex-row gap-8 mt-6 ">
      <form >
        <h1 className="text-center text-xl font-bold text-secondary">Basic info</h1>

        <div className="flex flex-col gap-4">
          <label className="text-md font-semibold text-start">Name:</label>
          <Input
            type="text"
            placeholder="John Doe"
            className="input input-secondary"
            value ={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-md font-semibold text-start">Email:</label>
          <Input
            type="email"
            placeholder="john@thisisnotanemail.com"
            className="input input-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-md font-semibold text-start">Phone:</label>
          <Input
            type="text"
            placeholder="0011223344"
            className="input input-secondary"
            value ={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
