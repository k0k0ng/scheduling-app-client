"use client";

import { useState } from "react";

import SideBar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Button from "@/components/Button/Button";
import Password from "../../profile/changepassword/components/Password";

export default function SettingsPasswordManager() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");

  return (
    <div className="flex h-[100vh] flex-row items-start">
      <SideBar
        sidebarIsOpen={sidebarStatus}
        setSidebarIsOpen={setSidebarStatus}
      />
      <div
        // mobile will effect on media 76px
        className={`w-full pb-20 ${sidebarStatus ? "md:ml-64" : "md:ml-20"} `}
      >
        <TopNav title="Password Manager" />

        <main className="mt-8 min-w-[20rem] pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
          {/* <!-- This is an profile --> */}
          <p className="mb-5 font-poppins text-[20px] font-semibold md:hidden">
            Password Manager
          </p>

          <div className="flex justify-center p-0 md:px-8 md:py-20 lg:p-32 2xl:p-44">
            <div className="item min-h-[80vh] max-w-[78vh] rounded bg-[#202020] sm:min-h-[44vh]">
              <div className="w-full px-8 py-8 md:px-12">
                <div className="mb-10">
                  <h1 className="text-center font-poppins text-sm font-semibold text-[#7BDCDE] sm:text-xl md:text-xl lg:text-[24px]">
                    Create a &apos;Master Password&apos;
                  </h1>
                </div>
                <div className="mb-10">
                  <p className="text-left font-poppins text-xs leading-6 md:text-base">
                    Lorem ipsum dolor sit amet consectetur. Cursus integer
                    venenatis sed dolor. Amet tristique lacus sed nec. Fames
                    nisi in sit venenatis vitae risus aliquet augue. Fermentum
                    sed commodo diam nisi.
                  </p>
                </div>

                <form className="mb-10">
                  <Password
                    labelTitle="New Master Password"
                    id="currentpass"
                    value={currentPassword}
                    onChange={(e: any) => {
                      setCurrentPassword(e.target.value);
                    }}
                  />
                </form>
                <div className="flex justify-center">
                  <Button
                    size="md"
                    type="primary"
                    className="button-- px-2 md:px-[50px]"
                  >
                    Create Password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
