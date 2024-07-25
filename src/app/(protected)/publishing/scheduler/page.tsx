"use client";

import { useState, useEffect, useRef } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";

import CalendarViewFilterMenu from "./components/CalendarViewFilterMenu";
import PostsBulkActionMenu from "./components/PostsBulkActionMenu";
import CalendarBody from "./components/CalendarBody";
import FilterPostsMenu from "./components/FilterPostsMenu";
import CreatePostModal from "./components/CreatePostModal";

import "./style.css";

const dummyData = [
  { date: "1-11-2023", status: "published" },
  { date: "2-11-2023", status: "draft" },
  { date: "4-11-2023", status: "published" },
  { date: "5-11-2023", status: "published" },
  { date: "6-11-2023", status: "published" },
  { date: "7-11-2023", status: "error" },
  { date: "8-11-2023", status: "error" },
  { date: "9-11-2023", status: "error" },
  { date: "10-11-2023", status: "draft" },
  { date: "11-11-2023", status: "draft" },
  { date: "12-11-2023", status: "draft" },
  { date: "13-11-2023", status: "draft" },
  { date: "14-11-2023", status: "draft" },
  { date: "15-11-2023", status: "scheduled" },
  { date: "16-11-2023", status: "in-progress" },
  { date: "17-11-2023", status: "in-progress" },
  { date: "18-11-2023", status: "scheduled" },
  { date: "19-11-2023", status: "scheduled" },
  { date: "20-11-2023", status: "scheduled" },
  { date: "21-11-2023", status: "in-progress" },
  { date: "22-11-2023", status: "scheduled" },
  { date: "23-11-2023", status: "error" },
  { date: "24-11-2023", status: "draft" },
  { date: "25-11-2023", status: "draft" },
  { date: "26-11-2023", status: "scheduled" },
  { date: "27-11-2023", status: "in-progress" },
  { date: "28-11-2023", status: "error" },
  { date: "29-11-2023", status: "error" },
  { date: "30-11-2023", status: "scheduled" },
];

export default function PublishingScheduler() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [filterPostIsShown, setFilterPostIsShown] = useState(false);
  const [createPostModalIsOpen, setCreatePostModalIsOpen] = useState(false);

  const [refresherState, setRefresherState] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState("");

  const [selectedFilter, setSelectedFilter] = useState({
    status: "",
    contentType: "",
    channel: "",
    assignedUser: "",
  });

  const createPostModal = useRef<HTMLDialogElement>(null);

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

  const dummyDataHolder = useRef([{ date: "", status: "" }]);

  useEffect(() => {
    if (localStorage.getItem("actionFromDashboard")) {
      createPostModal.current?.showModal();
      setCreatePostModalIsOpen(!createPostModalIsOpen);
      localStorage.removeItem("actionFromDashboard");
    }

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
      dummyDataHolder.current = dummyData;

      setRefresherState(!refresherState);
    }
  }, []);

  useEffect(() => {
    if (selectedFilter.status !== "") {
      dummyDataHolder.current = [];

      dummyData.forEach((data) => {
        if (data.status === selectedFilter.status) {
          dummyDataHolder.current.push(data);
        }
      });
    } else {
      dummyDataHolder.current = dummyData;
    }

    setRefresherState(!refresherState);
  }, [selectedFilter.status]);

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

  const handleFilterByStatus = (statusType: string) => {
    if (selectedFilter.status === statusType) {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "" };
      });
    } else {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: statusType };
      });
    }
  };

  const handleOpenCreatePostModal = () => {
    if (!createPostModalIsOpen) {
      createPostModal.current?.showModal();
    }
    setCreatePostModalIsOpen(!createPostModalIsOpen);
  };

  const handleCloseCreatePostModal = async () => {
    if (localStorage.getItem("actionFromDashboard")) {
      localStorage.removeItem("actionFromDashboard");
    }

    if (createPostModal.current?.className && createPostModalIsOpen) {
      createPostModal.current.classList.add("is-hidden");
    }

    await delay(500);

    if (createPostModal.current?.className && createPostModalIsOpen) {
      createPostModal.current.classList.remove("is-hidden");
    }

    createPostModal.current?.close();
    setCreatePostModalIsOpen(!createPostModalIsOpen);
  };

  return (
    <div className="flex h-[100vh] flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        className={`${
          sidebarStatus ? "md:ml-64" : "md:ml-20"
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
                    aria-label="prevbutton"
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
                    aria-label="nextbutton"
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
                  aria-label="filterbutton"
                  type="button"
                  className="rounded-[50%] bg-[#2C2C2C] p-2 transition duration-300 hover:bg-[#7B46DE]"
                  onClick={() => setFilterPostIsShown(!filterPostIsShown)}
                >
                  <TuneIcon className="mt-[-3px] h-[20px] w-[24px]" />
                </button>

                <CalendarViewFilterMenu />

                <PostsBulkActionMenu />

                <button
                  type="button"
                  className="ml-2 rounded bg-[#7B46DE] px-4 py-2 transition duration-300 hover:bg-[#7B46DE]"
                  onClick={handleOpenCreatePostModal}
                >
                  <span className="mr-3">+</span>
                  <span>Create Post</span>
                </button>
              </div>
            </div>

            <FilterPostsMenu
              isDisplayed={filterPostIsShown}
              selectedFilter={selectedFilter.status}
              setSelectedFilter={setSelectedFilter}
            />

            <CalendarBody
              date={date}
              dummyData={dummyDataHolder.current}
              currentYear={currentYear.current}
              currentMonth={currentMonth.current}
              selectedDateValue={selectedDateValue}
              setSelectedDateValue={setSelectedDateValue}
            />

            <div className="flex flex-row">
              <button
                type="button"
                className=" w-full border border-b-0 border-l-0 border-[#828181]"
                onClick={() => handleFilterByStatus("draft")}
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
                onClick={() => handleFilterByStatus("scheduled")}
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
                onClick={() => handleFilterByStatus("in-progress")}
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
                onClick={() => handleFilterByStatus("published")}
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
                onClick={() => handleFilterByStatus("error")}
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

        <dialog
          ref={createPostModal}
          className="create-post-dialog min-w-[100vw] overflow-visible rounded-lg bg-[#202020] lg:min-w-[80vw] xl:min-w-[60vw] 2xl:min-w-[30vw]"
        >
          <button
            aria-label="closebutton"
            type="button"
            onClick={handleCloseCreatePostModal}
            className="absolute right-[-18px] top-[-18px] flex h-[32px] w-[34px] items-center justify-center rounded-[50%] bg-[#F47674EB] font-poppins text-white transition duration-300 hover:bg-[#f4605eeb]"
          >
            <CloseIcon />
          </button>

          <CreatePostModal />
        </dialog>
      </div>
    </div>
  );
}
