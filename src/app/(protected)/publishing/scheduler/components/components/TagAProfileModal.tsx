import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import FilterPostsByChannel from "./FilterPostsByChannel";

export default function TagAProfileModal() {
  const [activePanel, setActivePanel] = useState("search");

  return (
    <>
      <div className="flex items-center px-8 py-10 font-poppins text-[20px] text-white">
        Tag A Profile
        <span className="ml-3 rounded bg-[#4f46e4] px-3 py-0.5 text-[12px]">
          BETA
        </span>
      </div>

      <div className="flex gap-x-2 border-b border-[#828181] px-8 font-poppins text-white">
        <button
          type="button"
          className={`flex gap-x-2 rounded-t-md  px-3 py-2 text-[14px] transition duration-300 hover:bg-[#2C2C2C] ${
            activePanel === "search" && "bg-[#2C2C2C]"
          }`}
          onClick={() => setActivePanel("search")}
        >
          <SearchIcon className="h-[20px] w-[20px]" />
          Search
        </button>

        <button
          type="button"
          className={`flex gap-x-2 rounded-t-md px-3 py-2 text-[14px] transition duration-300 hover:bg-[#2C2C2C] ${
            activePanel === "favorites" && "bg-[#2C2C2C]"
          }`}
          onClick={() => setActivePanel("favorites")}
        >
          <StarRoundedIcon className="h-[20px] w-[20px]" />
          Favorites
        </button>
      </div>

      {activePanel === "search" && (
        <div className="min-h-[32rem]">
          <div className="mt-4 flex gap-x-3 px-8 text-white">
            <FilterPostsByChannel />

            <form
              action="/dashboard"
              autoComplete="off"
              className="search-form flex min-w-full flex-row rounded-md border border-[#C0C0C0] px-4 transition duration-300 lg:min-w-[100px]"
            >
              <button
                aria-label="search-submit"
                type="submit"
                className="mr-4 transition duration-300 hover:text-[#7B46DE]"
              >
                <SearchIcon />
              </button>
              <input
                type="text"
                placeholder="Search anything"
                name="search"
                className="search-input"
              />
            </form>
          </div>

          <div className="flex min-h-[29rem] flex-col items-center justify-center gap-y-3 font-poppins text-white">
            <span className="text-[20px]">No Records Yet</span>
            <span className="text-[14px]">
              This section has no records yet.
            </span>
          </div>
        </div>
      )}

      {activePanel === "favorites" && (
        <div className="min-h-[32rem]">
          <div className="flex min-h-[29rem] flex-col items-center justify-center gap-y-3 font-poppins text-white">
            <span className="text-[20px]">Coming Soon</span>
            <span className="text-[14px]">
              This section is not yet available
            </span>
          </div>
        </div>
      )}
    </>
  );
}
