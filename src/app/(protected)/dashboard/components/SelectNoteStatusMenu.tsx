import { useState, useRef, Dispatch, SetStateAction } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type SelectNoteStatusType = {
  selectedNoteStatus: string;
  setSelectedNoteStatus: Dispatch<
    SetStateAction<{ status: string; title: string; description: string }>
  >;
};

export default function SelectNoteStatusMenu({
  selectedNoteStatus,
  setSelectedNoteStatus,
}: SelectNoteStatusType) {
  const [calendarViewFilterIsOpen, setCalendarViewFilterIsOpen] =
    useState(false);
  const linksListDialog = useRef<HTMLDialogElement>(null);

  const statusMenuLinks = [
    {
      label: "To-do",
    },
    {
      label: "In-Progress",
    },
    {
      label: "Done",
    },
  ];

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

  const handleSelectNoteStatus = (status: string) => {
    setSelectedNoteStatus((prevValue) => {
      return { ...prevValue, status };
    });

    handleTogglePopUpMenu();
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex min-w-[10rem] items-center justify-between rounded border-[#828181] bg-[#2C2C2C] px-4 py-2 font-poppins text-[14px] transition duration-300 hover:border-[#7B46DE]"
        onClick={handleTogglePopUpMenu}
      >
        <span>{selectedNoteStatus === "" ? "Status" : selectedNoteStatus}</span>

        <KeyboardArrowDownIcon />
      </button>
      <dialog
        ref={linksListDialog}
        className="select-note-status-dialog absolute m-0 mt-2 min-w-[21rem] overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          {statusMenuLinks.map((link) => {
            return (
              <li key={link.label}>
                <button
                  type="button"
                  className="min-h-[45px] w-full px-5 text-start hover:bg-[#535353]"
                  onClick={() => handleSelectNoteStatus(link.label)}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </dialog>
    </div>
  );
}
