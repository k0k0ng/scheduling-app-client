"use client";

import { useState, Dispatch, SetStateAction } from "react";

import Image from "next/image";

// reusable
import DropDown from "./DropDown/DropDown";

// dashboardicon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// inbox icon
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
// toggle icon
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

type SidebarState = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({
  sidebarIsOpen,
  setSidebarIsOpen,
}: SidebarState) {
  const [sidebarOpen, sidebarsetOpen] = useState(true);

  return (
    <aside
      className={`fixed left-0 top-0 z-40 ${
        sidebarIsOpen ? "w-64" : "w-20"
      } h-screen -translate-x-full transition-transform sm:translate-x-0`}
    >
      <div className="-auto h-full border-r border-gray-200 bg-white  dark:border-gray-700 dark:bg-gray-800">
        <div className="bg-gray-700">
          <div className="ml-3 px-3 py-5">
            <a href="/#" className="flex items-center">
              <Image
                src="/logo.png  "
                className={` ${
                  !sidebarIsOpen && "rotate-[360deg]"
                } mr-3 h-6 duration-500 sm:h-7`}
                alt="Logoipsum"
                width={30}
                height={35}
              />
              <span
                className={`self center whitespace-nowrap text-xl font-semibold dark:text-white ${
                  !sidebarIsOpen && "scale-0"
                }`}
              >
                Logoipsum
              </span>
            </a>
          </div>
        </div>

        {/* sidebar components */}
        <div className="px-2 py-5">
          {/* title */}
          <p
            className={`ml-5 text-xs text-gray-300 ${
              !sidebarIsOpen && "scale-0"
            }`}
          >
            MAIN
          </p>
          <div>
            <a
              href="/#"
              className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
            >
              <HomeOutlinedIcon className="ml-2" />
              <span
                className={`ml-3 self-center whitespace-nowrap text-sm font-medium ${
                  !sidebarIsOpen && "scale-0"
                }`}
              >
                Dashboard
              </span>
            </a>
          </div>

          {/* Scheduler dropdown */}
          <div>
            <DropDown
              title="Publishing"
              lists={["Scheduler"]}
              sidebarOpen={sidebarIsOpen}
            />
          </div>

          <div className="pt-5">
            {/* title */}
            <p
              className={`ml-5 text-xs text-gray-300 ${
                !sidebarIsOpen && "scale-0"
              }`}
            >
              SETTINGS
            </p>
            <a
              href="/#"
              className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
            >
              <InboxOutlinedIcon className="ml-2 cursor-pointer duration-500" />
              <span
                className={`ml-3 self-center whitespace-nowrap text-sm font-medium ${
                  !sidebarIsOpen && "scale-0"
                }`}
              >
                Inbox
              </span>
            </a>
          </div>

          {/* settings dropdown */}
          <div>
            <DropDown
              title="Settings"
              lists={["Account Profile", "Subscription", "Invoices"]}
              sidebarOpen={sidebarIsOpen}
            />
          </div>

          <ul className="mt-2">
            <li>
              <button
                className="group flex items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <LogoutOutlinedIcon
                  className={`ml-2 cursor-pointer duration-300 ${
                    sidebarIsOpen && "rotate-[180deg]"
                  }`}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
