"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import TopCardButton from "./components/TopCardButton";

import AnalyticsOverviewPanel from "./components/AnalyticsOverviewPanel";

import "./style.css";

import TaskBoardPanel from "./components/TaskBoardPanel";

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
      <div className={`w-full ${sidebarStatus ? "md:ml-64" : "md:ml-20"} `}>
        <TopNav title="Dashboard" />

        <main className="sidebarscroll mt-8 max-h-[86vh] min-w-[20rem] overflow-y-scroll pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          <div
            className={` grid grid-cols-1 ${
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

          <div className="mt-10 grid grid-cols-3 items-start gap-8 font-poppins lg:grid-cols-6">
            <TaskBoardPanel />

            <AnalyticsOverviewPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
