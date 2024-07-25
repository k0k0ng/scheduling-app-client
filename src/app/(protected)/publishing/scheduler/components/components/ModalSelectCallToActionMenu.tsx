import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallToActionOutlinedIcon from "@mui/icons-material/CallToActionOutlined";

export default function ModalSelectCallToActionMenu() {
  const [selectCallToActionMenuIsOpen, setSelectCallToActionMenuIsOpen] =
    useState(false);
  const [selectedCallToAction, setSelectedCallToAction] = useState("public");

  const callToActionListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (
      callToActionListDialog.current?.className &&
      selectCallToActionMenuIsOpen
    ) {
      callToActionListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (
      callToActionListDialog.current?.className &&
      selectCallToActionMenuIsOpen
    ) {
      callToActionListDialog.current.classList.remove("is-hidden");
    }

    callToActionListDialog.current?.close();
    setSelectCallToActionMenuIsOpen(!selectCallToActionMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectCallToActionMenuIsOpen) {
      closePopUpMenu();
    } else {
      callToActionListDialog.current?.show();
      setSelectCallToActionMenuIsOpen(!selectCallToActionMenuIsOpen);
    }
  };

  const handleSelectChannel = (value: string) => {
    setSelectedCallToAction(value);
    console.log(selectedCallToAction);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full flex-row items-center justify-between rounded-md border px-4"
        onClick={handleTogglePopUpMenu}
      >
        <div className="flex items-center justify-center gap-x-4  py-2">
          <CallToActionOutlinedIcon />
          <span>Add Call to Action</span>
        </div>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={callToActionListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("learnMore")}
            >
              Learn More
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("buyNow")}
            >
              Buy Now
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("download")}
            >
              Download
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("bookNow")}
            >
              Book Now
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("signUp")}
            >
              Sign Up
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("watchedVideo")}
            >
              Watched Video
            </button>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
