import PopUpMenuLink from "./PopUpMenuLink";

type PopUpMenuTypes = {
  menuLinks: {
    label: string;
    icon: string | null;
    isDisabled: boolean;
    action: () => any;
  }[];
  customStyle: string;
  useRefPointer: React.Ref<HTMLDialogElement>;
};

export default function PopUpMenu({
  menuLinks,
  customStyle,
  useRefPointer,
}: PopUpMenuTypes) {
  return (
    <dialog
      ref={useRefPointer}
      className={`z-10 mt-2 min-w-[16rem] overflow-hidden rounded-lg bg-[#2c2c2c] ${customStyle}`}
    >
      <ul className="font-poppins text-[14px] text-white">
        {menuLinks.map((link) => {
          return (
            <PopUpMenuLink
              key={link.label}
              label={link.label}
              icon={null}
              isDisabled={link.isDisabled}
              action={link.action}
            />
          );
        })}
      </ul>
    </dialog>
  );
}
