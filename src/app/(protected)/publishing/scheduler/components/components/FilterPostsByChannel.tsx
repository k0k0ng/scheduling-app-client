import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopUpFilterMenuLink from "./PopUpFilterMenuLink";

export default function FilterPostsByChannel() {
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

  const handleFilterByFacebook = () => {
    console.log("Facebook");
  };

  const handleFilterByInstagram = () => {
    console.log("Instagram");
  };

  const handleFilterByDiscord = () => {
    console.log("Discord");
  };

  const handleFilterByLinkedIn = () => {
    console.log("LinkedIn");
  };

  const statusMenuLinks = [
    {
      label: "Facebook",
      action: handleFilterByFacebook,
    },
    {
      label: "Instagram",
      action: handleFilterByInstagram,
    },
    {
      label: "Discord",
      action: handleFilterByDiscord,
    },
    {
      label: "LinkedIn",
      action: handleFilterByLinkedIn,
    },
  ];

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded border-[#828181] bg-[#2C2C2C] px-4 py-2 font-poppins text-[14px] transition duration-300 hover:border-[#7B46DE]"
        onClick={handleTogglePopUpMenu}
      >
        <span>Channel</span>

        <KeyboardArrowDownIcon />
      </button>
      <dialog
        ref={linksListDialog}
        className="filter-by-channel-dialog z-10 mt-2 min-w-[21rem] overflow-hidden rounded-lg bg-[#2c2c2c]"
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
