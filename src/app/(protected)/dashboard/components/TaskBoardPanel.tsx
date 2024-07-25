import { useState, useRef } from "react";

import { delay } from "@/utils/globalUtils";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import CreateNoteModal from "./CreateNoteModal";
import ViewTaskModal from "./ViewTaskModal";

const dummyTasksData = [
  {
    taskNumber: "1",
    status: "To-do",
    title: "Post FB content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    taskNumber: "3",
    status: "In-Progress",
    title: "Post Weekend content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    taskNumber: "4",
    status: "Done",
    title: "Post Halloween content",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function TaskBoardPanel() {
  const [createNoteModalIsOpen, setCreateNoteModalIsOpen] = useState(false);
  const [viewTaskModalIsOpen, setViewTaskModalIsOpen] = useState(false);

  const createNoteModal = useRef<HTMLDialogElement>(null);
  const viewTaskModal = useRef<HTMLDialogElement>(null);
  const selectedTaskData = useRef({
    taskNumber: "",
    status: "",
    title: "",
    description: "",
  });

  const handleOpenCreatePostModal = () => {
    if (!createNoteModalIsOpen) {
      createNoteModal.current?.showModal();
    }
    setCreateNoteModalIsOpen(!createNoteModalIsOpen);
  };

  const handleCloseCreatePostModal = async () => {
    if (createNoteModal.current?.className && createNoteModalIsOpen) {
      createNoteModal.current.classList.add("is-hidden");
    }

    await delay(500);

    if (createNoteModal.current?.className && createNoteModalIsOpen) {
      createNoteModal.current.classList.remove("is-hidden");
    }

    createNoteModal.current?.close();
    setCreateNoteModalIsOpen(!createNoteModalIsOpen);
  };

  const handleOpenViewTaskModal = (data: {
    taskNumber: string;
    status: string;
    title: string;
    description: string;
  }) => {
    if (!viewTaskModalIsOpen) {
      selectedTaskData.current = data;
      viewTaskModal.current?.showModal();
    }
    setViewTaskModalIsOpen(!viewTaskModalIsOpen);
  };

  const handleCloseViewTaskModal = async () => {
    if (viewTaskModal.current?.className && viewTaskModalIsOpen) {
      viewTaskModal.current.classList.add("is-hidden");
    }

    await delay(500);

    if (viewTaskModal.current?.className && viewTaskModalIsOpen) {
      viewTaskModal.current.classList.remove("is-hidden");
    }

    viewTaskModal.current?.close();
    setViewTaskModalIsOpen(!viewTaskModalIsOpen);
  };

  return (
    <>
      <div className="col-span-3 min-h-[550px] rounded bg-[#202020] p-10 xl:col-span-2">
        <div className="flex flex-row items-start justify-between">
          <div>
            <h5 className="text-[20px] font-semibold">Task Board</h5>
            <div className="mt-1 text-[12px]">
              Summary of your active boards
            </div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-x-1 rounded bg-[#7B46DE] py-2 pl-2 pr-2 md:pr-3"
            onClick={handleOpenCreatePostModal}
          >
            <AddIcon />
            <span className="hidden font-poppins text-[14px] md:block">
              Add
            </span>
          </button>
        </div>

        <form
          action="/dashboard"
          autoComplete="off"
          className="search-form mt-6 flex min-h-[40px] w-full flex-row rounded-md border border-[#C0C0C0] px-4 transition duration-300"
        >
          <button
            aria-label="search-submit"
            type="submit"
            className="mr-4 transition duration-300 hover:text-[#7B46DE]"
          >
            <SearchIcon />
          </button>
          <input
            type="text"
            placeholder="Search anything"
            name="search"
            className="search-input w-full"
          />
        </form>

        <div className="mt-6 flex flex-col gap-y-2 font-poppins">
          {dummyTasksData &&
            dummyTasksData.map((data) => {
              return (
                <div
                  key={data.taskNumber}
                  role="presentation"
                  className={`task-board-card min-h-[6rem] cursor-pointer rounded-md  bg-white px-4 pb-4 pt-3 text-black ${data.status}`}
                  onClick={() => handleOpenViewTaskModal(data)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[#828281]">
                      #{data.taskNumber}
                    </span>
                    <span
                      className={`rounded px-2 py-1 text-[10px] text-white ${data.status}`}
                    >
                      {data.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="mt-2 text-[14px] font-semibold">
                    {data.title}
                  </div>
                  <p className="text-[12px] leading-[20px] text-[#161616]">
                    {data.description}
                  </p>
                </div>
              );
            })}
        </div>

        {!dummyTasksData && (
          <div className="mt-4 flex min-h-[28rem] w-full flex-col items-center justify-center gap-1">
            <span className="mt-[-5rem] text-[18px] font-semibold">
              No Records Yet
            </span>
            <span className="text-[12px]">
              You do not have any active tasks yet.
            </span>
          </div>
        )}
      </div>

      <dialog
        ref={createNoteModal}
        className="create-note-dialog min-w-[90vw] overflow-visible rounded-lg bg-[#202020] md:min-w-[60vw] lg:min-w-[50vw] xl:min-w-[40vw] 2xl:min-w-[30vw]"
      >
        <button
          aria-label="closebutton"
          type="button"
          onClick={handleCloseCreatePostModal}
          className="absolute right-[-10px] top-[-10px] flex h-[25px] w-[26px] items-center justify-center rounded-[50%] bg-[#F47674EB] font-poppins text-white transition duration-300 hover:bg-[#f4605eeb]"
        >
          <CloseIcon className="h-[15px] w-[15px]" />
        </button>

        {createNoteModalIsOpen && <CreateNoteModal />}
      </dialog>

      <dialog
        ref={viewTaskModal}
        className="create-note-dialog w-[90vw] overflow-visible rounded-lg bg-[#202020] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]"
      >
        <button
          aria-label="closebutton"
          type="button"
          onClick={handleCloseViewTaskModal}
          className="absolute right-[-10px] top-[-10px] flex h-[25px] w-[26px] items-center justify-center rounded-[50%] bg-[#F47674EB] font-poppins text-white transition duration-300 hover:bg-[#f4605eeb]"
        >
          <CloseIcon className="h-[15px] w-[15px]" />
        </button>

        {viewTaskModalIsOpen && (
          <ViewTaskModal
            taskData={selectedTaskData.current}
            handleCloseViewTaskModal={handleCloseViewTaskModal}
          />
        )}
      </dialog>
    </>
  );
}
