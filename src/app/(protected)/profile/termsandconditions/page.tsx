"use client";

import { useState } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";

export default function ProfileTermsAndCondition() {
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
        <TopNav title="Profile/Terms and Condition" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Terms and Conditions
          </p>

          <div className="min-h-[80vh] rounded bg-[#202020] md:flex">
            {/* set forms full and font poppins */}
            <form className="w-full font-poppins">
              {/* mobile spacing */}
              <div className="flex justify-start md:justify-center ">
                <div className="p-8 md:mx-12 md:my-12 md:p-0 lg:p-12">
                  <div className="block lg:flex">
                    <div className="w-full">
                      <div className="mb-6 w-full">
                        <p className="flex justify-start text-base font-semibold">
                          Terms and Condition
                        </p>
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="term1"
                          className="flex cursor-pointer items-start text-sm font-normal md:items-center"
                        >
                          <input
                            id="term1"
                            type="checkbox"
                            value=""
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                          />
                          <p className="ml-2 leading-normal">
                            I have read and accept the
                            <span className="font-semibold">
                              {" 'Terms & Use'"}
                            </span>
                          </p>
                        </label>
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="term2"
                          className="flex cursor-pointer items-start text-sm font-normal md:items-center"
                        >
                          <input
                            id="term2"
                            type="checkbox"
                            value=""
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                          />
                          <span className="ml-2 leading-normal">
                            I agree to receive commercial electronic messages.
                          </span>
                        </label>
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="term3"
                          className="flex cursor-pointer items-start text-sm font-normal md:items-center"
                        >
                          <input
                            id="term3"
                            type="checkbox"
                            value=""
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                          />
                          <span className="ml-2 leading-normal">
                            I allow my usage statistics to be tracked.
                          </span>
                        </label>
                      </div>
                      <div className="mb-6 grid justify-items-end">
                        <Button size="md" type="primary" className="button--">
                          Save Changes
                        </Button>
                      </div>
                    </div>
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
