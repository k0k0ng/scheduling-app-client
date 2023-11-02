"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TuneIcon from "@mui/icons-material/Tune";

import CalendarViewFilterMenu from "./components/CalendarViewFilterMenu";
import PostsBulkActionMenu from "./components/PostsBulkActionMenu";
import CalendarBody from "./components/CalendarBody";

import "./style.css";

export default function PublishingScheduler() {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  const [refresherState, setRefresherState] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState("");

  const currentMonth = useRef(0);
  const currentYear = useRef(0);
  const dateStatusCount = useRef({
    draft: 0,
    scheduled: 0,
    inProgress: 0,
    published: 0,
    error: 0,
  });

  let date = new Date();

  const dummyData = [
    { date: "5-10-2023", status: "published" },
    { date: "6-10-2023", status: "published" },
    { date: "7-10-2023", status: "error" },
    { date: "8-10-2023", status: "error" },
    { date: "9-10-2023", status: "error" },
    { date: "10-10-2023", status: "draft" },
    { date: "11-10-2023", status: "draft" },
    { date: "12-10-2023", status: "draft" },
    { date: "13-10-2023", status: "draft" },
    { date: "14-10-2023", status: "draft" },
    { date: "15-10-2023", status: "scheduled" },
    { date: "16-10-2023", status: "in-progress" },
    { date: "17-10-2023", status: "in-progress" },
    { date: "18-10-2023", status: "scheduled" },
    { date: "19-10-2023", status: "scheduled" },
    { date: "20-10-2023", status: "scheduled" },
    { date: "21-10-2023", status: "in-progress" },
    { date: "22-10-2023", status: "scheduled" },
    { date: "23-10-2023", status: "error" },
    { date: "24-10-2023", status: "draft" },
    { date: "25-10-2023", status: "draft" },
    { date: "26-10-2023", status: "scheduled" },
    { date: "27-10-2023", status: "in-progress" },
    { date: "28-10-2023", status: "error" },
    { date: "29-10-2023", status: "error" },
    { date: "30-10-2023", status: "scheduled" },
    { date: "31-10-2023", status: "draft" },
  ];

  useEffect(() => {
    setRefresherState(!refresherState);
    if (date) {
      currentMonth.current = date.getMonth();
      currentYear.current = date.getFullYear();
    }

    if (dummyData) {
      dateStatusCount.current.draft = 0;
      dateStatusCount.current.scheduled = 0;
      dateStatusCount.current.inProgress = 0;
      dateStatusCount.current.published = 0;
      dateStatusCount.current.error = 0;

      dummyData.forEach((data) => {
        if (data.status === "draft") {
          dateStatusCount.current.draft += 1;
        } else if (data.status === "scheduled") {
          dateStatusCount.current.scheduled += 1;
        } else if (data.status === "in-progress") {
          dateStatusCount.current.inProgress += 1;
        } else if (data.status === "published") {
          dateStatusCount.current.published += 1;
        } else if (data.status === "error") {
          dateStatusCount.current.error += 1;
        }
      });
    }
  }, []);

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
    <div className="flex h-[100vh] flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        className={`${
          sidebarStatus ? "ml-64" : "ml-20"
        } min-h-[100vh] w-full pb-28`}
      >
        <TopNav title="Publishing" />

        <main className="ml-10 mr-20 mt-8 min-h-[80vh] min-w-[20rem] overflow-hidden rounded-md border border-[#828181] bg-[#202020] pt-8">
          <div className="calendar-container">
            <div className="calendar-header mb-10 px-10">
              <div className="flex flex-row items-center">
                <p className="current-date min-w-[12rem]">
                  {months[currentMonth.current]} {currentYear.current}
                </p>
                <div className="icons flex flex-row items-start justify-center">
                  <button
                    type="button"
                    id="prev"
                    onClick={() => handlePrevOrNext(true)}
                  >
                    <KeyboardArrowLeftIcon
                      sx={{ width: "28px", height: "28px" }}
                      className="mt-[-5px]"
                    />
                  </button>
                  <button
                    type="button"
                    id="next"
                    onClick={() => handlePrevOrNext(false)}
                  >
                    <KeyboardArrowRightIcon
                      sx={{ width: "28px", height: "28px" }}
                      className="mt-[-5px]"
                    />
                  </button>
                </div>
              </div>

              <div className="flex gap-x-2">
                <button
                  type="button"
                  className="rounded-[50%] bg-[#2C2C2C] p-2 transition duration-300 hover:bg-[#7B46DE]"
                >
                  <TuneIcon className="mt-[-3px] h-[20px] w-[24px]" />
                </button>

                <CalendarViewFilterMenu />

                <PostsBulkActionMenu />

                <button
                  type="button"
                  className="ml-2 rounded bg-[#7B46DE] px-4 py-2 transition duration-300 hover:bg-[#7B46DE]"
                >
                  <span className="mr-3">+</span>
                  <span>Create Post</span>
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-evenly gap-x-3 border-t border-[#828181] p-5">
              <select className=" w-full cursor-pointer rounded-md border border-[#828181] bg-[#2C2C2C] px-4 py-2 font-poppins text-[14px] text-white">
                <option disabled selected hidden>
                  Status
                </option>
                <option>Draft</option>
                <option>Scheduled</option>
                <option>In Progress</option>
                <option>Published</option>
                <option>Error</option>
              </select>

              <select className=" w-full cursor-pointer rounded-md border border-[#828181] bg-[#2C2C2C] px-4 py-2 font-poppins text-[14px] text-white">
                <option disabled selected hidden>
                  Content Type
                </option>
                <option>Image</option>
                <option>Video</option>
              </select>

              <select className=" w-full cursor-pointer rounded-md border border-[#828181] bg-[#2C2C2C] px-4 py-2 font-poppins text-[14px] text-white">
                <option disabled selected hidden>
                  Channels
                </option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Discord</option>
                <option>Linkedin</option>
              </select>

              <select className=" w-full cursor-pointer rounded-md border border-[#828181] bg-[#2C2C2C] px-4 py-2 font-poppins text-[14px] text-white">
                <option disabled selected hidden>
                  Assigned Users
                </option>
                <option>John Doe</option>
              </select>

              <button
                type="button"
                className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md bg-[#7B46DE]"
              >
                <Image
                  src="/svg/publishing/scheduler/arrow-head-right.svg"
                  alt="instagram logo"
                  width={18}
                  height={18}
                />
              </button>
            </div>

            <CalendarBody
              date={date}
              dummyData={dummyData}
              currentYear={currentYear.current}
              currentMonth={currentMonth.current}
              selectedDateValue={selectedDateValue}
              setSelectedDateValue={setSelectedDateValue}
            />

            <div className="flex flex-row">
              <button
                type="button"
                className=" w-full border border-b-0 border-l-0 border-[#828181]"
              >
                <div className="flex flex-row items-center border-b-4 border-[#D1D3E0] p-2">
                  <span className="w-full text-[12px]">Draft</span>
                  <span className="rounded bg-[#2C2C2C] px-2 py-1 text-[12px]">
                    {dateStatusCount.current.draft}
                  </span>
                </div>
              </button>
              <button
                type="button"
                className=" w-full border border-b-0 border-l-0 border-[#828181]"
              >
                <div className="flex flex-row items-center border-b-4 border-[#DEB83B] p-2">
                  <span className="w-full text-[12px]">Scheduled</span>
                  <span className="rounded bg-[#2C2C2C] px-2 py-1 text-[12px]">
                    {dateStatusCount.current.scheduled}
                  </span>
                </div>
              </button>
              <button
                type="button"
                className=" w-full border border-b-0 border-l-0 border-[#828181]"
              >
                <div className="flex flex-row items-center border-b-4 border-[#6887FF] p-2">
                  <span className="w-full text-[12px]">In Progress</span>
                  <span className="rounded bg-[#2C2C2C] px-2 py-1 text-[12px]">
                    {dateStatusCount.current.inProgress}
                  </span>
                </div>
              </button>
              <button
                type="button"
                className=" w-full border border-b-0 border-l-0 border-[#828181]"
              >
                <div className="flex flex-row items-center border-b-4 border-[#6CC788] p-2">
                  <span className="w-full text-[12px]">Published</span>
                  <span className="rounded bg-[#2C2C2C] px-2 py-1 text-[12px]">
                    {dateStatusCount.current.published}
                  </span>
                </div>
              </button>
              <button
                type="button"
                className=" w-full border-t border-[#828181]"
              >
                <div className="flex flex-row items-center border-b-4 border-[#FF5653] p-2">
                  <span className="w-full text-[12px]">Error</span>
                  <span className="rounded bg-[#2C2C2C] px-2 py-1 text-[12px]">
                    {dateStatusCount.current.error}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
