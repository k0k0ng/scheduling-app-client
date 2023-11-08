import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { delay } from "@/utils/globalUtils";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DatePicketDates from "./DatePicketDates";

import "./style.css";

type DatePickerType = {
  setschedulePostDate: Dispatch<SetStateAction<string>>;
};

export default function Datepicker({ setschedulePostDate }: DatePickerType) {
  const [selectUserMenuIsOpen, setSelectUserMenuIsOpen] = useState(false);
  const [refresherState, setRefresherState] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState("");
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");

  const datePickerDialog = useRef<HTMLDialogElement>(null);

  const currentMonth = useRef(0);
  const currentYear = useRef(0);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  useEffect(() => {
    if (date) {
      currentMonth.current = date.getMonth();
      currentYear.current = date.getFullYear();
      setSelectedDateValue(
        `${currentYear.current}/${currentMonth.current + 1}/${date.getDate()}`
      );
    }
  }, []);

  useEffect(() => {
    setschedulePostDate(
      `${selectedDateValue} | ${selectedHour}:${selectedMinute}`
    );
  }, [selectedDateValue, selectedHour, selectedMinute]);

  const closePopUpMenu = async () => {
    if (datePickerDialog.current?.className && selectUserMenuIsOpen) {
      datePickerDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (datePickerDialog.current?.className && selectUserMenuIsOpen) {
      datePickerDialog.current.classList.remove("is-hidden");
    }

    datePickerDialog.current?.close();
    setSelectUserMenuIsOpen(!selectUserMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectUserMenuIsOpen) {
      closePopUpMenu();
    } else {
      datePickerDialog.current?.show();
      setSelectUserMenuIsOpen(!selectUserMenuIsOpen);
    }
  };

  const renderCalendar = () => {
    const firstDayofMonth = new Date(
      currentYear.current,
      currentMonth.current,
      1
    ).getDay(); // getting first day of month

    const lastDateofMonth = new Date(
      currentYear.current,
      currentMonth.current + 1,
      0
    ).getDate(); // getting last date of month

    const lastDayofMonth = new Date(
      currentYear.current,
      currentMonth.current,
      lastDateofMonth
    ).getDay(); // getting last day of month

    const datesHolder = [];
    let loopIndex = 0;

    // creating li of previous month last days
    for (let i = firstDayofMonth; i > 0; i -= 1) {
      datesHolder[loopIndex] = (
        <DatePicketDates
          key={loopIndex}
          dateText={null}
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
        currentMonth.current === new Date().getMonth() &&
        currentYear.current === new Date().getFullYear()
          ? "active"
          : "";

      const formatedDateValue = `${currentYear.current}/${
        currentMonth.current + 1
      }/${i}`;

      const isSelectedDate = selectedDateValue === formatedDateValue;

      datesHolder[loopIndex] = (
        <DatePicketDates
          handleSelectDate={setSelectedDateValue}
          key={loopIndex}
          dateText={i}
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
        <DatePicketDates
          handleSelectDate={null}
          key={loopIndex}
          dateText={null}
          isSelected={null}
          fullDateValue={null}
          cssClasses="inactive"
        />
      );
      loopIndex += 1;
    }

    return datesHolder;
  };

  const handlePrevOrNext = (prev: boolean) => {
    currentMonth.current = prev
      ? currentMonth.current - 1
      : currentMonth.current + 1;

    if (currentMonth.current < 0 || currentMonth.current > 11) {
      date = new Date(
        currentYear.current,
        currentMonth.current,
        new Date().getDate()
      );
      currentYear.current = date.getFullYear(); // updating current year with new date year
      currentMonth.current = date.getMonth(); // updating current month with new date month
      currentMonth.current = date.getMonth();
    } else {
      date = new Date(); // pass the current date as date value
    }
    setRefresherState(!refresherState);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full justify-start rounded-md border  px-4 py-2"
        onClick={handleTogglePopUpMenu}
      >
        <AccessTimeIcon />
        <span className="ml-6">
          {`${selectedDateValue} | ${selectedHour}:${selectedMinute}`}
        </span>
      </button>

      <dialog
        ref={datePickerDialog}
        className="date-picker-dialog z-20 mt-2 overflow-hidden rounded-lg border bg-[#2c2c2c] p-8 text-white md:max-w-[90%]"
      >
        <div className="flex flex-row items-center justify-between">
          <p className="min-w-[12rem]">
            {months[currentMonth.current]} {currentYear.current}
          </p>
          <div className="flex flex-row items-start justify-center gap-x-4">
            <button
              aria-label="prevbutton"
              type="button"
              id="prev"
              onClick={() => handlePrevOrNext(true)}
            >
              <KeyboardArrowLeftIcon
                sx={{ width: "20px", height: "20px" }}
                className="mt-[-5px]"
              />
            </button>
            <button
              aria-label="nextbutton"
              type="button"
              id="next"
              onClick={() => handlePrevOrNext(false)}
            >
              <KeyboardArrowRightIcon
                sx={{ width: "20px", height: "20px" }}
                className="mt-[-5px]"
              />
            </button>
          </div>
        </div>
        <div className="date-picker-body">
          <ul className="weeks">
            <li>SUN</li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li>SAT</li>
          </ul>

          <ul className="days">{renderCalendar()}</ul>
        </div>

        <div className="flex min-h-[50px] items-center justify-center gap-x-2">
          <select
            name="cars"
            id="cars"
            className="rounded border bg-[#2c2c2c] px-1.5 py-1 font-poppins text-[12px]"
            onChange={(event) => setSelectedHour(event.target.value)}
          >
            <option value="00">00</option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>

          <span>:</span>

          <select
            name="cars"
            id="cars"
            className="rounded border bg-[#2c2c2c] px-1.5 py-1 font-poppins text-[12px]"
            onChange={(event) => setSelectedMinute(event.target.value)}
          >
            <option value="00">00</option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
          </select>
        </div>

        <div className="mt-4 flex w-full justify-end">
          <button
            type="button"
            className=" rounded-md bg-[#7B46DE] px-8 py-2 font-poppins text-[14px]"
            onClick={handleTogglePopUpMenu}
          >
            Apply
          </button>
        </div>
      </dialog>
    </div>
  );
}
