import { useRef, useEffect, Dispatch, SetStateAction } from "react";

import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";

type CalendarDateType = {
  dateText: any | null;
  fullDateValue: string | null;
  dateStatus: string | null;
  isSelected: boolean | null;
  cssClasses: string | null;
  handleSelectDate: Dispatch<SetStateAction<string>> | null;
};

export default function CalendarDate({
  dateText,
  fullDateValue,
  dateStatus,
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
      } else {
        handleSelectDate("");
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
      className={`flex flex-col justify-between ${cssClasses} ${
        isSelected ? "dateClicked" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-x-1 px-2 py-1">
          <button
            aria-label="stickynotebutton"
            type="button"
            className="rounded-[50%] bg-[#2C2C2C] p-2 transition duration-300 hover:bg-[#7B46DE]"
          >
            <StickyNote2OutlinedIcon className="h-[20px] w-[20px]" />
          </button>
          <button
            aria-label="flagbutton"
            type="button"
            className="rounded-[50%] bg-[#2C2C2C] p-2 transition duration-300 hover:bg-[#7B46DE]"
          >
            <FlagOutlinedIcon className="h-[20px] w-[20px]" />
          </button>
          <button
            type="button"
            className="h-[36px] w-[36px] rounded-[50%] bg-[#2C2C2C] transition duration-300 hover:bg-[#7B46DE]"
          >
            <span className=" text-[18px] font-bold leading-6">+</span>
          </button>
        </div>
        <p className="flex items-center justify-center">{dateText}</p>
      </div>

      {dateStatus && (
        <div
          className={`mx-2 mb-1 flex min-h-[5rem] flex-col rounded p-2 text-start text-black ${dateStatus}`}
        >
          <div className="flex flex-row items-center gap-x-1">
            <MovieOutlinedIcon />
            <span>05:35</span>
          </div>
          <span>The best step by step...</span>
          <div className="mt-1 flex flex-row gap-x-1">
            <div className="fb-icon" />
            <div className="instagram-icon" />
            <div className="discord-icon" />
            <div className="linkedin-icon" />
          </div>
        </div>
      )}
    </li>
  );
}
