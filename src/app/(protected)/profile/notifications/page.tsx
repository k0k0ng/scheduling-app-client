"use client";

import { useState } from "react";

import SideBar from "@/components/sidebar";
import TopNav from "@/components/topnav";

export default function Notifications() {
  const [sidebarStatus, setSidebarStatus] = useState(true);

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
        <TopNav title="Profile/Notifications" />

        <main className="mt-8 h-[100vh] min-w-[20rem] pl-10 pr-20">
          Notifications
        </main>
      </div>
    </div>
  );
}
