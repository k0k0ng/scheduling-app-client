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
        <TopNav title="Profile/Account" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Preferences
          </p>
          <div className="h-full">
            <div className="block md:flex">
              <form className="w-full bg-[#202020] font-poppins">
                <div className="p-12 md:mx-20 md:my-12">
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label
                        htmlFor="language"
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                      >
                        Language
                        <select
                          id="language"
                          className="my-2  block w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#2C2C2C] focus:outline-none"
                        >
                          <option selected>English</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label
                        htmlFor="timezone"
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                      >
                        Timezone
                        <select
                          id="timezone"
                          className="my-2  block w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#2C2C2C] focus:outline-none"
                        >
                          <option selected>Asia/Singapore</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="dateformat"
                      >
                        Date Format
                        <input
                          className="my-2  block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                          id="dateformat"
                          type="date"
                          placeholder=""
                        />
                      </label>
                    </div>
                  </div>
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="timeformat"
                      >
                        Time Format
                        <input
                          className="my-2  block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
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
                  </div>
                  {/* horizontal line */}
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-[#2C2C2C]" />
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
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
                  </div>
                  {/* horizontal line */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 -mx-3 flex flex-wrap px-3">
                      <p className="mr-8 text-sm text-white">Guided Tour(s)</p>
                      <label
                        htmlFor="guidedtours"
                        className="ml-2 text-sm font-normal"
                      >
                        <input
                          id="guidedtours"
                          type="checkbox"
                          value=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                        />
                        <span>
                          It will appear automatically the first time.
                        </span>
                      </label>
                    </div>
                    <div className="col-span-3 -mx-3 flex flex-wrap px-3">
                      <p className="mr-8 text-sm text-white">Read Me First</p>
                      <label
                        htmlFor="readme"
                        className="ml-2 text-sm font-normal"
                      >
                        <input
                          id="readme"
                          type="checkbox"
                          value=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                        />
                        <span>
                          It will show as long as I don`t turn it off.
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* <input
                    type="text"
                    onFocus={(e) => {
                      e.currentTarget.type = "date";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.type = "text";
                      e.currentTarget.placeholder = "MM/DD/YYYY";
                    }}
                  ></input> */}
                  <div className="grid justify-items-end">
                    <div>
                      <Button size="sm" type="primary" className="button--">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
