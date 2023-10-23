import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

type SidebarState = {
  sidebarIsOpen: boolean;
};

export default function TopNav({ sidebarIsOpen }: SidebarState) {
  return (
    <nav
      className={` flex min-h-[75px] w-full flex-row items-center justify-between border-b-[1px] border-slate-700 pl-10 pr-20`}
    >
      <p className="text-[18px] font-semibold ">Overview</p>
      <div className="flex flex-row gap-x-4">
        <button type="button">
          <NotificationsNoneIcon />
        </button>

        <select className="border-none bg-transparent">
          <option className="bg-[#8844DA] p-8 text-center">EN</option>
          <option className="bg-[#8844DA] p-2 text-center">CH</option>
          <option className="bg-[#8844DA] p-2 text-center">EU</option>
        </select>

        <button type="button">
          <CampaignIcon />
        </button>

        <div className="ml-8 flex flex-col">
          <span className="text-[16px]">John Does</span>
          <span className="text-[12px]">Free Account</span>
        </div>

        <button className="ml-2 flex items-center">
          <AccountCircleIcon className="h-[45px] w-[45px]" />
        </button>
      </div>
    </nav>
  );
}
