"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import SideBar from "@/components/SideBar";
import TopNav from "@/components/TopNav";
import SearchIcon from "@mui/icons-material/Search";
import TopCardButton from "./components/TopCardButton";

import AnalyticsOverview from "./components/AnalyticsOverview";

export default function Dashboard() {
  const router = useRouter();
  const [sidebarStatus, setSidebarStatus] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("actionFromDashboard")) {
      localStorage.removeItem("actionFromDashboard");
    }
  }, []);

  const handleConnectChannel = () => {
    localStorage.setItem("actionFromDashboard", "true");
    router.push("/settings/channels");
  };

  const handleCreatePost = () => {
    localStorage.setItem("actionFromDashboard", "true");
    router.push("/publishing/scheduler");
  };

  const handleInviteTeammate = () => {
    localStorage.setItem("actionFromDashboard", "true");
    router.push("/settings/permissions");
  };

  const handleStartYourSubscription = () => {
    localStorage.setItem("actionFromDashboard", "true");
    router.push("/settings/subscription");
  };

  return (
    <div className="flex flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div className={`w-full pb-20 ${sidebarStatus ? "ml-64" : "ml-20"} `}>
        <TopNav />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          <div className="flex min-h-[45px] w-full flex-row justify-end">
            <form
              action="/dashboard"
              autoComplete="off"
              className="search-form flex min-w-full flex-row rounded-md border border-[#C0C0C0] px-4 transition duration-300 lg:min-w-[100px]"
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
            }  gap-8 lg:grid-cols-2 xl:grid-cols-4`}
          >
            <TopCardButton
              cardImage="/svg/dashboard/connect-channel-icon.svg"
              cardText="Connect A Channel"
              cardAction={handleConnectChannel}
            />

            <TopCardButton
              cardImage="/svg/dashboard/create-post-icon.svg"
              cardText="Create A Post"
              cardAction={handleCreatePost}
            />

            <TopCardButton
              cardImage="/svg/dashboard/add-user-icon.svg"
              cardText="Invite A Teammate"
              cardAction={handleInviteTeammate}
            />

            <TopCardButton
              cardImage="/svg/dashboard/start-subscription-icon.svg"
              cardText="Start Your Subscription"
              cardAction={handleStartYourSubscription}
            />
          </div>

          <div className="mt-10 grid grid-cols-3 items-start gap-8 lg:grid-cols-6">
            <div className="col-span-3 min-h-[550px] rounded bg-[#202020] p-10 xl:col-span-2">
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
