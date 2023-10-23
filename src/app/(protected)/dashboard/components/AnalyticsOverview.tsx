import { useState } from "react";

export default function AnalyticsOverview() {
  const [activeChannelCategory, setActiveChannelCategory] =
    useState("facebook");

  return (
    <div className="col-span-4 min-h-[550px] rounded bg-[#202020] px-12 py-8">
      <div className="flex w-full flex-row items-center justify-between">
        <h5 className="text-[18px] font-semibold">Analytics Overview</h5>

        <div className="flex flex-row items-center justify-evenly gap-1 rounded-[50px] bg-[#000] p-2">
          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-3 transition duration-300 hover:bg-[#7B46DE] ${
              activeChannelCategory === "facebook" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("facebook")}
          >
            <img
              src="/svg/dashboard/fb-icon.svg"
              alt="facebook logo"
              width="25px"
              className=""
            />
            <span className="text-[12px] ">Facebook</span>
          </button>

          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-3 transition duration-300 hover:bg-[#7B46DE] ${
              activeChannelCategory === "instagram" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("instagram")}
          >
            <img
              src="/svg/dashboard/instagram-icon.svg"
              alt="instagram logo"
              width="22px"
              className=""
            />
            <span className="text-[12px] ">Instagram</span>
          </button>

          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-3 transition duration-300 hover:bg-[#7B46DE] ${
              activeChannelCategory === "discord" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("discord")}
          >
            <img
              src="/svg/dashboard/discord-icon.svg"
              alt="discord logo"
              width="24px"
              className=""
            />
            <span className="text-[12px] ">Discord</span>
          </button>

          <button
            type="button"
            className={`flex flex-row items-center gap-x-3 rounded-[25px] py-1 pl-2 pr-3 transition duration-300 hover:bg-[#7B46DE] ${
              activeChannelCategory === "linkedin" ? "bg-[#7B46DE]" : ""
            }`}
            onClick={() => setActiveChannelCategory("linkedin")}
          >
            <img
              src="/svg/dashboard/linkedin-icon.svg"
              alt="linkedin logo"
              width="22px"
              className=""
            />
            <span className="text-[12px] ">LinkedIn</span>
          </button>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-5">
        <div className="min-h-[210px] w-full rounded bg-[#FFF]" />
        <div className="min-h-[210px] w-full rounded bg-[#FFF]" />
        <div className="min-h-[210px] w-full rounded bg-[#FFF]" />
        <div className="min-h-[210px] w-full rounded bg-[#FFF]" />
      </div>
    </div>
  );
}
