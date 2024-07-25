import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function ModalSelectLabelMenu() {
  const [selectLabelMenuIsOpen, setSelectLabelMenuIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const labelsListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (labelsListDialog.current?.className && selectLabelMenuIsOpen) {
      labelsListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (labelsListDialog.current?.className && selectLabelMenuIsOpen) {
      labelsListDialog.current.classList.remove("is-hidden");
    }

    labelsListDialog.current?.close();
    setSelectLabelMenuIsOpen(!selectLabelMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectLabelMenuIsOpen) {
      closePopUpMenu();
    } else {
      labelsListDialog.current?.show();
      setSelectLabelMenuIsOpen(!selectLabelMenuIsOpen);
    }
  };

  const handleSelectChannel = (value: string) => {
    setSelectedLabel(value);
    console.log(selectedLabel);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full flex-row items-center justify-between rounded-md border px-4"
        onClick={handleTogglePopUpMenu}
      >
        <div className="flex items-center justify-center gap-x-4  py-2">
          <LocalOfferIcon />
          <span>Labels</span>
        </div>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={labelsListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("Food")}
            >
              Food
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("Health")}
            >
              Health
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("Travel")}
            >
              Travel
            </button>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
