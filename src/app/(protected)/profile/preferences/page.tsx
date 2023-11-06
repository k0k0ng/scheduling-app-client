"use client";

import { useState } from "react";

// component
import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";
import Select from "@/components/SelectOption/page";
import DatePicker from "react-datepicker";

// css
import "react-datepicker/dist/react-datepicker.css";

export default function ProfilePreferences() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [startDate, setStartDate] = useState();
  const [timeFormat, setTimeFormat] = useState();
  const [headerClock, setHeaderClock] = useState();

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
              <div className="flex justify-start md:justify-center">
                <div className="w-full p-8 md:mx-16 md:my-12 md:w-3/4 md:p-0 lg:p-12">
                  <div className="mb-6">
                    <Select
                      labelName="Languages"
                      childOption={[
                        "English",
                        "Filipino",
                        "Arabic",
                        "Chinese",
                        "Korean",
                      ]}
                      parentOption="Filipino"
                    />
                  </div>
                  <div className="mb-6">
                    <Select
                      labelName="Time Zone"
                      childOption={[
                        "Asia/Singapore",
                        "Alfa Time Zone",
                        "Australian Central Standard Time",
                        "Acre Time",
                        "Atlantic Daylight Time",
                      ]}
                      parentOption="Asia/Singapore"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
                      htmlFor="dateformat"
                    >
                      Date Format
                      <div className="customdatepickerwidth">
                        <DatePicker
                          id="dateformat"
                          className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                          placeholderText="yyyy/mm/dd"
                          dateFormat="yyyy/MM/dd"
                          showPopperArrow={false}
                          selected={startDate}
                          onChange={(date: any) => setStartDate(date)}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
                      htmlFor="timeformat"
                    >
                      Time Format
                      <div className="customdatepickerwidth">
                        <DatePicker
                          id="timeformat"
                          className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                          placeholderText="h:mm:a"
                          showPopperArrow={false}
                          selected={timeFormat}
                          onChange={(date: any) => setTimeFormat(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                        />
                      </div>
                    </label>
                  </div>
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-[#2C2C2C]" />
                  {/*  */}
                  <div className="mb-6">
                    <label
                      className="mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
                      htmlFor="headerclock"
                    >
                      Top Header Clock
                      <div className="customdatepickerwidth">
                        <DatePicker
                          id="headerclock"
                          className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                          placeholderText="h:mm:a"
                          showPopperArrow={false}
                          selected={headerClock}
                          onChange={(date: any) => setHeaderClock(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                        />
                      </div>
                    </label>
                  </div>
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-[#2C2C2C]" />
                  {/*  */}
                  <div className="mb-6">
                    <div className="mb-5 flex-wrap md:flex">
                      <p className="mb-5 w-[130px] text-xs text-white md:mb-0 md:text-sm">
                        Guided Tour(s)
                      </p>
                      <label
                        htmlFor="guidedtours"
                        className="flex-inline cursor-pointer items-center text-sm font-normal"
                      >
                        <input
                          id="guidedtours"
                          type="checkbox"
                          value=""
                          className="h-3 w-3 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600 md:h-4 md:w-4"
                        />
                        <span className="ml-2 text-xs text-white md:text-sm">
                          It will appear automatically the first time.
                        </span>
                      </label>
                    </div>
                    <div className="flex-wrap md:flex">
                      <p className="mb-5 w-[130px] text-xs text-white md:mb-0 md:text-sm">
                        Read Me First
                      </p>
                      <label
                        htmlFor="readme"
                        className="flex-inline cursor-pointer items-center text-sm font-normal"
                      >
                        <input
                          id="readme"
                          type="checkbox"
                          value=""
                          className="h-3 w-3 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600 md:h-4 md:w-4"
                        />
                        <span className="ml-2 text-xs text-white md:text-sm">
                          It will show as long as I don`t turn it off.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-6 grid justify-items-end">
                    <Button size="md" type="primary" className="button--">
                      Save Changes
                    </Button>
                  </div>
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
