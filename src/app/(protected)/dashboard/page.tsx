"use client";

import { useState } from "react";

import SideBar from "@/components/sidebar";
import TopNav from "@/components/topnav";
import SearchIcon from "@mui/icons-material/Search";
import TopCardButton from "./components/TopCardButton";

import AnalyticsOverview from "./components/AnalyticsOverview";

export default function Dashboard() {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  const handleConnectChannel = () => {
    console.log("Connect A Channel");
  };

  const handleCreatePost = () => {
    console.log("Create A Post");
  };

  const handleInviteTeammate = () => {
    console.log("Invite A Teammate");
  };

  const handleStartYourSubscription = () => {
    console.log("Start Your Subscription");
  };

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
        <TopNav />

        <main className="mt-8 h-[100vh] min-w-[20rem] pl-10 pr-20">
          <div className="flex min-h-[45px] w-full flex-row justify-end">
            <form
              action="/dashboard"
              autoComplete="off"
              className="search-form flex flex-row rounded border border-[#C0C0C0] px-4 transition duration-300"
            >
              <button
                type="submit"
                className="mr-4 transition duration-300 hover:text-[#7B46DE]"
              >
                <SearchIcon />
              </button>
              <input type="text" placeholder="Search anything" name="search" />
            </form>
          </div>

          <div
            className={`mt-10 grid grid-cols-1 ${
              sidebarStatus ? "md:grid-cols-1" : "md:grid-cols-2"
            }  gap-8 xl:grid-cols-4`}
          >
            <TopCardButton
              cardImage="/svg/dashboard/connect-channel-icon.svg"
              cardText="Connect A Channel"
              cardAction={handleConnectChannel}
            />

            <TopCardButton
              cardImage="/svg/dashboard/connect-channel-icon.svg"
              cardText="Create A Post"
              cardAction={handleCreatePost}
            />

            <TopCardButton
              cardImage="/svg/dashboard/connect-channel-icon.svg"
              cardText="Invite A Teammate"
              cardAction={handleInviteTeammate}
            />

            <TopCardButton
              cardImage="/svg/dashboard/connect-channel-icon.svg"
              cardText="Start Your Subscription"
              cardAction={handleStartYourSubscription}
            />
          </div>

          <div className="mt-10 grid grid-cols-6 gap-8">
            <div className="col-span-2 min-h-[550px] rounded bg-[#202020] p-10">
              <h5 className="text-[18px] font-semibold">Task Board</h5>
              <div className="mt-2 text-[12px]">
                Summary of your active boards
              </div>
              <div className="mt-4 min-h-[180px] w-full rounded bg-[#FFF]" />
              <div className="mt-4 min-h-[180px] w-full rounded bg-[#FFF]" />
              <div className="mt-4 min-h-[180px] w-full rounded bg-[#FFF]" />
            </div>

            <AnalyticsOverview />
          </div>
        </main>
      </div>
    </div>
  );
}
