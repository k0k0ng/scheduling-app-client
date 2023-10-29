"use client";

import { useState } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";

export default function ProfileNotification() {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  return (
    <div className="flex flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        // mobile will effect on media 76px
        className={`w-full pb-20 ${sidebarStatus ? "md:ml-64" : "md:ml-20"} `}
      >
        <TopNav title="Profile/Notification" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Notifications
          </p>

          <div className="min-h-[80vh] rounded bg-[#202020] md:flex">
            <form className="w-full font-poppins">
              <div className="p-8 md:mx-16 md:my-12 md:p-0 lg:p-12">
                <div className="mb-6">
                  <label
                    htmlFor="language"
                    className="mb-2 block text-xs font-normal tracking-wide text-white"
                  >
                    Notifications
                    <select
                      id="language"
                      className="my-2 block w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#2C2C2C] focus:outline-none"
                      defaultValue="onceaweek"
                    >
                      <option value="onceaweek">Once a week</option>
                      <option>Twice a week</option>
                      <option>Thrice a week</option>
                    </select>
                  </label>
                </div>
                <div className="mb-6 grid justify-items-end">
                  <Button size="sm" type="primary" className="button--">
                    Save Changes
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* end main */}
        </main>
      </div>
    </div>
  );
}
