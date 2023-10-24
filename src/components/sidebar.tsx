"use client";

import { useState } from "react";

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

// reusable
import DropDown from "./DropDown/DropDown";

export default function SideBar() {
  const [sidebarOpen, sidebarsetOpen] = useState(true);

  return (
    <>
      <aside
        className={`fixed left-0 top-0 sm:z-0 md:z-20 ${
          sidebarOpen ? "w-64" : "w-20"
        } h-screen -translate-x-full transition-transform sm:translate-x-0`}
      >
        <div className="relative m-auto h-full border-r dark:border-[#5C5F65] dark:bg-[#202020]">
          {/* sidebar logo and title */}
          <div className="relative border-b dark:border-[#5C5F65] dark:bg-[#2C2C2C]">
            <div className="ml-3 justify-between px-3 py-4">
              <a href="/#" className="flex items-center">
                <Image
                  src="/logo.png  "
                  className={` ${
                    !sidebarOpen && "rotate-[360deg]"
                  } mr-3 h-6 duration-500 sm:h-7`}
                  alt="Logoipsum"
                  width={30}
                  height={35}
                />
                <span
                  className={`text-xl font-bold text-gray-300 ${
                    !sidebarOpen && "hidden scale-0"
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
                    sidebarsetOpen(!sidebarOpen);
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
                !sidebarOpen && "hidden scale-0"
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
                  className={`ml-3 self-center ${!sidebarOpen && "scale-0"}`}
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
                sidebarOpen={sidebarOpen}
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
                sidebarOpen={sidebarOpen}
              />
            </div>
            {/* Monitoring  */}
            <div>
              <DropDown
                linkTitle="monitoring"
                title="Monitoring"
                lists={["Post Replies", "Stream"]}
                sidebarOpen={sidebarOpen}
              />
            </div>
            {/* Organize  */}
            <div>
              <DropDown
                linkTitle="organize"
                title="Organize"
                lists={["Categories", "Labels"]}
                sidebarOpen={sidebarOpen}
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
                  className={`ml-3 self-center ${!sidebarOpen && "scale-0"}`}
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
                sidebarOpen={sidebarOpen}
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
                  className={`ml-3 self-center  ${!sidebarOpen && "scale-0"}`}
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
                sidebarOpen={sidebarOpen}
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
                sidebarOpen={sidebarOpen}
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
                sidebarOpen={sidebarOpen}
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
                  className={`ml-3 self-center  ${!sidebarOpen && "scale-0"}`}
                >
                  Need Help?
                </span>
              </a>
            </div>
            {/* sidebar components div end */}
          </div>

          {/* footer light&dark */}
          <div className="absolute bottom-0 h-20 w-full bg-[#2D2F39]">
            <div
              className={`${
                sidebarOpen ? "mx-8" : "mx-4"
              } mx-8 my-4 flex  rounded-md bg-[#202020] p-2`}
            >
              <button
                type="button"
                className={`${
                  !sidebarOpen && "hidden scale-0"
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
                    !sidebarOpen && "hidden scale-0"
                  }`}
                >
                  Dark
                </span>
              </button>
            </div>
            {/* absolute end div -footer */}
          </div>
          {/* relative end div */}
        </div>
        {/* aside end  */}
      </aside>

      <div
        className={` ${
          sidebarOpen ? "sm:ml-64" : "sm:ml-20"
        } relative h-screen`}
      >
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="ml-3 self-center text-sm font-medium">
            <p>content</p>
          </div>
        </section>
      </div>
    </>
  );
}
