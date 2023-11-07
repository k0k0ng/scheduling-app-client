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

export default function SettingsGeneral() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [startDate, setStartDate] = useState();

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
        <TopNav title="Settings/General" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            General
          </p>

          <div className="mb-2 min-h-[80vh] rounded bg-[#202020] md:flex">
            <form className="w-full font-poppins">
              <div className="flex justify-start md:justify-center">
                <div className="w-full p-8 md:mx-16 md:my-12 md:w-3/4 md:p-0 lg:p-12">
                  <div className="mb-6">
                    <label
                      className="mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
                      htmlFor="subscriptioName"
                    >
                      Subscription Name
                      <input
                        className="disabled  my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                        id="subscriptioName"
                        type="text"
                        value="Subscription #12345"
                      />
                    </label>
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
                      Last Update
                      <div className="customdatepickerwidth">
                        <DatePicker
                          id="dateformat"
                          selected={startDate}
                          onChange={(date: any) => setStartDate(date)}
                          className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                          placeholderText="YYYY/MM/DD | 00:00"
                          dateFormat="yyyy/MM/dd h:mm aa"
                          showPopperArrow={false}
                          showTimeInput
                        />
                      </div>
                    </label>
                  </div>

                  <div className="mb-6">
                    <label
                      className="mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
                      htmlFor="updatedby"
                    >
                      Last Update By
                      <input
                        className="my-2  block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                        id="updatedby"
                        type="text"
                        placeholder="John Doe"
                      />
                    </label>
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
