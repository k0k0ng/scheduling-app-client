import { useState, useRef } from "react";
import { delay } from "@/utils/globalUtils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export default function ModalSelectAssignedUserMenu() {
  const [selectUserMenuIsOpen, setSelectUserMenuIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  const usersListDialog = useRef<HTMLDialogElement>(null);

  const closePopUpMenu = async () => {
    if (usersListDialog.current?.className && selectUserMenuIsOpen) {
      usersListDialog.current.classList.add("is-hidden");
    }

    await delay(280);

    if (usersListDialog.current?.className && selectUserMenuIsOpen) {
      usersListDialog.current.classList.remove("is-hidden");
    }

    usersListDialog.current?.close();
    setSelectUserMenuIsOpen(!selectUserMenuIsOpen);
  };

  const handleTogglePopUpMenu = () => {
    if (selectUserMenuIsOpen) {
      closePopUpMenu();
    } else {
      usersListDialog.current?.show();
      setSelectUserMenuIsOpen(!selectUserMenuIsOpen);
    }
  };

  const handleSelectChannel = (value: string) => {
    setSelectedUser(value);
    console.log(selectedUser);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full flex-row items-center justify-between rounded-md border px-4"
        onClick={handleTogglePopUpMenu}
      >
        <div className="flex items-center justify-center gap-x-4  py-2">
          <PeopleOutlineIcon />
          <span>Assigned Users</span>
        </div>
        <KeyboardArrowDownIcon />
      </button>

      <dialog
        ref={usersListDialog}
        className="filter-by-user-dialog z-10 mt-2 w-full overflow-hidden rounded-lg bg-[#2c2c2c]"
      >
        <ul className="font-poppins text-[14px] text-white">
          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("John Doe")}
            >
              John Doe
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("Vince McMahon")}
            >
              Vince McMahon
            </button>
          </li>

          <li className="flex cursor-pointer flex-row gap-x-4 px-5 hover:bg-[#535353]">
            <button
              type="button"
              className="flex min-h-[45px] w-full cursor-pointer items-center gap-x-4 text-start"
              onClick={() => handleSelectChannel("John Cena")}
            >
              John Cena
            </button>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
