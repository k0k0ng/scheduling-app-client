"use client";

import { useState } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function BillingAffiliates() {
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
        <TopNav title="Billing" />

        <main className="mt-8 h-[100vh] min-w-[20rem] pl-10 pr-20">
          Billing Affiliates
        </main>
      </div>
    </div>
  );
}
