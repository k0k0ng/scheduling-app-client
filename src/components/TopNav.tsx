"use client";

import { useState } from "react";

import Image from "next/image";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const dummyNotificationData = [
  {
    datePosted: "5 days ago",
    title: "Lorem Ipsum",
    textContent:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur dolorum dolor est itaque corporis, assumenda illo repellat ullam vero dolore autem quis iusto amet minus aperiam, excepturi cumque quod.",
    imageContentURL: "/dashboard/png/sample-image-1.png",
  },
  {
    datePosted: "7 days ago",
    title: "Lorem Ipsum",
    textContent:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur dolorum dolor est itaque corporis, assumenda illo repellat ullam vero dolore autem quis iusto amet minus aperiam, excepturi cumque quod.",
    imageContentURL: "/dashboard/png/sample-image-2.png",
  },
  {
    datePosted: "5 days ago",
    title: "Lorem Ipsum",
    textContent:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur dolorum dolor est itaque corporis, assumenda illo repellat ullam vero dolore autem quis iusto amet minus aperiam, excepturi cumque quod.",
    imageContentURL: "/dashboard/png/sample-image-1.png",
  },
  {
    datePosted: "7 days ago",
    title: "Lorem Ipsum",
    textContent:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur dolorum dolor est itaque corporis, assumenda illo repellat ullam vero dolore autem quis iusto amet minus aperiam, excepturi cumque quod.",
    imageContentURL: "/dashboard/png/sample-image-2.png",
  },
];

export default function TopNav({ title }: any) {
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  return (
    <nav className=" pl- flex min-h-[4.75rem] w-full flex-row items-center justify-between border-b-[1px] border-slate-700 pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
      <p className="font-poppins text-[18px] font-semibold">{title}</p>
      <div className="flex flex-row gap-x-4">
        <button
          type="button"
          aria-label="notification"
          className="hidden md:block"
        >
          <NotificationsNoneIcon />
        </button>

        <button
          type="button"
          aria-label="notification"
          className="hidden font-poppins text-[18px] font-semibold md:block"
        >
          EN
        </button>

        <button
          type="button"
          aria-label="campaign"
          className="hidden md:block"
          onClick={() => setNotificationIsOpen(!notificationIsOpen)}
        >
          <CampaignIcon />
        </button>

        <div className="ml-8 hidden flex-col md:flex">
          <span className="text-[16px]">John Doe</span>
          <span className="text-[12px]">Free Account</span>
        </div>

        <button
          type="button"
          className="ml-2 flex items-center"
          aria-label="accountcircle"
        >
          <AccountCircleIcon className="h-[45px] w-[45px]" />
        </button>
      </div>

      {/* *** Notifications Drawer *** */}
      {notificationIsOpen && (
        <div className="fixed right-0 top-0 z-10 h-[100vh] bg-[#363636] sm:w-[25rem]">
          <div className="flex min-h-[4.75rem] flex-row items-center justify-between gap-x-4 border-b border-gray-900 px-8">
            <button type="button" aria-label="notification">
              <NotificationsNoneIcon />
            </button>

            <button
              type="button"
              aria-label="notification"
              className="font-poppins text-[18px] font-semibold md:block"
            >
              EN
            </button>

            <button
              type="button"
              aria-label="campaign"
              onClick={() => setNotificationIsOpen(!notificationIsOpen)}
            >
              <CampaignIcon />
            </button>

            <div className="ml-8 flex flex-col">
              <span className="text-[16px]">John Doe</span>
              <span className="text-[12px]">Free Account</span>
            </div>

            <button
              type="button"
              className="ml-2 flex items-center"
              aria-label="accountcircle"
            >
              <AccountCircleIcon className="h-[45px] w-[45px]" />
            </button>
          </div>
          <div className="sidebarscroll max-h-[100%] overflow-y-scroll px-4 pb-28 pt-5 font-poppins">
            <h5 className="px-4 text-[18px] font-semibold">What&apos;s New?</h5>

            <div className="mt-8 flex flex-col gap-y-6 ">
              {dummyNotificationData.map((data) => {
                return (
                  <div className=" cursor-pointer rounded-md p-4 transition duration-300 hover:bg-[#484848]">
                    <div className="text-[12px] font-light">
                      {data.datePosted}
                    </div>
                    <div className="mt-1 text-[18px] font-semibold">
                      {data.title}
                    </div>
                    <div className="mt-1.5 text-[14px] font-light leading-[20px]">
                      {data.textContent}
                    </div>

                    <Image
                      src={`${data.imageContentURL}`}
                      alt="discord logo"
                      width={320}
                      height={290}
                      className="mt-8 rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
