"use client";

import { useState } from "react";

// components
import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";
import Image from "next/image";

// icon
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

export default function SettingsIntegrations() {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  return (
    <div className="flex h-[100vh] flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        // mobile will effect on media 76px
        className={`w-full pb-20 ${sidebarStatus ? "md:ml-64" : "md:ml-20"} `}
      >
        <TopNav title="Settings/Integrations" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Integrations
          </p>
          <div className="min-h-[80vh] rounded bg-[#202020]">
            <div className="justify-start md:justify-center ">
              <div className="w-full p-8 md:p-6 lg:p-12">
                <div className="flex w-full justify-between border-b border-[#2C2C2C] pb-6 md:border-none ">
                  <Button
                    className="button--"
                    type="primary"
                    size="md"
                    onClick={() => {}}
                    iconLeft={<AddOutlinedIcon />}
                    spanClassName="ml-2.5 hidden md:flex"
                  >
                    App
                  </Button>
                  <form
                    action="/dashboard"
                    autoComplete="off"
                    className="search-form flex w-7/12 flex-row rounded-md border border-[#C0C0C0] bg-[#2C2C2C] px-6 py-2 transition duration-300"
                  >
                    <button
                      aria-label="search-submit"
                      type="submit"
                      className="mr-4 transition duration-300 hover:text-[#7B46DE]"
                    >
                      <SearchIcon />
                    </button>
                    <input
                      type="text"
                      placeholder="Search anything"
                      name="search"
                      className="w-full"
                    />
                  </form>

                  <button
                    type="button"
                    aria-label="refreshbutton"
                    className="rounded-md border border-[#C0C0C0] bg-[#2C2C2C] p-2 hover:bg-[#7B46DE]"
                    onClick={() => {}}
                  >
                    <CachedOutlinedIcon fontSize="medium" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center py-24 md:py-20">
                <Image
                  src="/svg/settings/integrations/vector.svg"
                  alt="profile"
                  className="w-[150px] md:min-w-[207px]"
                  width={0}
                  height={0}
                />
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <h1 className="mb-3 text-[20px] font-semibold tracking-tighter text-[#7BDCDE] md:text-[48px]">
                    Add an Integration
                  </h1>
                  <p className="mb-6 text-[12px] md:mb-3 md:text-[16px]">
                    Would you like to add your first {"\t"}
                    <span className="block md:inline-flex">
                      integration now?
                    </span>
                  </p>
                  <Button
                    className="button-- mt-6 px-6 md:px-20"
                    type="primary"
                    size="md"
                    onClick={() => {}}
                  >
                    <AddOutlinedIcon fontSize="small" />
                    <span className="ml-2.5">Add Integration</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
