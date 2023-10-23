"use client";

import { useState } from "react";

import TopNav from "@/components/TopNav";
import SideBar from "@/components/Sidebar";

export default function Home() {
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
        <TopNav />
      </div>
    </div>
  );
}
