"use client";

import { useState } from "react";

// component
import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";

// icon
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import "./style.css";

export default function BillingSubscription() {
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
            Subscription
          </p>
          <div className="block h-full w-full justify-center xl:flex">
            <div className="mb-4 w-full rounded bg-[#202020] p-8 md:mr-4 ">
              <div className="mb-10">
                <div className="top-card-button-bg relative mb-2 min-h-[150px] w-full rounded-md p-8 sm:min-h-[194px] md:w-[366px]">
                  <div className="absolute left-0 top-0 p-4 sm:p-6">
                    <p className="font-poppins text-[9px] font-thin tracking-tight sm:text-[14px]">
                      Subscription Plan
                    </p>
                    <p className="font-poppins text-sm font-semibold text-[#7BDCDE] sm:text-[18px]">
                      Premium
                    </p>
                  </div>
                  <div className="absolute right-0 top-0 p-4 sm:-top-2 sm:p-6">
                    <p className="font-poppins text-[20px] font-semibold tracking-tight sm:text-[36px]">
                      $19.99
                      <span className="text-[9px] font-medium md:text-sm">
                        /mo
                      </span>
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 p-4 sm:p-6">
                    <Button
                      type="primary"
                      className="button-- px-2 py-2 text-[9px] sm:text-sm md:px-3"
                      onClick=""
                    >
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
                <p className="font poppins text-[10px] font-light leading-5 md:text-sm">
                  Your plan will automatically renew on{" "}
                  <span className="font-semibold">MM/DD/YYYY.</span> You’ll be
                  charged <span className="font-semibold">$19.99/month.</span>
                </p>
              </div>
              <div className="font-poppins ">
                <p className="mb-8 text-sm font-semibold tracking-tight text-[#7BDCDE] md:text-[20px]">
                  Plan Includes
                </p>
                <ul className="sidebarscroll max-h-[40vh] w-full overflow-y-auto xl:max-h-[52vh]">
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">
                        Number of Users
                      </span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        1
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Channels</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        2
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Post Per Day</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        5
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Credits</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                  <li className="border-b border-[#2C2C2C] ">
                    <a
                      className="flex w-full items-center justify-between p-2 py-2  hover:bg-[#7B46DE] "
                      href="/#"
                    >
                      <span className="text-xs 2xl:text-sm">Lorem Ipsum</span>
                      <button
                        className="rounded bg-[#2C2C2C] px-3 py-1 text-xs hover:text-[#7B46DE] 2xl:text-sm"
                        type="button"
                      >
                        0
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block h-full w-full font-poppins xl:w-2/3">
              {/* 1 */}
              <div className="mb-4 min-h-[276px] w-full rounded bg-[#202020] p-8">
                <div className="mb-6 flex w-full items-center justify-between border-b border-[#2C2C2C] pb-4">
                  <p className="text-sm font-semibold 2xl:text-[18px]">
                    Billing Address
                  </p>
                  <Button
                    type="primary"
                    onClick={() => {}}
                    className="button-- px-2 py-2 text-xs md:text-sm 2xl:px-3"
                    iconLeft={
                      <EditOutlinedIcon className="h-3 w-3 md:h-4 md:w-4" />
                    }
                    spanClassName="hidden 2xl:flex ml-2"
                  >
                    Edit
                  </Button>
                </div>
                <div className="block 2xl:flex">
                  <label
                    className="mr-2 text-xs font-normal tracking-wide text-white 2xl:text-sm"
                    htmlFor="fullname"
                  >
                    Full Name
                    <input
                      className="my-2 w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight  focus:border-gray-500 focus:bg-[#828181] focus:outline-none 2xl:text-sm"
                      id="fullname"
                      type="text"
                      placeholder="John Doe"
                    />
                  </label>
                  <label
                    className="mb-2 text-xs font-normal tracking-wide text-white 2xl:text-sm"
                    htmlFor="emailadd"
                  >
                    Email Address
                    <input
                      className="my-2 w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight focus:border-gray-500 focus:bg-[#828181] focus:outline-none 2xl:text-sm"
                      id="emailadd"
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </label>
                </div>
                <div>
                  <label
                    className="text-xs font-normal tracking-wide text-white 2xl:text-sm"
                    htmlFor="address"
                  >
                    Address
                    <input
                      className="my-2 w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight focus:border-gray-500 focus:bg-[#828181] focus:outline-none 2xl:text-sm"
                      id="address"
                      type="text"
                      placeholder="ABC Street, XYZ City, Philippines"
                    />
                  </label>
                </div>
              </div>
              {/* 2 */}
              <div className="mb-4 min-h-[276px] w-full rounded bg-[#202020] p-8">
                <div className="flex w-full items-center justify-between border-b border-[#2C2C2C] pb-4">
                  <p className="text-sm font-semibold 2xl:text-[18px]">
                    Payment Method
                  </p>
                  <Button
                    type="primary"
                    onClick={() => {}}
                    className="button-- px-2 py-2 text-xs md:text-sm 2xl:px-3"
                    iconLeft={
                      <AddOutlinedIcon className="h-3 w-3 md:h-4 md:w-4" />
                    }
                    spanClassName="hidden 2xl:flex ml-2"
                  >
                    Add
                  </Button>
                </div>
                <div className="border-b border-[#2C2C2C] ">
                  <p className="flex min-h-[125px] items-center justify-center text-center text-xs tracking-tight 2xl:text-sm">
                    You have not set a payment method yet.
                  </p>
                </div>
              </div>
              <div className="mb-4 min-h-[276px] w-full rounded bg-[#202020] p-8">
                <div className="flex w-full items-center justify-between border-b border-[#2C2C2C] pb-4">
                  <p className="text-sm font-semibold 2xl:text-[18px]">
                    Subscription Online
                  </p>
                  <Button
                    type="primary"
                    onClick={() => {}}
                    className="button-- px-2 py-2 text-xs md:text-sm 2xl:px-3"
                    iconLeft={
                      <AddOutlinedIcon className="h-3 w-3 md:h-4 md:w-4" />
                    }
                    spanClassName="hidden 2xl:flex ml-2"
                  >
                    Add
                  </Button>
                </div>
                <div className="border-b border-[#2C2C2C] ">
                  <p className="flex min-h-[125px] items-center justify-center text-center text-xs tracking-tight 2xl:text-sm">
                    You have not set a payment method yet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
