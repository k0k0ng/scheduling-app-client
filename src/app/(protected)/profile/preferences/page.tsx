"use client";

import { useState } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";

export default function ProfilePreferences() {
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
        <TopNav title="Profile/Preferences" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Preferences
          </p>

          <div className="mb-2 min-h-[80vh] rounded bg-[#202020] md:flex">
            <form className="w-full font-poppins">
              <div className="p-8 md:mx-16 md:my-12 md:p-0 lg:p-12">
                <div className="mb-6">
                  <label
                    htmlFor="language"
                    className="mb-2 block text-xs font-normal tracking-wide text-white"
                  >
                    Language
                    <select
                      defaultValue="eng"
                      id="language"
                      className="my-2 block w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#2C2C2C] focus:outline-none"
                    >
                      <option value="eng" selected>
                        English
                      </option>
                      <option value="fil">Filipino</option>
                      <option value="kor">Korean</option>
                    </select>
                  </label>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="timezone"
                    className="mb-2 block text-xs font-normal tracking-wide text-white"
                  >
                    Timezone
                    <select
                      id="timezone"
                      className="my-2 block w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#2C2C2C] focus:outline-none"
                    >
                      <option selected>Asia/Singapore</option>
                      <option selected>EU/WE</option>
                    </select>
                  </label>
                </div>
                <div className="mb-6">
                  <label
                    className="mb-2 block text-xs font-normal tracking-wide text-white"
                    htmlFor="dateformat"
                  >
                    Date Format
                    <input
                      className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                      id="dateformat"
                      type="date"
                      placeholder=""
                      data-date="YYYY-MM-DD"
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label
                    className="mb-2 block text-xs font-normal tracking-wide text-white"
                    htmlFor="timeformat"
                  >
                    Time Format
                    <input
                      className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                      id="timeformat"
                      type="text"
                      placeholder="HH:mm:ss"
                      step="1"
                      onFocus={(e) => {
                        e.currentTarget.type = "time";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.type = "text";
                      }}
                    />
                  </label>
                </div>
                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-[#2C2C2C]" />
                {/*  */}
                <div className="mb-6">
                  <label
                    className="mb-2 block text-xs font-normal tracking-wide text-white"
                    htmlFor="headerclock"
                  >
                    Top Header Clock
                    <input
                      className="my-2  block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                      id="headerclock"
                      type="text"
                      placeholder="HH:mm:ss"
                      step="1"
                      onFocus={(e) => {
                        e.currentTarget.type = "time";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.type = "text";
                      }}
                    />
                  </label>
                </div>
                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-[#2C2C2C]" />
                {/*  */}
                <div className="mb-6">
                  <div className="mb-5 flex-wrap md:flex">
                    <p className="w-[130px] text-sm text-white">
                      Guided Tour(s)
                    </p>
                    <label
                      htmlFor="guidedtours"
                      className="flex items-center text-sm font-normal"
                    >
                      <input
                        id="guidedtours"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                      />
                      <span className="ml-2">
                        It will appear automatically the first time.
                      </span>
                    </label>
                  </div>
                  <div className="flex-wrap md:flex">
                    <p className="w-[130px] text-sm text-white">
                      Read Me First
                    </p>
                    <label
                      htmlFor="readme"
                      className="flex items-center text-sm font-normal"
                    >
                      <input
                        id="readme"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                      />
                      <span className="ml-2">
                        It will show as long as I don`t turn it off.
                      </span>
                    </label>
                  </div>
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
