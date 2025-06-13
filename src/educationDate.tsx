import { useId, useState } from "react";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";

type EducationCalProps = {
  calLabel: string;
  inputValue: string;
  setInputValue: (value: string) => void;
};

export function EducationCal({
  calLabel,
  inputValue,
  setInputValue,
}: EducationCalProps) {
  const inputId = useId();
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(format(date, "MM/dd/yyyy"));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const parsedDate = parse(value, "MM/dd/yyyy", new Date());
    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-semibold">
        {calLabel}
      </label>
      <input
        id={inputId}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="MM/dd/yyyy"
        className="input input-border"
      />
      <div className="mt-2 border rounded-box shadow p-2 bg-base-100 w-fit">
        <DayPicker
          month={month}
          onMonthChange={setMonth}
          mode="single"
          selected={selectedDate}
          onSelect={handleDayPickerSelect}
          className="react-day-picker"
        />
      </div>
    </div>
  );
}
