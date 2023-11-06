import React, { useEffect, useRef, useState } from "react";

// keyboard arrow icon
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// to do tommorow make a reusable select component
export default function Select({
  labelName,
  parentOption,
  childOption,
}: {
  labelName: string;
  parentOption: string;
  childOption: string[];
}) {
  const [notificationValue, setNotificationValue] = useState(parentOption);
  const [notificationOpen, setNotificationOpen] = useState(false);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * setnotification to false if clicked outside of the element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNotificationOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="relative " ref={wrapperRef}>
      <label
        htmlFor="notifications"
        className="mb-2 block text-xs font-medium tracking-wide text-white md:text-sm"
      >
        {labelName}
        <ul
          id="notifications"
          className="relative my-2 block w-full select-none rounded-md bg-[#2C2C2C]"
        >
          <div
            className={`w-full border hover:bg-[#7B46DE] ${
              notificationOpen
                ? "rounded-t-md border-[#7b46de]"
                : "rounded-md border-[#B8BBC2]"
            }`}
          >
            {/* parent */}
            <li>
              <div
                role="button"
                tabIndex={0}
                className="flex items-center justify-between pl-4"
                onClick={() => {
                  setNotificationOpen((current) => !current);
                }}
                onKeyDown={() => {
                  setNotificationOpen((current) => !current);
                }}
              >
                {notificationValue}
                <span className="border-l border-slate-300 px-4 py-3">
                  <KeyboardArrowDownOutlinedIcon
                    fontSize="small"
                    className={`${notificationOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </div>
            </li>
          </div>
          {/* children */}
          <div
            className={`sidebarscroll absolute z-50 ${
              notificationOpen ? "" : "hidden scale-0"
            }  max-h-[25vh] w-full overflow-y-auto bg-[#2C2C2C]`}
          >
            {childOption.map((list, index, array) => {
              if (index + 1 === array.length) {
                return (
                  <li>
                    <div
                      role="button"
                      tabIndex={0}
                      key={list}
                      className="w-full rounded-b-md px-4 py-3 hover:bg-[#7B46DE]"
                      onClick={() => {
                        setNotificationValue(list);
                        setNotificationOpen((current) => !current);
                      }}
                      onKeyDown={() => {
                        setNotificationValue(list);
                        setNotificationOpen((current) => !current);
                      }}
                    >
                      {list}
                    </div>
                  </li>
                );
              }
              return (
                <li>
                  <div
                    role="button"
                    tabIndex={0}
                    key={list}
                    className="w-full px-4 py-3 hover:bg-[#7B46DE]"
                    onClick={() => {
                      setNotificationValue(list);
                      setNotificationOpen((current) => !current);
                    }}
                    onKeyDown={() => {
                      setNotificationValue(list);
                      setNotificationOpen((current) => !current);
                    }}
                  >
                    {list}
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </label>
    </div>
  );
}
