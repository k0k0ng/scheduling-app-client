import { Dispatch, SetStateAction } from "react";

import Image from "next/image";

import FilterPostsByStatus from "./components/FilterPostsByStatus";
import FilterPostsByContentType from "./components/FilterPostsByContentType";
import FilterPostsByChannel from "./components/FilterPostsByChannel";
import FilterPostsByUser from "./components/FilterPostsByUser";

type FilterPostsMenuType = {
  isDisplayed: boolean;
  selectedFilter: string;
  setSelectedFilter: Dispatch<
    SetStateAction<{
      status: string;
      contentType: string;
      channel: string;
      assignedUser: string;
    }>
  >;
};

export default function FilterPostsMenu({
  isDisplayed,
  selectedFilter,
  setSelectedFilter,
}: FilterPostsMenuType) {
  if (isDisplayed) {
    return (
      <div className="flex flex-row items-center justify-evenly gap-x-6 border-t border-[#828181] p-5">
        <FilterPostsByStatus
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <FilterPostsByContentType />

        <FilterPostsByChannel />

        <FilterPostsByUser />

        <button
          type="button"
          className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md bg-[#7B46DE]"
        >
          <Image
            src="/svg/publishing/scheduler/arrow-head-right.svg"
            alt="instagram logo"
            width={18}
            height={18}
          />
        </button>
      </div>
    );
  }
}
