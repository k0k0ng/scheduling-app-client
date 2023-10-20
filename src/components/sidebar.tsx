"use client";

import { useState } from "react";
import React from "react";

import Image from "next/image";

// toggle icon
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
// dashboardicon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// task manager icon
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
// analytics icon
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
// need help icon
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

// reusable
import DropDown from "./DropDown/DropDown";

export default function SideBar() {
  const [sidebarOpen, sidebarsetOpen] = useState(true);
  const [sidebarLock, sidebarsetLock] = useState(true);

  function MouseOver() {
    sidebarsetOpen(true);
  }

  function MouseOut() {
    if (sidebarLock) {
      sidebarsetOpen(true);
    } else {
      sidebarsetOpen(false);
    }
  }

  return (
    <>
      <aside
        className={`fixed left-0 top-0 z-40 ${
          sidebarOpen ? "w-64" : "w-20"
        } h-screen -translate-x-full transition-transform sm:translate-x-0`}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        <div className="m-auto h-full border-r dark:border-[#5C5F65] dark:bg-[#202020]">
          <div className="m-auto border-b dark:border-[#5C5F65] dark:bg-[#2C2C2C]">
            <div className="ml-3 flex items-center justify-between px-3 py-4">
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
                  className={`self center whitespace-nowrap text-xl font-bold text-gray-300 ${
                    !sidebarOpen && "scale-0"
                  }`}
                >
                  Logoipsum
                </span>{" "}
              </a>
              {/* toggle */}
              <button
                type="button"
                className="group flex items-center"
                onClick={() => {
                  sidebarsetLock(!sidebarLock);
                }}
              >
                {/* toggle */}
                <MoreVertOutlinedIcon
                  className={`${!sidebarOpen && "scale-0"}`}
                />
              </button>
            </div>
          </div>

          {/* sidebar components */}
          <div className="h-4/6 overflow-y-auto px-2 py-5">
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
                className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
              >
                <HomeOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center whitespace-nowrap text-sm font-medium ${
                    !sidebarOpen && "scale-0"
                  }`}
                >
                  Overview
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
                className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
              >
                <EditNoteOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center whitespace-nowrap text-sm font-medium ${
                    !sidebarOpen && "scale-0"
                  }`}
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
                className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
              >
                <ShowChartOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center whitespace-nowrap text-sm font-medium ${
                    !sidebarOpen && "scale-0"
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
                className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
              >
                <HelpOutlineOutlinedIcon className="ml-2" />
                <span
                  className={`ml-3 self-center whitespace-nowrap text-sm font-medium ${
                    !sidebarOpen && "scale-0"
                  }`}
                >
                  Need Help?
                </span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <div
        className={` ${
          sidebarOpen ? `sm:ml-64` : `sm:ml-20`
        } relative h-screen`}
      >
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="">{/* <p>content</p> */}</div>
        </section>
      </div>
    </>
  );
}
