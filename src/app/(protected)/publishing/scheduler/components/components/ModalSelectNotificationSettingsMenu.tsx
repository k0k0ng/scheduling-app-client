import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export default function ModalSelectNotificationSettingsMenu() {
  const [
    selectNotificationSettingMenuIsOpen,
    setSelectNotificationSettingMenuIsOpen,
  ] = useState(false);
  const [selectedNotificationSettings, setSelectedNotificationSettings] =
    useState({
      notifyError: false,
      notifyPublished: false,
    });

  const notificationOptionsListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (
      notificationOptionsListDialog.current?.className &&
      selectNotificationSettingMenuIsOpen
    ) {
      notificationOptionsListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (
      notificationOptionsListDialog.current?.className &&
      selectNotificationSettingMenuIsOpen
    ) {
      notificationOptionsListDialog.current.classList.remove("is-hidden");
    }

    notificationOptionsListDialog.current?.close();
    setSelectNotificationSettingMenuIsOpen(
      !selectNotificationSettingMenuIsOpen
    );
  };

  const handleTogglePopUpMenu = () => {
    if (selectNotificationSettingMenuIsOpen) {
      closePopUpMenu();
    } else {
      notificationOptionsListDialog.current?.show();
      setSelectNotificationSettingMenuIsOpen(
        !selectNotificationSettingMenuIsOpen
      );
    }
  };

  const handleSelectChannel = (event: any) => {
    if (event.target.value === "notifyError") {
      setSelectedNotificationSettings((prevValue) => {
        return {
          ...prevValue,
          notifyError: !selectedNotificationSettings.notifyError,
        };
      });
    } else if (event.target.value === "notifyPublished") {
      setSelectedNotificationSettings((prevValue) => {
        return {
          ...prevValue,
          notifyPublished: !selectedNotificationSettings.notifyPublished,
        };
      });
    }
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full rounded-md border p-3"
        onClick={handleTogglePopUpMenu}
      >
        <NotificationsNoneOutlinedIcon className="ml-1 mr-[-5px]" />
        <span className="mx-6 w-full text-start">Notification Setting</span>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={notificationOptionsListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <label
              role="presentation"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={handleSelectChannel}
            >
              <input type="checkbox" value="notifyError" name="notifyError" />
              Send a notification if there&apos;s an error
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
                value="notifyPublished"
                name="notifyPublished"
              />
              Send a notification when published
            </label>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
