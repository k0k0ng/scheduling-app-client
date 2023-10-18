import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function TopNav() {
  return (
    <>
      <nav className="flex min-h-[75px] w-full flex-row items-center justify-between border px-20">
        <div>Overview</div>
        <div className="flex flex-row gap-x-4">
          <button>
            <NotificationsNoneIcon />
          </button>

          <select className="border-none bg-transparent">
            <option className="bg-[#8844DA] p-8 text-center">EN</option>
            <option className="bg-[#8844DA] p-2 text-center">CH</option>
            <option className="bg-[#8844DA] p-2 text-center">EU</option>
          </select>

          <button>
            <CampaignIcon />
          </button>

          <div className="ml-8 flex flex-col">
            <span>John Doe</span>
            <span>Free Account</span>
          </div>

          <div className="flex items-center">
            <AccountCircleIcon />
          </div>
        </div>
      </nav>
    </>
  );
}
