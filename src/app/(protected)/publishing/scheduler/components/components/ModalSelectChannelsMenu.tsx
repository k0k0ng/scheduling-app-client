import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListIcon from "@mui/icons-material/List";

export default function ModalSelectChannelsMenu() {
  const [selectChannelMenuIsOpen, setSelectChannelMenuIsOpen] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState({
    facebook: false,
    instagram: false,
    twitter: false,
  });

  const channelsListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (channelsListDialog.current?.className && selectChannelMenuIsOpen) {
      channelsListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (channelsListDialog.current?.className && selectChannelMenuIsOpen) {
      channelsListDialog.current.classList.remove("is-hidden");
    }

    channelsListDialog.current?.close();
    setSelectChannelMenuIsOpen(!selectChannelMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectChannelMenuIsOpen) {
      closePopUpMenu();
    } else {
      channelsListDialog.current?.show();
      setSelectChannelMenuIsOpen(!selectChannelMenuIsOpen);
    }
  };

  const handleSelectChannel = (event: any) => {
    if (event.target.value === "Facebook") {
      setSelectedChannels((prevValue) => {
        return { ...prevValue, facebook: !selectedChannels.facebook };
      });
    } else if (event.target.value === "Instagram") {
      setSelectedChannels((prevValue) => {
        return { ...prevValue, instagram: !selectedChannels.instagram };
      });
    } else if (event.target.value === "Twitter") {
      setSelectedChannels((prevValue) => {
        return { ...prevValue, twitter: !selectedChannels.twitter };
      });
    }
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="mt-4 flex w-full rounded-md border p-3"
        onClick={handleTogglePopUpMenu}
      >
        <ListIcon />
        <span className="mx-6 w-full text-start">Channels</span>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={channelsListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <label
              role="presentation"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={handleSelectChannel}
            >
              <input
                type="checkbox"
                value="Facebook"
                name="Facebook"
                className="select-channel"
              />
              Facebook
            </label>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <label
              role="presentation"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={handleSelectChannel}
            >
              <input
                type="checkbox"
                value="Instagram"
                name="Instagram"
                className="select-channel"
              />
              Instagram
            </label>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <label
              role="presentation"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={handleSelectChannel}
            >
              <input
                type="checkbox"
                value="Twitter"
                name="Twitter"
                className="select-channel"
              />
              Twitter
            </label>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
