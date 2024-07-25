import { ReactElement } from "react";

type LinkType = {
  label: string;
  icon: ReactElement | null;
  isDisabled: boolean;
  action: () => any;
};

export default function PopUpMenuLink({
  label,
  icon,
  isDisabled,
  action,
}: LinkType) {
  return (
    <li>
      <button
        type="button"
        disabled={isDisabled}
        className={`min-h-[45px] w-full px-5 text-start  ${
          isDisabled ? "text-[#727272]" : "hover:bg-[#535353]"
        }`}
        onClick={action}
      >
        {icon}
        {label}
      </button>
    </li>
  );
}
