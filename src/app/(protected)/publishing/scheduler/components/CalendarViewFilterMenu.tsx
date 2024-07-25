import { useState, useRef } from "react";

import { delay } from "@/utils/globalUtils";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ListIcon from "@mui/icons-material/List";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PreviewIcon from "@mui/icons-material/Preview";

import PopUpFilterMenuLink from "./components/PopUpFilterMenuLink";

export default function CalendarViewFilterMenu() {
  const [calendarViewFilterIsOpen, setCalendarViewFilterIsOpen] =
    useState(false);

  const connectChannelModal = useRef<HTMLDialogElement>(null);

  const closePopUpFilterMenu = async () => {
    if (connectChannelModal.current?.className && calendarViewFilterIsOpen) {
      connectChannelModal.current.classList.add("is-hidden");
    }

    await delay(300);

    if (connectChannelModal.current?.className && calendarViewFilterIsOpen) {
      connectChannelModal.current.classList.remove("is-hidden");
    }

    connectChannelModal.current?.close();
    setCalendarViewFilterIsOpen(!calendarViewFilterIsOpen);
  };

  const handleToggleCalendarViewFilter = () => {
    if (calendarViewFilterIsOpen) {
      closePopUpFilterMenu();
    } else {
      connectChannelModal.current?.show();
      setCalendarViewFilterIsOpen(!calendarViewFilterIsOpen);
    }
  };

  const handleMonthlyViewLinkAction = () => {
    console.log("Monthly View");
  };

  const handleWeeklyViewLinkAction = () => {
    console.log("Weekly View");
  };

  const handleListViewLinkAction = () => {
    console.log("List View");
  };

  const handleCompactViewLinkAction = () => {
    console.log("Compact View");
  };

  const handleDetailedViewLinkAction = () => {
    console.log("Derailed View");
  };

  const handlePreviewViewLinkAction = () => {
    console.log("Preview View");
  };

  const menuLinks = [
    {
      label: "Monthly View",
      icon: <CalendarTodayOutlinedIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleMonthlyViewLinkAction,
    },
    {
      label: "Weekly View",
      icon: <EventNoteIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleWeeklyViewLinkAction,
    },
    {
      label: "List View",
      icon: <ListIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleListViewLinkAction,
    },
    {
      label: "Compact View",
      icon: <ClearAllIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleCompactViewLinkAction,
    },
    {
      label: "Detailed View",
      icon: <ListAltIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleDetailedViewLinkAction,
    },
    {
      label: "Preview View",
      icon: <PreviewIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handlePreviewViewLinkAction,
    },
  ];

  return (
    <div className="relative">
      <button
        aria-label="togglecalendar"
        type="button"
        className="rounded-[50%] bg-[#2C2C2C] p-2 transition duration-300 hover:bg-[#7B46DE]"
        onClick={handleToggleCalendarViewFilter}
      >
        <CalendarTodayOutlinedIcon className="mt-[-3px] h-[20px] w-[24px]" />
      </button>
      <dialog
        ref={connectChannelModal}
        className="calendar-view-filter-dialog left-[-13rem] z-10 mt-2 min-w-[14rem] overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          {menuLinks.map((link) => {
            return (
              <PopUpFilterMenuLink
                key={link.label}
                label={link.label}
                icon={link.icon}
                isDisabled={link.isDisabled}
                action={link.action}
              />
            );
          })}
        </ul>
      </dialog>
    </div>
  );
}
