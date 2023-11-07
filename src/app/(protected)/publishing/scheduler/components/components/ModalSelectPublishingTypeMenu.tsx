import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function ModalSelectPublishingTypeMenu() {
  const [selectPostStatusMenuIsOpen, setSelectPostStatusMenuIsOpen] =
    useState(false);
  const [selectedPostStatus, setSelectedPostStatus] = useState("public");

  const postStatusListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (postStatusListDialog.current?.className && selectPostStatusMenuIsOpen) {
      postStatusListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (postStatusListDialog.current?.className && selectPostStatusMenuIsOpen) {
      postStatusListDialog.current.classList.remove("is-hidden");
    }

    postStatusListDialog.current?.close();
    setSelectPostStatusMenuIsOpen(!selectPostStatusMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectPostStatusMenuIsOpen) {
      closePopUpMenu();
    } else {
      postStatusListDialog.current?.show();
      setSelectPostStatusMenuIsOpen(!selectPostStatusMenuIsOpen);
    }
  };

  const handleSelectChannel = (value: string) => {
    setSelectedPostStatus(value);
    console.log(selectedPostStatus);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full flex-row items-center justify-between rounded-md border px-4"
        onClick={handleTogglePopUpMenu}
      >
        <div className="flex items-center justify-center gap-x-4  py-2">
          <VisibilityOutlinedIcon />
          <span>Set Publish Status</span>
        </div>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={postStatusListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("public")}
            >
              Published As Public
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("draft")}
            >
              Published As Draft
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("enlisted")}
            >
              Published As Enlisted
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("private")}
            >
              Published As Private
            </button>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
