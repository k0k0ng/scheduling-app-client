import { useState, useEffect } from "react";

import AddIcon from "@mui/icons-material/Add";
import SelectNoteStatusMenu from "./SelectNoteStatusMenu";

export default function CreateNoteModal() {
  const [noteData, setNoteData] = useState({
    status: "",
    title: "",
    description: "",
  });

  const [addNoteBtnIsDisabled, setAddNoteBtnIsDisabled] = useState(true);

  useEffect(() => {
    if (noteData.status !== "" && noteData.title !== "") {
      setAddNoteBtnIsDisabled(false);
    } else {
      setAddNoteBtnIsDisabled(true);
    }
  }, [noteData]);

  const handleStoreInputs = (event: any, inputType: string) => {
    if (inputType === "title") {
      setNoteData((prevValue) => {
        return { ...prevValue, title: event.target.value };
      });
    }

    if (inputType === "description") {
      setNoteData((prevValue) => {
        return { ...prevValue, description: event.target.value };
      });
    }
  };

  return (
    <div className="p-8 font-poppins text-white">
      <h5 className="flex items-center justify-center text-center  text-[20px] font-semibold ">
        Create Note
      </h5>

      <div className="mt-10">
        <div className="mb-1 text-[14px] text-[#C0C0C0]">
          Note Status <span className="text-[#f47674eb]">*</span>
        </div>
        <SelectNoteStatusMenu
          selectedNoteStatus={noteData.status}
          setSelectedNoteStatus={setNoteData}
        />
      </div>

      <div className="mt-6">
        <div className="mb-1 text-[14px] text-[#C0C0C0]">
          Title <span className="text-[#f47674eb]">*</span>
        </div>
        <input
          placeholder="Enter a title for your note"
          className="create-note-input min-h-[40px] w-full rounded px-4"
          onChange={(event) => handleStoreInputs(event, "title")}
        />
      </div>

      <div className="mt-6">
        <div className="mb-1 text-[14px] text-[#C0C0C0]">
          Description (Optional)
        </div>
        <textarea
          placeholder="Enter your note description"
          className="create-note-input min-h-[12rem] w-full rounded px-4 py-2"
          onChange={(event) => handleStoreInputs(event, "description")}
        />
      </div>

      <button
        type="button"
        disabled={addNoteBtnIsDisabled && true}
        className={`mt-16 flex min-h-[40px] w-full items-center justify-center rounded transition duration-300 ${
          addNoteBtnIsDisabled ? "bg-[#707070]" : "bg-[#7B46DE]"
        }`}
      >
        <AddIcon />
        <span>Add Note</span>
      </button>
    </div>
  );
}
