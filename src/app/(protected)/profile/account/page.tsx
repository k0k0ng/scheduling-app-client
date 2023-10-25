"use client";

import { useState } from "react";
import Image from "next/image";

import SideBar from "@/components/sidebar";
import TopNav from "@/components/topnav";
import Button from "@/components/Button/Button";

export default function Account() {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  return (
    <div className="flex h-[100vh] flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        className={`${
          sidebarStatus ? "ml-64" : "ml-20"
        } min-h-[100vh] w-full pb-28`}
      >
        <TopNav title="Profile/Account" />

        <main className="mt-8 h-[100vh] min-w-[20rem] pl-10 pr-20">
          {/* <!-- This is an profile --> */}

          <div className="h-full">
            <div className="block min-h-[80vh] md:flex">
              {/* profile picture */}
              <div className="flex bg-[#202020] md:w-2/5">
                <div className="p-12 md:ml-20 md:mt-12">
                  <div className="relative md:mt-6">
                    <Image
                      id="showImage"
                      className="w-48 max-w-xs items-stretch rounded border border-[#828181] bg-[#2C2C2C] p-5"
                      src="/svg/profile/profile-icon.svg"
                      alt="profile_picture"
                      width={148}
                      height={148}
                    />
                    <button className="absolute -right-3 -top-3" type="button">
                      <Image
                        src="/svg/profile/profile-edit.svg"
                        alt="edit"
                        width={36}
                        height={36}
                      />
                    </button>
                    <button
                      className="absolute -bottom-3 -right-3"
                      type="button"
                    >
                      <Image
                        src="/svg/profile/profile-delete.svg"
                        alt="delete"
                        width={36}
                        height={36}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <form className="w-full bg-[#202020]">
                <div className="p-12 md:mr-20 md:mt-12">
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="firstName"
                      >
                        First Name
                        <input
                          className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                          id="firstName"
                          type="text"
                          placeholder=""
                        />
                      </label>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="lastName"
                      >
                        Last Name
                        <input
                          className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                          id="lastName"
                          type="text"
                          placeholder=""
                        />
                      </label>
                    </div>
                  </div>
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="emailAddress"
                      >
                        Email Address
                        <input
                          className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                          id="emailAddress"
                          type="email"
                          placeholder=""
                        />
                      </label>
                    </div>
                  </div>
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="mobileNumber"
                      >
                        Mobile Number
                        <input
                          className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                          id="mobileNumber"
                          type="text"
                          placeholder=""
                        />
                      </label>
                    </div>
                  </div>
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
