import { useState, useEffect } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HourglassBottomRoundedIcon from "@mui/icons-material/HourglassBottomRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

type ViewTaskModalType = {
  taskData: {
    taskNumber: string;
    status: string;
    title: string;
    description: string;
  };
  handleCloseViewTaskModal: () => {};
};

export default function ViewTaskModal({
  taskData,
  handleCloseViewTaskModal,
}: ViewTaskModalType) {
  const [newNoteData, setNewNoteData] = useState({
    status: "",
    title: "",
    description: "",
  });

  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);

  useEffect(() => {
    if (taskData) {
      setNewNoteData(taskData);
    }
  }, []);

  const handleStoreInputs = (value: string, inputType: string) => {
    if (inputType === "title") {
      setNewNoteData((prevValue) => {
        return { ...prevValue, title: value };
      });
    }

    if (inputType === "description") {
      setNewNoteData((prevValue) => {
        return { ...prevValue, description: value };
      });
    }
  };

  const handleSaveNewTaskTitle = () => {
    console.log("Call API to save the new task title.");
    setNewNoteData((prevValue) => {
      return { ...prevValue, title: taskData.title };
    });
    setEditTitle(false);
  };

  const handleCancelNewTaskTitle = () => {
    setNewNoteData((prevValue) => {
      return { ...prevValue, title: taskData.title };
    });
    setEditTitle(false);
  };

  const handleSaveNewTaskDescription = () => {
    console.log("Call API to save the new task title.");
    setNewNoteData((prevValue) => {
      return { ...prevValue, description: taskData.description };
    });
    setEditDescription(false);
  };

  const handleCancelNewTaskDescription = () => {
    setNewNoteData((prevValue) => {
      return { ...prevValue, description: taskData.description };
    });
    setEditDescription(false);
  };

  const handleMarkTaskAsToDo = () => {
    console.log("Call API that will mark specific task as To-do");
    handleCloseViewTaskModal();
  };

  const handleMarkTaskAsInProgress = () => {
    console.log("Call API that will mark specific task as In-Progress");
    handleCloseViewTaskModal();
  };

  const handleMarkTaskAsDone = () => {
    console.log("Call API that will mark specific task as Done");
    handleCloseViewTaskModal();
  };

  return (
    <div className="font-poppins text-white">
      <div className="task-board-card px-8 pb-4 pt-8 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#C0C0C0]">
            #{taskData.taskNumber}
          </span>
          <span
            className={`view-task rounded px-2 py-1 text-[14px] text-white ${taskData.status}`}
          >
            {taskData.status.toUpperCase()}
          </span>
        </div>

        {!editTitle && (
          <div
            role="presentation"
            className="mt-4 cursor-pointer text-[20px] font-semibold"
            onClick={() => setEditTitle(true)}
          >
            {taskData.title}
          </div>
        )}

        {editTitle && (
          <div className="ml-[-0.5rem]">
            <input
              value={newNoteData.title}
              className=" mt-2 w-full rounded-md border bg-transparent p-2 text-[20px] font-semibold"
              onChange={(e) => handleStoreInputs(e.target.value, "title")}
            />
            <div className="mt-3 flex flex-row gap-x-3">
              <button
                type="button"
                className="flex min-h-[30px] items-center justify-center gap-x-2 rounded border px-3 py-1 text-[12px] transition duration-300"
                onClick={handleCancelNewTaskTitle}
              >
                <span>Cancel</span>
              </button>

              <button
                type="button"
                className="flex min-h-[30px] items-center justify-center gap-x-2 rounded border border-[#7B46DE] bg-[#7B46DE] px-3 py-1 text-[12px] transition  duration-300"
                onClickCapture={handleSaveNewTaskTitle}
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 text-[14px] text-[#C0C0C0]">Description</div>

        {!editDescription && (
          <div className="h-[12rem]">
            <p
              role="presentation"
              className="mt-2  w-full rounded-md text-[14px] leading-[20px] text-white"
              onClick={() => setEditDescription(true)}
            >
              {taskData.description}
            </p>
          </div>
        )}

        {editDescription && (
          <div>
            <textarea
              value={newNoteData.description}
              className="mt-2 h-[11rem] w-full rounded-md border bg-transparent p-2 text-[14px] leading-[20px] text-white"
              onChange={(e) => handleStoreInputs(e.target.value, "description")}
            />
            <div className="mt-1 flex flex-row gap-x-3">
              <button
                type="button"
                className="flex min-h-[30px] items-center justify-center gap-x-2 rounded border px-3 py-1 text-[12px] transition duration-300"
                onClick={handleCancelNewTaskDescription}
              >
                <span>Cancel</span>
              </button>

              <button
                type="button"
                className="flex min-h-[30px] items-center justify-center gap-x-2 rounded border border-[#7B46DE] bg-[#7B46DE] px-3 py-1 text-[12px] transition  duration-300"
                onClickCapture={handleSaveNewTaskDescription}
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-row gap-x-4 border-t px-10 py-8">
        {taskData.status === "To-do" && (
          <>
            <button
              type="button"
              className="flex min-h-[40px] w-full items-center justify-center gap-x-2 rounded border text-[14px] transition duration-300"
              onClick={handleMarkTaskAsInProgress}
            >
              <HourglassBottomRoundedIcon />
              <span>Mark as In Progress</span>
            </button>

            <button
              type="button"
              className="flex min-h-[40px] w-full items-center justify-center gap-x-2 rounded bg-[#7B46DE] text-[14px] transition  duration-300"
              onClick={handleMarkTaskAsDone}
            >
              <CheckRoundedIcon />
              <span>Mark as Done</span>
            </button>
          </>
        )}

        {taskData.status === "In-Progress" && (
          <>
            <button
              type="button"
              className="flex min-h-[40px] w-full items-center justify-center gap-x-2 rounded border text-[14px] transition duration-300"
              onClick={handleMarkTaskAsToDo}
            >
              <AccessTimeIcon />
              <span>Mark as To Do</span>
            </button>

            <button
              type="button"
              className="flex min-h-[40px] w-full items-center justify-center gap-x-2 rounded bg-[#7B46DE] text-[14px] transition  duration-300"
              onClick={handleMarkTaskAsDone}
            >
              <CheckRoundedIcon />
              <span>Mark as Done</span>
            </button>
          </>
        )}

        {taskData.status === "Done" && (
          <>
            <button
              type="button"
              className="flex min-h-[40px] w-full items-center justify-center gap-x-2 rounded border text-[14px] transition duration-300"
              onClick={handleMarkTaskAsToDo}
            >
              <AccessTimeIcon />
              <span>Mark as To Do</span>
            </button>

            <button
              type="button"
              className="flex min-h-[40px] w-full items-center justify-center gap-x-2 rounded bg-[#7B46DE] text-[14px] transition  duration-300"
              onClick={handleMarkTaskAsInProgress}
            >
              <HourglassBottomRoundedIcon />
              <span>Mark as In Progress</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
