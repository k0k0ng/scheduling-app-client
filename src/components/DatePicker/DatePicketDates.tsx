import { useRef, useEffect, Dispatch, SetStateAction } from "react";

type CalendarDateType = {
  dateText: any | null;
  fullDateValue: string | null;
  isSelected: boolean | null;
  cssClasses: string | null;
  handleSelectDate: Dispatch<SetStateAction<string>> | null;
};

export default function DatePicketDates({
  dateText,
  fullDateValue,
  isSelected,
  cssClasses,
  handleSelectDate,
}: CalendarDateType) {
  const dateValue = useRef(fullDateValue);

  useEffect(() => {
    dateValue.current = fullDateValue;
  });

  const dateClicked = () => {
    if (handleSelectDate) {
      if (!isSelected && dateValue.current) {
        handleSelectDate(dateValue.current);
      }
    }
  };

  if (dateText === null) {
    return <li className="flex flex-col justify-between" />;
  }

  return (
    <li
      aria-hidden="true"
      onClick={dateClicked}
      className={`flex flex-col justify-between ${cssClasses} `}
    >
      <p
        className={`flex items-center justify-center ${
          isSelected ? "dateClicked" : ""
        }`}
      >
        {dateText}
      </p>
    </li>
  );
}
