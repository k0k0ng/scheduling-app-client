import { useState, useRef } from "react";

import Image from "next/image";

import { delay } from "@/utils/globalUtils";

import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TagIcon from "@mui/icons-material/Tag";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import ClosedCaptionOutlinedIcon from "@mui/icons-material/ClosedCaptionOutlined";
import CloseIcon from "@mui/icons-material/Close";

import Datepicker from "@/components/DatePicker/Datepicker";
import ModalSelectChannelsMenu from "./components/ModalSelectChannelsMenu";
import ModalSelectAssignedUserMenu from "./components/ModalSelectAssignedUserMenu";
import ModalSelectLabelMenu from "./components/ModalSelectLabelMenu";
import ModalSelectURLShortenerMenu from "./components/ModalSelectURLShortenerMenu";
import ModalSelectNotificationSettingsMenu from "./components/ModalSelectNotificationSettingsMenu";
import ModalSelectPublishingTypeMenu from "./components/ModalSelectPublishingTypeMenu";
import ModalSelectCallToActionMenu from "./components/ModalSelectCallToActionMenu";
import ModalSelectLongCaptionMenu from "./components/ModalSelectLongCaptionMenu";
import TagAProfileModal from "./components/TagAProfileModal";
import AddLocationModal from "./components/AddLocationModal";

export default function CreatePostModal() {
  const [schedulePostDate, setschedulePostDate] = useState("");
  const [selectedFileType, setSelectedFileType] = useState("image");
  const [selectedAdditionalOption, setSelectedAdditionalOption] =
    useState("comments");

  const [tagAProfileModalIsOpen, setTagAProfileModalIsOpen] = useState(false);
  const [addLocationModalIsOpen, setAddLocationModalIsOpen] = useState(false);
  const tagAProfileModal = useRef<HTMLDialogElement>(null);
  const addLocationModal = useRef<HTMLDialogElement>(null);

  console.log(schedulePostDate); // console logged just to avoid error in EsLint

  const renderCommentsConfiguration = () => {
    return (
      <div className="mt-6 rounded-md border border-[#828181] px-5 py-6 ">
        <div className="mb-4 flex min-h-[8rem] w-full flex-row overflow-hidden rounded bg-[#2C2C2C]">
          <textarea
            className="w-full border-r border-[#828181] bg-[#2C2C2C] p-3 text-[14px] text-[#bababa] hover:text-white"
            placeholder="Comments"
          />
          <div className="flex flex-col gap-1 p-2">
            <SentimentSatisfiedAltIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
            <DescriptionOutlinedIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
            <TagIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
            <ClosedCaptionOutlinedIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
            <DeleteOutlinedIcon className="mt-2 h-[18px] w-[18px] rounded-[50%] bg-[#FF5653] p-0.5 text-white" />
          </div>
        </div>
      </div>
    );
  };

  const renderSettingsConfiguration = () => {
    return (
      <div className="mt-6 flex flex-col gap-y-3 rounded-md border border-[#828181] px-5 py-6 text-[14px]">
        <ModalSelectAssignedUserMenu />

        <ModalSelectLabelMenu />

        <ModalSelectURLShortenerMenu />

        <ModalSelectNotificationSettingsMenu />

        <ModalSelectPublishingTypeMenu />

        <ModalSelectCallToActionMenu />

        <ModalSelectLongCaptionMenu />
      </div>
    );
  };

  const handleOpenTagAProfileModal = () => {
    if (!tagAProfileModalIsOpen) {
      tagAProfileModal.current?.showModal();
    }
    setTagAProfileModalIsOpen(!tagAProfileModalIsOpen);
  };

  const handleCloseTagAProfileModal = async () => {
    if (localStorage.getItem("actionFromDashboard")) {
      localStorage.removeItem("actionFromDashboard");
    }

    if (tagAProfileModal.current?.className && tagAProfileModalIsOpen) {
      tagAProfileModal.current.classList.add("is-hidden");
    }

    await delay(500);

    if (tagAProfileModal.current?.className && tagAProfileModalIsOpen) {
      tagAProfileModal.current.classList.remove("is-hidden");
    }

    tagAProfileModal.current?.close();
    setTagAProfileModalIsOpen(!tagAProfileModalIsOpen);
  };

  const handleOpenAddLocationModal = () => {
    if (!addLocationModalIsOpen) {
      addLocationModal.current?.showModal();
    }
    setAddLocationModalIsOpen(!addLocationModalIsOpen);
  };

  const handleCloseAddLocationModal = async () => {
    if (localStorage.getItem("actionFromDashboard")) {
      localStorage.removeItem("actionFromDashboard");
    }

    if (addLocationModal.current?.className && addLocationModalIsOpen) {
      addLocationModal.current.classList.add("is-hidden");
    }

    await delay(500);

    if (addLocationModal.current?.className && addLocationModalIsOpen) {
      addLocationModal.current.classList.remove("is-hidden");
    }

    addLocationModal.current?.close();
    setAddLocationModalIsOpen(!addLocationModalIsOpen);
  };

  return (
    <>
      <div className="flex h-[6rem] items-center justify-center border-b border-[#828181] text-center font-poppins text-[20px] font-semibold text-white">
        Schedule A Post
      </div>

      <div className="no-scrollbar max-h-[65vh] overflow-y-scroll px-10 py-6 font-poppins text-white">
        <Datepicker setschedulePostDate={setschedulePostDate} />

        <ModalSelectChannelsMenu />

        <div className="mt-7 text-[14px] font-semibold">Upload File</div>
        <div className="mt-2 flex gap-x-1 rounded-md bg-[#2C2C2C] p-1">
          <button
            type="button"
            className={`flex w-full items-center justify-center gap-x-2 rounded py-2 transition duration-300 hover:bg-[#7B46DE] ${
              selectedFileType === "image" && "bg-[#7B46DE]"
            }`}
            onClick={() => setSelectedFileType("image")}
          >
            <ImageIcon />
            <span>Image</span>
          </button>
          <button
            type="button"
            className={`flex w-full items-center justify-center gap-x-2 rounded py-2 transition duration-300 hover:bg-[#7B46DE] ${
              selectedFileType === "video" && "bg-[#7B46DE]"
            }`}
            onClick={() => setSelectedFileType("video")}
          >
            <VideocamIcon />
            <span>Video</span>
          </button>
        </div>

        <div className="mt-6 rounded-md border border-dashed py-10">
          <div className="flex flex-row items-center justify-center gap-x-2">
            <button
              type="button"
              aria-label="Upload content button"
              className="rounded-[50%] bg-[#2C2C2C] p-2 hover:bg-[#3D3D3D]"
            >
              <CloudUploadOutlinedIcon className="h-[25px] w-[25px]" />
            </button>

            <button
              type="button"
              className="rounded-[50%] bg-[#2C2C2C] p-2 hover:bg-[#3D3D3D]"
            >
              <Image
                src="/svg/publishing/scheduler/canva-logo.svg"
                alt="canva logo"
                width={25}
                height={25}
              />
            </button>

            <button
              type="button"
              className="rounded-[50%] bg-[#2C2C2C] p-2 hover:bg-[#3D3D3D]"
            >
              <Image
                src="/svg/publishing/scheduler/vista-create-logo.svg"
                alt="canva logo"
                width={25}
                height={25}
              />
            </button>

            <button
              type="button"
              className="rounded-[50%] bg-[#2C2C2C] p-2 hover:bg-[#3D3D3D]"
            >
              <Image
                src="/svg/publishing/scheduler/adobe-express-logo.svg"
                alt="canva logo"
                width={25}
                height={25}
              />
            </button>
          </div>
          <div className="mt-4 text-center text-[14px]">
            Drop files here or click icon to Upload
          </div>
          <div className="mt-2 text-center text-[12px]">
            Images file size no more than 10mb
          </div>
        </div>

        <div className="ju mt-6 rounded-md border border-[#828181] px-5 py-6">
          <div className="flex items-center justify-center rounded bg-[#2C2C2C] px-3 text-[14px] text-[#bababa] hover:text-white">
            <TuneIcon />
            <span className="mx-2 w-full border-r border-[#828181] py-3">
              Default
            </span>
            <KeyboardArrowDownIcon />
          </div>
          <hr className="my-4 border-[#3a3a3a]" />
          <input
            className="w-full rounded bg-[#2C2C2C] p-3 text-[14px] text-[#bababa] hover:text-white"
            placeholder="Title (Optional)"
          />
          <div className="mt-4 flex min-h-[8rem] w-full flex-row overflow-hidden rounded bg-[#2C2C2C]">
            <textarea
              className="w-full border-r border-[#828181] bg-[#2C2C2C] p-3 text-[14px] text-[#bababa] hover:text-white"
              placeholder="Caption"
            />
            <div className="flex flex-col gap-1 p-2">
              <SentimentSatisfiedAltIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
              <DescriptionOutlinedIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
              <TagIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
              <ClosedCaptionOutlinedIcon className="h-[18px] w-[18px] text-[#bababa] hover:text-white " />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-row rounded-md bg-[#2C2C2C]">
          <button
            type="button"
            aria-label="Comments configuration"
            className={`flex w-full items-center justify-center gap-x-2 rounded-l py-2  transition duration-300 hover:bg-[#7B46DE] ${
              selectedAdditionalOption === "comments" && "bg-[#7B46DE]"
            }`}
            onClick={() => setSelectedAdditionalOption("comments")}
          >
            <SmsOutlinedIcon />
          </button>

          <button
            type="button"
            aria-label="tag a profile configuration"
            className="flex w-full items-center justify-center gap-x-2 py-2 transition  duration-300 hover:bg-[#7B46DE]"
            onClick={handleOpenTagAProfileModal}
          >
            <PersonAddAltOutlinedIcon />
          </button>

          <button
            type="button"
            aria-label="add location configuration"
            className="flex w-full items-center justify-center gap-x-2 py-2 transition  duration-300 hover:bg-[#7B46DE]"
            onClick={handleOpenAddLocationModal}
          >
            <LocationOnOutlinedIcon />
          </button>
          <button
            type="button"
            aria-label="additional settings configuration"
            className={`flex w-full items-center justify-center gap-x-2 rounded-r py-2 transition  duration-300 hover:bg-[#7B46DE] ${
              selectedAdditionalOption === "settings" && "bg-[#7B46DE]"
            }`}
            onClick={() => setSelectedAdditionalOption("settings")}
          >
            <SettingsOutlinedIcon />
          </button>
        </div>

        {selectedAdditionalOption === "comments" &&
          renderCommentsConfiguration()}

        {selectedAdditionalOption === "settings" &&
          renderSettingsConfiguration()}
      </div>

      <div className="flex h-[6rem] items-center justify-center border-t border-[#828181] font-poppins text-white">
        <div className="mx-10 mt-2 flex w-full rounded-md bg-[#2C2C2C]">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-x-3 rounded-l py-2 hover:bg-[#7B46DE]"
          >
            <EditCalendarOutlinedIcon className="h-[20px] w-[20px]" />
            <span>Draft</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-x-3 rounded-r bg-[#7B46DE] py-2 hover:bg-[#7B46DE]"
          >
            <SendOutlinedIcon className="mt-[-3px] h-[20px] w-[20px] rotate-[-45deg]" />
            <span>Publish</span>
          </button>
        </div>
      </div>

      <dialog
        ref={tagAProfileModal}
        className="create-post-dialog min-w-[100vw] overflow-visible rounded-lg bg-[#202020] lg:min-w-[85vw] xl:min-w-[65vw] 2xl:min-w-[35vw]"
      >
        <button
          aria-label="closebutton"
          type="button"
          onClick={handleCloseTagAProfileModal}
          className="absolute right-[10px] top-[10px] h-[32px] w-[34px] font-poppins text-[#a8a8a8] transition duration-300 hover:text-white"
        >
          <CloseIcon />
        </button>

        <TagAProfileModal />
      </dialog>

      <dialog
        ref={addLocationModal}
        className="create-post-dialog min-w-[100vw] overflow-visible rounded-lg bg-[#202020] lg:min-w-[85vw] xl:min-w-[65vw] 2xl:min-w-[35vw]"
      >
        <button
          aria-label="closebutton"
          type="button"
          onClick={handleCloseAddLocationModal}
          className="absolute right-[10px] top-[10px] h-[32px] w-[34px] font-poppins text-[#a8a8a8] transition duration-300 hover:text-white"
        >
          <CloseIcon />
        </button>

        <AddLocationModal />
      </dialog>
    </>
  );
}
