"use client";

import { useState } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";
import Image from "next/image";

// icon
import SearchIcon from "@mui/icons-material/Search";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

export default function BillingInvoices() {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  return (
    <div className="flex flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        className={`w-full pb-20 ${sidebarStatus ? "md:ml-64" : "md:ml-20"} `}
      >
        <TopNav title="Billing" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Invoices
          </p>
          <form
            action="/dashboard"
            autoComplete="off"
            className="search-form mb-4 flex w-full flex-row rounded-md border border-[#C0C0C0] bg-[#121212] p-1 transition duration-300 md:hidden"
          >
            <Button
              type="transparent"
              onClick={() => {}}
              className="flex justify-center px-2 py-2 transition  duration-300 hover:text-[#7B46DE] md:px-3"
              iconLeft={<SearchIcon className="h-4 w-4 md:h-6 md:w-6" />}
            />
            <input
              type="text"
              placeholder="Search anything"
              name="search"
              className="w-full px-0 text-xs md:px-2 md:text-sm"
            />
          </form>
          <div className="min-h-[80vh] rounded bg-[#202020]">
            <div className="hidden justify-end px-8 pb-10 pt-8 md:flex lg:px-20">
              <form
                action="/dashboard"
                autoComplete="off"
                className="search-form mr-0 flex w-full flex-row rounded-md border border-[#C0C0C0] bg-[#2C2C2C] transition duration-300 md:mr-4 xl:w-5/12 2xl:w-3/12"
              >
                <Button
                  type="transparent"
                  onClick={() => {}}
                  className="flex justify-center px-2 py-2 transition  duration-300 hover:text-[#7B46DE] md:px-3"
                  iconLeft={<SearchIcon className="h-4 w-4 md:h-6 md:w-6" />}
                />
                <input
                  type="text"
                  placeholder="Search anything"
                  name="search"
                  className="w-full px-0 text-xs md:px-2 md:text-sm"
                />
              </form>
              <Button
                type="transparent"
                className="border-secondary px-2 py-2 text-xs md:text-sm"
                iconLeft={
                  <CachedOutlinedIcon className="h-4 w-4 md:h-6 md:w-6" />
                }
                onClick={() => {}}
              />
            </div>
            {/* table */}
            <div className="w-full border-b border-[#2C2C2C]">
              <div className="flex px-8 pb-5 pt-8 md:pt-0 lg:px-20">
                <div className="flex w-full justify-start">
                  <p className="font-poppins text-sm font-semibold md:text-[18px]">
                    CREATED AT
                  </p>
                </div>
                <div className="flex w-full justify-end 2xl:w-5/12">
                  <p className="hidden w-full justify-start justify-items-start text-start font-poppins text-sm font-semibold md:flex md:text-[18px] ">
                    ACTIONS
                  </p>
                  <p className="font-poppins text-sm font-semibold md:text-[18px]">
                    TOTAL
                  </p>
                </div>
              </div>
            </div>
            <div className="flex min-h-[62vh] justify-center">
              <Image
                src="/svg/settings/integrations/vector.svg"
                alt="profile"
                className="w-[150px] md:min-w-[207px]"
                width={0}
                height={0}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
