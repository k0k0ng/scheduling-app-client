"use client";

import { useState } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";

import Password from "./components/Password";

export default function ProfileChangePassword() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div className="flex flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        // mobile will effect on media 76px
        className={`w-full pb-20 ${sidebarStatus ? "md:ml-64" : "md:ml-20"} `}
      >
        <TopNav title="Profile/Change Password" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Change Password
          </p>

          <div className="min-h-[80vh] rounded bg-[#202020] md:flex">
            <form className="w-full font-poppins">
              <div className="flex justify-start md:justify-center">
                <div className="w-full p-8 md:mx-16 md:my-12 md:w-3/4 md:p-0 lg:p-12">
                  <div className="mb-6">
                    <Password
                      labelTitle="Current Password"
                      id="currentpass"
                      value={currentPassword}
                      onChange={(e: any) => {
                        setCurrentPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-6">
                    <Password
                      labelTitle="New Password"
                      id="newpass"
                      value={newPassword}
                      onChange={(e: any) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-6">
                    <Password
                      labelTitle="Confirm New Password"
                      id="confirmpassword"
                      value={confirmNewPassword}
                      onChange={(e: any) => {
                        setConfirmNewPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-6 grid justify-items-end">
                    <Button size="md" type="primary" className="button--">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* endmain */}
        </main>
      </div>
    </div>
  );
}
