"use client";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { delay } from "@/utils/globalUtils";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

import SearchIcon from "@mui/icons-material/Search";

import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import DeleteIcon from "@mui/icons-material/Delete";

import "./style.css";

export default function SettingsChannels() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [filteredChannel, setFilteredChannel] = useState("");

  const [connectChannelModalIsOpen, setConnectChannelModalIsOpen] =
    useState(false);
  const connectChannelModal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (localStorage.getItem("actionFromDashboard")) {
      connectChannelModal.current?.showModal();
      setConnectChannelModalIsOpen(!connectChannelModalIsOpen);
      localStorage.removeItem("actionFromDashboard");
    }
  }, []);

  const handleOpenConnectChannelModal = () => {
    if (!connectChannelModalIsOpen) {
      connectChannelModal.current?.showModal();
    }
    setConnectChannelModalIsOpen(!connectChannelModalIsOpen);
  };

  const handleCloseConnectChannelModal = async () => {
    if (connectChannelModal.current?.className && connectChannelModalIsOpen) {
      connectChannelModal.current.classList.add("is-hidden");
    }

    await delay(500);

    if (connectChannelModal.current?.className && connectChannelModalIsOpen) {
      connectChannelModal.current.classList.remove("is-hidden");
    }

    connectChannelModal.current?.close();
    setConnectChannelModalIsOpen(!connectChannelModalIsOpen);
  };

  const handleChangeFilteredChannel = (channel: string) => {
    if (filteredChannel === channel) {
      setFilteredChannel("");
    } else {
      setFilteredChannel(channel);
    }
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
        } min-h-[100vh] w-full pb-20`}
      >
        <TopNav title="Channels" />

        <main className="ml-10 mr-20 mt-8 min-h-[80vh] min-w-[20rem]  rounded-md bg-[#202020] px-10 py-8">
          <div className="flex flex-col items-start justify-between gap-y-4 border-b border-[#2C2C2C] pb-8 lg:flex-row lg:items-center">
            <div className="flex flex-row items-start justify-start gap-x-4">
              <button
                type="button"
                onClick={handleOpenConnectChannelModal}
                className="flex flex-row gap-x-2 rounded bg-[#7B46DE] px-3 py-2 font-poppins text-[14px] font-semibold transition duration-300 hover:bg-[#7B46DE]"
              >
                <Image
                  src="/svg/settings/channels/lightning-icon.svg"
                  alt="connect channel logo"
                  width={20}
                  height={20}
                />
                Connect
              </button>

              <button
                type="button"
                onClick={() => handleChangeFilteredChannel("facebook")}
                className={`flex flex-row gap-x-2 rounded px-3 py-2 font-poppins text-[14px] font-semibold transition duration-300 hover:bg-[#7B46DE] ${
                  filteredChannel === "facebook"
                    ? "bg-[#7B46DE]"
                    : "bg-[#2C2C2C]"
                }`}
              >
                <Image
                  src="/global/svg/icons/fb-icon.svg"
                  alt="connect channel logo"
                  width={20}
                  height={20}
                />
                <span className="hidden xl:block">Facebook (Page)</span>
              </button>

              <button
                type="button"
                onClick={() => handleChangeFilteredChannel("instagram")}
                className={`flex flex-row gap-x-2 rounded px-3 py-2 font-poppins text-[14px] font-semibold transition duration-300 hover:bg-[#7B46DE] ${
                  filteredChannel === "instagram"
                    ? "bg-[#7B46DE]"
                    : "bg-[#2C2C2C]"
                }`}
              >
                <Image
                  src="/global/svg/icons/instagram-icon.svg"
                  alt="connect channel logo"
                  width={20}
                  height={20}
                />
                <span className="hidden xl:block">Instagram (Business)</span>
              </button>
            </div>

            <form
              action="/dashboard"
              autoComplete="off"
              className="search-form flex min-h-[45px] min-w-full flex-row rounded-md border border-[#C0C0C0] px-4 transition duration-300 lg:min-w-[100px]"
            >
              <button
                type="submit"
                className="mr-4 transition duration-300 hover:text-[#7B46DE]"
              >
                <SearchIcon />
              </button>
              <input type="text" placeholder="Search anything" name="search" />
            </form>
          </div>

          <div className="overflow-x-scroll xl:overflow-hidden">
            <table className="mt-12 min-w-[1000px] xl:min-w-full">
              <thead>
                <tr className="border-b border-[#2C2C2C] text-start font-poppins text-[18px] font-semibold">
                  <th className="col-span-1 pb-5 font-poppins text-[18px] font-semibold">
                    NAME
                  </th>
                  <th className="col-span-1 pb-5 text-center font-poppins text-[18px] font-semibold">
                    RENEWAL AT
                  </th>
                  <th className="col-span-1 pb-5">
                    <div className="flex items-center justify-center gap-x-8">
                      <QuestionAnswerOutlinedIcon />
                      <InsertChartOutlinedRoundedIcon />
                      <CalendarTodayOutlinedIcon />
                      <QuestionAnswerOutlinedIcon />
                    </div>
                  </th>
                  <th className="col-span-1 pb-5 text-center font-poppins text-[18px] font-semibold">
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#2C2C2C]">
                  <td className="pb-5 pt-8">
                    <div className="flex flex-row gap-x-3">
                      <Image
                        src="/global/svg/icons/fb-icon.svg"
                        alt="connect channel logo"
                        width={50}
                        height={50}
                      />
                      <div className="flex flex-col">
                        <span className="font-poppins text-[14px]">
                          1234567890
                        </span>
                        <span className="font-poppins text-[14px] font-semibold">
                          TEST PAGE
                        </span>
                        <span className="font-poppins text-[14px]">
                          YYYY/DD/MM | 00:00 | John Doe
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="pb-5 pt-8 text-center"> - </td>
                  <td className="pb-5 pt-8">
                    <div className="flex items-center justify-center gap-x-8">
                      <Image
                        src="/svg/settings/channels/check-icon-purple.svg"
                        alt="connect channel logo"
                        width={25}
                        height={25}
                      />
                      <Image
                        src="/svg/settings/channels/check-icon-purple.svg"
                        alt="connect channel logo"
                        width={25}
                        height={25}
                      />
                      <DoDisturbAltIcon />
                      <Image
                        src="/svg/settings/channels/check-icon-purple.svg"
                        alt="connect channel logo"
                        width={25}
                        height={25}
                      />
                    </div>
                  </td>

                  <td className="pb-5 pt-8">
                    <div className="flex flex-row justify-center gap-x-4">
                      <button
                        type="button"
                        className="rounded bg-[#2C2C2C] p-2 transition duration-300 hover:bg-[#7B46DE]"
                      >
                        <Image
                          src="/svg/settings/channels/lightning-icon.svg"
                          alt="connect channel logo"
                          width={20}
                          height={20}
                        />
                      </button>

                      <button
                        type="button"
                        className="rounded bg-[#2C2C2C] p-2 transition duration-300 hover:bg-[#7B46DE]"
                      >
                        <DeleteIcon className="h-[20px] w-[20px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <dialog
          ref={connectChannelModal}
          className="connect-channel-dialog min-w-[100vw] rounded-lg bg-[#2C2C2C] py-10 md:min-w-[90vw] lg:min-w-[60vw]"
        >
          <div>
            <div className="flex flex-row items-center justify-between border-b border-[#717171] px-10 pb-6">
              <span className="font-bold text-white">Connect</span>
              <button
                type="button"
                onClick={handleCloseConnectChannelModal}
                className=" rounded-[50%] bg-[#717171] px-3 py-1 font-extrabold text-white transition duration-300 hover:bg-[#7B46DE]"
              >
                x
              </button>
            </div>
            <form
              action="/dashboard"
              autoComplete="off"
              className="search-form mx-10 mt-6 flex min-h-[45px]  flex-row rounded-md border border-[#C0C0C0] px-4 transition duration-300 lg:min-w-[100px]"
            >
              <button
                type="submit"
                className="mr-4 text-white transition duration-300 hover:text-[#7B46DE]"
              >
                <SearchIcon />
              </button>
              <input type="text" placeholder="Search anything" name="search" />
            </form>

            <div className="mx-10 mt-6 grid h-[50vh] grid-cols-2 items-start justify-start gap-6 overflow-y-scroll p-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
              <div className="col-span-1 min-h-[10rem] rounded bg-slate-400 transition duration-300 hover:bg-[#7B46DE]" />
            </div>

            <div className="mt-12 flex flex-row items-center justify-end border-t border-[#717171] px-10 pt-6">
              <button
                type="button"
                onClick={handleCloseConnectChannelModal}
                className=" rounded-md bg-[#717171] px-4 py-2 text-[14px] font-semibold text-white transition duration-300 hover:bg-[#7B46DE]"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
