import { useState } from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function Password({ value, onChange, id, labelTitle }: any) {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
    <VisibilityOffOutlinedIcon color="secondary" fontSize="small" />
  );

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<VisibilityOutlinedIcon color="secondary" fontSize="small" />);
      setType("text");
    } else {
      setIcon(<VisibilityOffOutlinedIcon color="secondary" fontSize="small" />);
      setType("password");
    }
  };

  return (
    <label
      className=" mb-2 block text-xs font-normal tracking-wide text-white md:text-sm"
      htmlFor={id}
    >
      {labelTitle}
      <div className="flex">
        <input
          type={type}
          id={id}
          placeholder="Password"
          className="my-2 block w-full rounded border border-gray-200 bg-[#2C2C2C] px-4 py-3 text-xs leading-tight text-gray-200 focus:border-gray-500 focus:bg-[#828181] focus:outline-none md:text-sm"
          value={value}
          onChange={onChange}
        />

        <button
          onClick={handleToggle}
          type="button"
          className="flex items-center justify-around"
        >
          <div className="absolute mr-10">{icon}</div>
        </button>
      </div>
    </label>
  );
}
