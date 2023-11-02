"use client";

import { useState } from "react";
import Image from "next/image";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";

export default function ProfileAccount() {
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
            Account
          </p>
          {/* test commit */}
          <div className="min-h-[80vh] rounded bg-[#202020] md:flex">
            <form className="w-full font-poppins">
              {/* spacing */}
              <div className="p-8 md:mx-16 md:my-12 md:p-0 lg:p-12">
                <div className="block lg:flex">
                  <div className="flex h-full w-1/3 justify-start md:mt-6 lg:mr-12  ">
                    <div className="relative mb-6">
                      <Image
                        id="showImage"
                        className="w-[198px] max-w-xs items-stretch rounded border border-[#828181] bg-[#2C2C2C] p-5"
                        src="/svg/profile/profile-icon.svg"
                        alt="profile_picture"
                        width={148}
                        height={148}
                      />
                      <button
                        className="absolute -right-3 -top-3"
                        type="button"
                      >
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
                  <div className="w-full">
                    <div className="md:flex md:flex-wrap">
                      <div className="mb-6 w-full md:p-1 lg:w-1/2">
                        <label
                          className="block text-xs font-normal tracking-wide text-white"
                          htmlFor="firstName"
                        >
                          First Name
                          <input
                            className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                            id="firstName"
                            type="text"
                            placeholder=""
                          />
                        </label>
                      </div>
                      <div className="mb-6 w-full md:p-1 lg:w-1/2">
                        <label
                          className="block text-xs font-normal tracking-wide text-white"
                          htmlFor="lastName"
                        >
                          Last Name
                          <input
                            className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                            id="lastName"
                            type="text"
                            placeholder=""
                          />
                        </label>
                      </div>
                    </div>

                    <div className="mb-6 md:p-1">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="emailAddress"
                      >
                        Email Address
                        <input
                          className="my-2  block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                          id="emailAddress"
                          type="email"
                          placeholder=""
                        />
                      </label>
                    </div>
                    <div className="mb-6 md:p-1">
                      <label
                        className="mb-2 block text-xs font-normal tracking-wide text-white"
                        htmlFor="mobileNumber"
                      >
                        Mobile Number
                        <input
                          className="my-2  block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none"
                          id="mobileNumber"
                          type="text"
                          placeholder=""
                        />
                      </label>
                    </div>
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
