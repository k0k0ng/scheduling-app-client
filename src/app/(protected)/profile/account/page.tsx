"use client";

import { useState } from "react";
import Image from "next/image";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";

import Countries from "@/app/(protected)/profile/account/json/data.json";

export default function ProfileAccount() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [countryMobileStatus, setCountryMobileStatus] = useState("+63");

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
              <div className="flex justify-start md:justify-center">
                <div className="w-full p-8 md:mx-16 md:my-12 md:w-3/4 md:p-0 lg:p-12">
                  <div className="block 2xl:flex">
                    <div className="flex h-full w-1/3 justify-start md:mt-6 lg:mr-12  ">
                      <div className="relative mb-6 flex justify-items-center">
                        <Image
                          className="min-w-[113px] rounded  border border-[#828181] bg-[#2C2C2C] p-4 md:min-w-[198px]"
                          src="/svg/profile/profile-icon.svg"
                          alt="profile_picture"
                          width={0}
                          height={0}
                        />

                        <button
                          className="absolute -right-2 -top-2"
                          type="button"
                        >
                          <Image
                            src="/svg/profile/profile-edit.svg"
                            className="min-w-[21px]  md:min-w-[37px]"
                            alt="edit"
                            width={0}
                            height={0}
                          />
                        </button>
                        <button
                          className="absolute -bottom-2 -right-2"
                          type="button"
                        >
                          <Image
                            src="/svg/profile/profile-delete.svg"
                            className="min-w-[21px] md:min-w-[37px]"
                            alt="delete"
                            width={0}
                            height={0}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="md:flex md:flex-wrap">
                        <div className="mb-6 w-full md:p-1 lg:w-1/2">
                          <label
                            className="block text-xs font-normal tracking-wide text-white md:text-sm"
                            htmlFor="firstName"
                          >
                            First Name
                            <input
                              className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                              id="firstName"
                              type="text"
                              placeholder="Enter First Name"
                            />
                          </label>
                        </div>
                        <div className="mb-6 w-full md:p-1 lg:w-1/2">
                          <label
                            className="block text-xs font-normal tracking-wide text-white md:text-sm"
                            htmlFor="lastName"
                          >
                            Last Name
                            <input
                              className="my-2 block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                              id="lastName"
                              type="text"
                              placeholder="Enter Last Name"
                            />
                          </label>
                        </div>
                      </div>

                      <div className="mb-6 md:p-1">
                        <label
                          className="mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
                          htmlFor="emailAddress"
                        >
                          Email Address
                          <input
                            className="my-2  block w-full appearance-none rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
                            id="emailAddress"
                            type="email"
                            placeholder="Enter Email Address"
                          />
                        </label>
                      </div>
                      <div className="mb-6 md:p-1">
                        <label
                          className="mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
                          htmlFor="mobileNumber"
                        >
                          Mobile Number
                          <div className="flex">
                            <div className="inset-y-0 my-2 flex items-center  border-r bg-[#2C2C2C] px-3 py-3 text-gray-200 md:w-1/12">
                              <span className="text-xs text-[#c0c0c0] md:text-sm">
                                {countryMobileStatus}
                              </span>
                            </div>
                            <div className="relative w-full">
                              <input
                                className="my-2 w-full bg-[#828181] py-3 pl-2 pr-16 text-xs text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:pr-20 md:text-sm"
                                id="mobileNumber"
                                type="text"
                                placeholder="Enter Phone Number"
                              />
                              <select
                                className="sidebarscroll absolute inset-y-0 right-0 my-2  border-l bg-[#2C2C2C] px-2 py-3 text-xs text-[#c0c0c0] focus:outline-none"
                                onChange={(e: any) => {
                                  setCountryMobileStatus(e.target.value);
                                }}
                              >
                                {Countries.map((country): any => {
                                  if (country.code === "PH") {
                                    return (
                                      <option
                                        key={country.name}
                                        value={country.dial_code}
                                        selected
                                      >
                                        {country.code}
                                      </option>
                                    );
                                  }
                                  return (
                                    <option
                                      key={country.name}
                                      value={country.dial_code}
                                    >
                                      {country.code}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </label>
                      </div>
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
