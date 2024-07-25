import { useState, useRef, Dispatch, SetStateAction } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopUpFilterMenuLink from "./PopUpFilterMenuLink";

type FilterPostsByStatusType = {
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

export default function FilterPostsByStatus({
  selectedFilter,
  setSelectedFilter,
}: FilterPostsByStatusType) {
  const [calendarViewFilterIsOpen, setCalendarViewFilterIsOpen] =
    useState(false);
  const linksListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (linksListDialog.current?.className && calendarViewFilterIsOpen) {
      linksListDialog.current.classList.add("is-hidden");
    }

    await delay(300);

    if (linksListDialog.current?.className && calendarViewFilterIsOpen) {
      linksListDialog.current.classList.remove("is-hidden");
    }

    linksListDialog.current?.close();
    setCalendarViewFilterIsOpen(!calendarViewFilterIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (calendarViewFilterIsOpen) {
      closePopUpMenu();
    } else {
      linksListDialog.current?.show();
      setCalendarViewFilterIsOpen(!calendarViewFilterIsOpen);
    }
  };

  const handleMonthlyViewLinkAction = () => {
    if (selectedFilter === "draft") {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "" };
      });
    } else {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "draft" };
      });
    }
  };

  const handleWeeklyViewLinkAction = () => {
    if (selectedFilter === "scheduled") {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "" };
      });
    } else {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "scheduled" };
      });
    }
  };

  const handleListViewLinkAction = () => {
    if (selectedFilter === "in-progress") {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "" };
      });
    } else {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "in-progress" };
      });
    }
  };

  const handleCompactViewLinkAction = () => {
    if (selectedFilter === "published") {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "" };
      });
    } else {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "published" };
      });
    }
  };

  const handleDetailedViewLinkAction = () => {
    if (selectedFilter === "error") {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "" };
      });
    } else {
      setSelectedFilter((prevValue) => {
        return { ...prevValue, status: "error" };
      });
    }
  };

  const statusMenuLinks = [
    {
      label: "Draft",
      action: handleMonthlyViewLinkAction,
    },
    {
      label: "Scheduled",
      action: handleWeeklyViewLinkAction,
    },
    {
      label: "In Progress",
      action: handleListViewLinkAction,
    },
    {
      label: "Published",
      action: handleCompactViewLinkAction,
    },
    {
      label: "Error",
      action: handleDetailedViewLinkAction,
    },
  ];

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded border-[#828181] bg-[#2C2C2C] px-4 py-2 font-poppins text-[14px] transition duration-300 hover:border-[#7B46DE]"
        onClick={handleTogglePopUpMenu}
      >
        <span>
          {selectedFilter === "" ? "Status" : selectedFilter.toUpperCase()}
        </span>

        <KeyboardArrowDownIcon />
      </button>
      <dialog
        ref={linksListDialog}
        className="filter-by-status-dialog z-10 mt-2 min-w-[21rem] overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          {statusMenuLinks.map((link) => {
            return (
              <PopUpFilterMenuLink
                key={link.label}
                label={link.label}
                icon={null}
                isDisabled={false}
                action={link.action}
              />
            );
          })}
        </ul>
      </dialog>
    </div>
  );
}
