"use client";

import { useState, Dispatch, SetStateAction } from "react";

import Image from "next/image";

// toggle icon
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
// dashboardicon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// task manager icon
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
// analytics icon
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
// need help icon
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// light and dark
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// menu icon
import MenuIcon from "@mui/icons-material/Menu";

import DropDown from "./DropDown/DropDown";

type SidebarState = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({
  sidebarIsOpen,
  setSidebarIsOpen,
}: SidebarState) {
  const [sidebarMobileIsOpen, setSidebarMobileIsOpen] = useState(false);

  return (
    <>
      {/* mobile sidebar toggle */}
      <button
        type="button"
        className=" absolute right-0 top-0 mr-[64px] mt-[18px] inline-flex items-center rounded-lg p-2 text-sm md:hidden"
        onClick={() => {
          setSidebarMobileIsOpen((current) => !current);
          setSidebarIsOpen(true);
        }}
      >
        <MenuIcon color="primary" fontSize="medium" />
        <span className="sr-only">Sidebar Toggle</span>
      </button>
      <aside
        id="logo-sidebar"
        className={`fixed left-0 top-0 z-40 ${
          sidebarIsOpen ? "md:w-64" : "md:w-20"
        }  h-full ${
          sidebarMobileIsOpen ? "--translate-x-full" : "-translate-x-full"
        } transition-transform md:translate-x-0`}
      >
        <div className="relative m-auto h-full border-r dark:border-[#5C5F65] dark:bg-[#202020]">
          <div className="relative flex min-h-[4.75rem] flex-row items-center border-b dark:border-[#5C5F65] dark:bg-[#2C2C2C]">
            <a href="/#" className="ml-6 flex items-center">
              <Image
                src="/logo.png  "
                className={` ${
                  !sidebarIsOpen && "rotate-[360deg]"
                } mr-3 duration-500 `}
                alt="Logoipsum"
                width={30}
                height={35}
              />
              <span
                className={`items-center text-xl font-bold text-gray-300 ${
                  !sidebarIsOpen && "hidden scale-0"
                }`}
              >
                Logoipsum
              </span>{" "}
            </a>
            {/* web sidebar toggle */}
            <div className="absolute -bottom-10 -right-4 h-14 w-auto scale-0 md:scale-90">
              <button
                aria-label="websidebartoggle"
                type="button"
                className="rounded-mg cursor-pointer rounded-lg border border-solid border-[#5C5F65] bg-[#161A23] p-1.5"
                onClick={() => {
                  setSidebarIsOpen(!sidebarIsOpen);
                }}
              >
                <CodeOutlinedIcon fontSize="small" color="secondary" />
              </button>
            </div>
          </div>

          {/* sidebar components */}
          <div className="sidebarscroll h-4/5 overflow-y-auto px-2 py-5">
            {/* title */}
            <p
              className={`ml-5 text-xs text-gray-300 ${
                !sidebarIsOpen && "hidden scale-0"
              }`}
            >
              MAIN
            </p>

            <div>
              <a
                href="/dashboard"
                className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-[#7B46DE] dark:hover:text-white"
              >
                <HomeOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center ${
                    !sidebarIsOpen && "hidden scale-0"
                  }`}
                >
                  Dashboard
                </span>
              </a>
            </div>

            {/* Publishing  */}
            <div>
              <DropDown
                linkTitle="publishing"
                title="Publishing"
                lists={["Scheduler", "Content Pool", "Discover", "Stream"]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/* Tools */}
            <div>
              <DropDown
                linkTitle="tools"
                title="Tools"
                lists={[
                  "Chat AI",
                  "AI Text to Image",
                  "AI Video Generator",
                  "Discover",
                  "Hashtag Manager",
                  "Stock Library",
                  "Caption Templates",
                  "Quick Replies",
                  "Landing Page",
                ]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/* Monitoring  */}
            <div>
              <DropDown
                linkTitle="monitoring"
                title="Monitoring"
                lists={["Post Replies", "Stream"]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/* Organize  */}
            <div>
              <DropDown
                linkTitle="organize"
                title="Organize"
                lists={["Categories", "Labels"]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/* task manager */}
            <div>
              <a
                href="/taskmanager"
                className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-[#7B46DE] dark:hover:text-white"
              >
                <EditNoteOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center ${
                    !sidebarIsOpen && "hidden scale-0"
                  }`}
                >
                  Task Manager
                </span>
              </a>
            </div>
            {/* domain and urls dropdown */}
            <div>
              <DropDown
                linkTitle="domainurls"
                title="Domains and URLs"
                lists={["Custom Domains", "URL Shortener"]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/* analytics */}
            <div>
              <a
                href="/analytics"
                className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-[#7B46DE] dark:hover:text-white"
              >
                <ShowChartOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center  ${
                    !sidebarIsOpen && "hidden scale-0"
                  }`}
                >
                  Analytics
                </span>
              </a>
            </div>
            {/* billing dropdown */}
            <div>
              <DropDown
                linkTitle="billing"
                title="Billing"
                lists={["Subscription", "Invoices", "Affiliates"]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/* settings */}
            <div>
              <DropDown
                linkTitle="settings"
                title="Settings"
                lists={[
                  "General",
                  "Channels",
                  "Integrations",
                  "Password Manager",
                ]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/*   My Profile */}
            <div>
              <DropDown
                linkTitle="profile"
                title="My Profile"
                lists={[
                  "Account",
                  "Preferences",
                  "Change Password",
                  "Notifications",
                  "Terms and Conditions",
                ]}
                sidebarOpen={sidebarIsOpen}
              />
            </div>
            {/* need help? */}
            <div>
              <a
                href="/#"
                className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-[#7B46DE] dark:hover:text-white"
              >
                <HelpOutlineOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center  ${
                    !sidebarIsOpen && "hidden scale-0"
                  }`}
                >
                  Need Help?
                </span>
              </a>
            </div>
            {/* sidebar components div end */}
          </div>

          {/* footer absolute bottom position light&dark */}
          <div className="absolute bottom-0 h-20 w-full bg-[#2D2F39]">
            <div
              className={`${
                sidebarIsOpen ? "md:mx-8" : "md:mx-4"
              } mx-8 my-4 flex  rounded-md bg-[#202020] p-2`}
            >
              <button
                type="button"
                className={`${
                  !sidebarIsOpen && "hidden scale-0"
                } w-full items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-purple-100 dark:hover:bg-[#7B46DE]  dark:hover:text-white`}
              >
                <LightModeOutlinedIcon fontSize="small" color="secondary" />
                <span className="ml-3 self-center">Light</span>
              </button>
              <button
                type="button"
                className="w-full items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-purple-100 dark:hover:bg-[#7B46DE]  dark:hover:text-white"
              >
                <DarkModeOutlinedIcon fontSize="small" color="primary" />
                <span
                  className={`ml-3 self-center  ${
                    !sidebarIsOpen && "hidden scale-0"
                  }`}
                >
                  Dark
                </span>
              </button>
            </div>
            {/* absolute end div */}
          </div>
          {/* relative end div */}
        </div>
      </aside>
    </>
  );
}
