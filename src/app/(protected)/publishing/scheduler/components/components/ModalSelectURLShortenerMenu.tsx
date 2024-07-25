import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkIcon from "@mui/icons-material/Link";

export default function ModalSelectURLShortenerMenu() {
  const [selectURLShortenerMenuIsOpen, setSelectURLShortenerMenuIsOpen] =
    useState(false);
  const [selectedURLShortener, setSelectedURLShortener] = useState("");

  const urlShortenerListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (
      urlShortenerListDialog.current?.className &&
      selectURLShortenerMenuIsOpen
    ) {
      urlShortenerListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (
      urlShortenerListDialog.current?.className &&
      selectURLShortenerMenuIsOpen
    ) {
      urlShortenerListDialog.current.classList.remove("is-hidden");
    }

    urlShortenerListDialog.current?.close();
    setSelectURLShortenerMenuIsOpen(!selectURLShortenerMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectURLShortenerMenuIsOpen) {
      closePopUpMenu();
    } else {
      urlShortenerListDialog.current?.show();
      setSelectURLShortenerMenuIsOpen(!selectURLShortenerMenuIsOpen);
    }
  };

  const handleSelectChannel = (value: string) => {
    setSelectedURLShortener(value);
    console.log(selectedURLShortener);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full flex-row items-center justify-between rounded-md border px-4"
        onClick={handleTogglePopUpMenu}
      >
        <div className="flex items-center justify-center gap-x-4  py-2">
          <LinkIcon />
          <span>URL Shortener</span>
        </div>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={urlShortenerListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("default")}
            >
              Default (sampleshortenlink.com)
            </button>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
