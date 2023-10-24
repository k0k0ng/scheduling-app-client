"use client";

import { Dispatch, SetStateAction } from "react";

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

import DropDown from "./DropDown/DropDown";

type SidebarState = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({
  sidebarIsOpen,
  setSidebarIsOpen,
}: SidebarState) {
  return (
    <aside
      className={`fixed left-0 top-0 z-20 ${
        sidebarIsOpen ? "w-64" : "w-20"
      } h-screen -translate-x-full transition-transform sm:translate-x-0`}
    >
      <div className="relative m-auto h-full border-r dark:border-[#5C5F65] dark:bg-[#202020]">
        {/* sidebar logo and title */}
        <div className="relative border-b dark:border-[#5C5F65] dark:bg-[#2C2C2C]">
          <div className="ml-3 flex min-h-[4.75rem] items-center justify-between px-3">
            <a href="/#" className="flex items-center">
              <Image
                src="/logo.png"
                className={`${
                  !sidebarIsOpen && "rotate-[360deg]"
                } mr-3 h-6 duration-500 sm:h-7`}
                alt="Logoipsum"
                width={30}
                height={35}
              />
              <span
                className={`text-xl font-bold text-gray-300 ${
                  !sidebarIsOpen && "hidden scale-0"
                }`}
              >
                Logoipsum
              </span>{" "}
            </a>
            {/* toggle */}
            <div className="absolute -bottom-10 -right-4 h-14 w-auto">
              <button
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
        </div>

        {/* sidebar components */}
        {/*  */}
        <div className="h-4/5 overflow-y-auto px-2 py-5">
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
              className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-700 dark:hover:text-white"
            >
              <HomeOutlinedIcon className="ml-2" />
              <span
                className={`ml-3 self-center ${!sidebarIsOpen && "scale-0"}`}
              >
                Dashboard
              </span>
            </a>
          </div>

          {/* Publishing  */}
          <div>
            <DropDown
              linkTitle="publish"
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
              href="/#"
              className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-700 dark:hover:text-white"
            >
              <EditNoteOutlinedIcon className="ml-2" />
              <span
                className={`ml-3 self-center ${!sidebarIsOpen && "scale-0"}`}
              >
                Task Manager
              </span>
            </a>
          </div>
          {/* domain and urls dropdown */}
          <div>
            <DropDown
              linkTitle="domainurl"
              title="Domains and URLs"
              lists={["Custom Domains", "URL Shortener"]}
              sidebarOpen={sidebarIsOpen}
            />
          </div>
          {/* analytics */}
          <div>
            <a
              href="/#"
              className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-700 dark:hover:text-white"
            >
              <ShowChartOutlinedIcon className="ml-2" />
              <span
                className={`ml-3 self-center  ${!sidebarIsOpen && "scale-0"}`}
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
              className="group flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-700 dark:hover:text-white"
            >
              <HelpOutlineOutlinedIcon className="ml-2" />
              <span
                className={`ml-3 self-center  ${!sidebarIsOpen && "scale-0"}`}
              >
                Need Help?
              </span>
            </a>
          </div>
          {/* sidebar components div end */}
        </div>

        {/* absolute bottom position light&dark */}
        <div className="absolute bottom-0 h-20 w-full bg-[#2D2F39]">
          <div
            className={`${
              sidebarIsOpen ? "mx-8" : "mx-2"
            } mx-8 my-4 flex  rounded-md bg-[#202020] p-2`}
          >
            <button
              type="button"
              className={`${
                !sidebarIsOpen && "hidden scale-0"
              } w-full items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-purple-100 dark:hover:bg-purple-700  dark:hover:text-white`}
            >
              <LightModeOutlinedIcon fontSize="small" color="secondary" />
              <span className="ml-3 self-center">Light</span>
            </button>
            <button
              type="button"
              className="w-full items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-purple-100 dark:hover:bg-purple-700  dark:hover:text-white"
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
        </div>
      </div>
    </aside>
  );
}
