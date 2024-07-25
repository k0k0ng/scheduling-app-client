import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";

export default function ModalSelectLongCaptionMenu() {
  const [selectLongCaptionMenuIsOpen, setSelectLongCaptionMenuIsOpen] =
    useState(false);
  const [selectedLongCaptionOption, setSelectedLongCaptionOption] =
    useState("splitToFlood");

  const longCaptionOptionsListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (
      longCaptionOptionsListDialog.current?.className &&
      selectLongCaptionMenuIsOpen
    ) {
      longCaptionOptionsListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (
      longCaptionOptionsListDialog.current?.className &&
      selectLongCaptionMenuIsOpen
    ) {
      longCaptionOptionsListDialog.current.classList.remove("is-hidden");
    }

    longCaptionOptionsListDialog.current?.close();
    setSelectLongCaptionMenuIsOpen(!selectLongCaptionMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectLongCaptionMenuIsOpen) {
      closePopUpMenu();
    } else {
      longCaptionOptionsListDialog.current?.show();
      setSelectLongCaptionMenuIsOpen(!selectLongCaptionMenuIsOpen);
    }
  };

  const handleSelectChannel = (value: string) => {
    setSelectedLongCaptionOption(value);
    console.log(selectedLongCaptionOption);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full flex-row items-center justify-between rounded-md border px-4"
        onClick={handleTogglePopUpMenu}
      >
        <div className="flex items-center justify-center gap-x-4  py-2">
          <SubtitlesOutlinedIcon />
          <span>Long Caption Configuration</span>
        </div>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={longCaptionOptionsListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("splitToFlood")}
            >
              If caption exceeded to limit then split to flood
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("trim")}
            >
              If caption exceeded to limit then trim it
            </button>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
