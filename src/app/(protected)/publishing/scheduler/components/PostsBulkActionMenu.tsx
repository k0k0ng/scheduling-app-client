import { useState, useRef } from "react";

import { delay } from "@/utils/globalUtils";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MemoryIcon from "@mui/icons-material/Memory";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";

import PopUpFilterMenuLink from "./components/PopUpFilterMenuLink";

export default function PostsBulkActionMenu() {
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

  const handleSelectAllAction = () => {
    console.log("Select All");
  };

  const handleDeselectAllAction = () => {
    console.log("Deselect All");
  };

  const handleScheduleAllAction = () => {
    console.log("Schedule All");
  };

  const handleDraftAllAction = () => {
    console.log("Draft All");
  };

  const handleDeleteAllAction = () => {
    console.log("Delete All");
  };

  const handleContentGeneratorAction = () => {
    console.log("Content Generator");
  };

  const handleExportAction = () => {
    console.log("Export");
  };

  const handleRandomizerAction = () => {
    console.log("Randomizer");
  };

  const menuLinks = [
    {
      label: "Select All",
      icon: <CheckIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleSelectAllAction,
    },
    {
      label: "Deselect All",
      icon: <CloseIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: true,
      action: handleDeselectAllAction,
    },
    {
      label: "Schedule All",
      icon: <AccessTimeIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleScheduleAllAction,
    },
    {
      label: "Draft All",
      icon: <EditCalendarIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleDraftAllAction,
    },
    {
      label: "Delete All",
      icon: <DeleteOutlineIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleDeleteAllAction,
    },
    {
      label: "AI Content Generator",
      icon: <MemoryIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleContentGeneratorAction,
    },
    {
      label: "Export",
      icon: <FileDownloadOutlinedIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleExportAction,
    },
    {
      label: "Randomizer",
      icon: <ShuffleIcon className="mr-3 h-[20px] w-[20px]" />,
      isDisabled: false,
      action: handleRandomizerAction,
    },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        className="flex h-[40px] w-[40px] flex-row items-center justify-center rounded-[50%] bg-[#2C2C2C]  transition duration-300 hover:bg-[#7B46DE]"
        onClick={handleToggleCalendarViewFilter}
      >
        <span className="mt-[-13px] text-[25px]">...</span>
      </button>

      <dialog
        ref={connectChannelModal}
        className="posts-bulk-action-dialog left-[-13rem] z-10 mt-2 min-w-[14rem] overflow-hidden rounded-lg bg-[#2c2c2c]"
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
