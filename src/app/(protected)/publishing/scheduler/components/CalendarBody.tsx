import { Dispatch, SetStateAction } from "react";

import CalendarDate from "./components/CalendarDate";

type CalendarBodyTypes = {
  date: Date;
  dummyData: { date: string; status: string }[];
  currentYear: number;
  currentMonth: number;
  selectedDateValue: string;
  setSelectedDateValue: Dispatch<SetStateAction<string>>;
};

export default function CalendarBody({
  date,
  dummyData,
  currentYear,
  currentMonth,
  selectedDateValue,
  setSelectedDateValue,
}: CalendarBodyTypes) {
  const getDateRecordStatus = (formatedDateValue: string) => {
    let status = null;
    try {
      dummyData.forEach((data) => {
        if (data.date === formatedDateValue) {
          status = data.status;
          throw new Error("Break the loop.");
        }
      });
    } catch (error) {
      // empty, just to break forEach loop
    }

    return status;
  };

  const renderCalendar = () => {
    const firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(); // getting first day of month

    const lastDateofMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate(); // getting last date of month

    const lastDayofMonth = new Date(
      currentYear,
      currentMonth,
      lastDateofMonth
    ).getDay(); // getting last day of month

    const datesHolder = [];
    let loopIndex = 0;

    // creating li of previous month last days
    for (let i = firstDayofMonth; i > 0; i -= 1) {
      datesHolder[loopIndex] = (
        <CalendarDate
          key={loopIndex}
          dateText={null}
          dateStatus={null}
          fullDateValue={null}
          isSelected={null}
          cssClasses="inactive"
          handleSelectDate={null}
        />
      );
      loopIndex += 1;
    }

    // creating li of all days of current month
    // adding active className to li if the current day, month, and year matched
    for (let i = 1; i <= lastDateofMonth; i += 1) {
      const isToday =
        i === date.getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
          ? "active"
          : "";

      const formatedDateValue = `${i}-${currentMonth + 1}-${currentYear}`;

      const dateStatus = getDateRecordStatus(formatedDateValue);

      const isSelectedDate = selectedDateValue === formatedDateValue;

      datesHolder[loopIndex] = (
        <CalendarDate
          handleSelectDate={setSelectedDateValue}
          key={loopIndex}
          dateText={i}
          dateStatus={dateStatus}
          isSelected={isSelectedDate}
          fullDateValue={formatedDateValue}
          cssClasses={isToday}
        />
      );
      loopIndex += 1;
    }

    // creating li of next month first days
    for (let i = lastDayofMonth; i < 6; i += 1) {
      datesHolder[loopIndex] = (
        <CalendarDate
          handleSelectDate={null}
          key={loopIndex}
          dateText={null}
          dateStatus={null}
          isSelected={null}
          fullDateValue={null}
          cssClasses="inactive"
        />
      );
      loopIndex += 1;
    }

    return datesHolder;
  };

  return (
    <div className="calendar-body">
      <ul className="weeks border-y border-[#828181]">
        <li className="border-r border-[#828181]">SUN</li>
        <li className="border-r border-[#828181]">MON</li>
        <li className="border-r border-[#828181]">TUE</li>
        <li className="border-r border-[#828181]">WED</li>
        <li className="border-r border-[#828181]">THU</li>
        <li className="border-r border-[#828181]">FRI</li>
        <li>SAT</li>
      </ul>

      <ul className="days">{renderCalendar()}</ul>
    </div>
  );
}
