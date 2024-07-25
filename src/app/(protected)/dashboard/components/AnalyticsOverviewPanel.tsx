import { useState } from "react";

import Image from "next/image";

export default function AnalyticsOverviewPanel() {
  const [activeChannelCategory, setActiveChannelCategory] =
    useState("facebook");

  return (
    <div className="col-span-3 min-h-[550px] rounded bg-[#202020] px-12 py-8 xl:col-span-4">
      <div className="flex w-full flex-col items-start justify-between gap-y-3 xl:flex-row xl:items-center">
        <h5 className="text-[18px] font-semibold">Analytics Overview</h5>

        <div className="flex flex-row items-center justify-evenly gap-1 rounded-[50px] bg-[#000] p-2">
          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-2 transition duration-300 hover:bg-[#7B46DE] xl:pr-3 ${
              activeChannelCategory === "facebook" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("facebook")}
          >
            <Image
              src="/global/svg/icons/fb-icon.svg"
              alt="facebook logo"
              width={25}
              height={25}
            />
            <span className="hidden text-[12px]  xl:block">Facebook</span>
          </button>

          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-2 transition duration-300 hover:bg-[#7B46DE] xl:pr-3 ${
              activeChannelCategory === "instagram" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("instagram")}
          >
            <Image
              src="/global/svg/icons/instagram-icon.svg"
              alt="instagram logo"
              width={22}
              height={22}
            />
            <span className="hidden text-[12px]  xl:block">Instagram</span>
          </button>

          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-2 transition duration-300 hover:bg-[#7B46DE] xl:pr-3 ${
              activeChannelCategory === "discord" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("discord")}
          >
            <Image
              src="/global/svg/icons/discord-icon.svg"
              alt="discord logo"
              width={24}
              height={24}
            />
            <span className="hidden text-[12px] xl:block ">Discord</span>
          </button>

          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-2 transition duration-300 hover:bg-[#7B46DE] xl:pr-3 ${
              activeChannelCategory === "linkedin" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("linkedin")}
          >
            <Image
              src="/global/svg/icons/linkedin-icon.svg"
              alt="linkedin logo"
              width={22}
              height={22}
            />
            <span className="hidden text-[12px] xl:block ">LinkedIn</span>
          </button>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex min-h-[225px] w-full items-center justify-center rounded bg-[#555555]">
          No data available
        </div>
        <div className="flex min-h-[225px] w-full items-center justify-center rounded bg-[#555555]">
          No data available
        </div>
        <div className="flex min-h-[225px] w-full items-center justify-center rounded bg-[#555555]">
          No data available
        </div>
        <div className="flex min-h-[225px] w-full items-center justify-center rounded bg-[#555555]">
          No data available
        </div>
      </div>
    </div>
  );
}
