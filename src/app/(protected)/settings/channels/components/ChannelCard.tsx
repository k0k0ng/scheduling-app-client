import Image from "next/image";

export default function ChannelCard() {
  return (
    <button
      type="button"
      className="relative col-span-1 flex min-h-[10rem] flex-col items-center justify-center overflow-hidden rounded bg-[#3B5998] font-poppins text-white"
    >
      <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
        <Image
          src="/global/svg/icons/fb-icon.svg"
          alt="connect channel logo"
          width={35}
          height={35}
        />
        <span className="text-center text-[12px] leading-4">
          Facebook
          <br />
          Page
        </span>
      </div>
      <span className="text w-full bg-[#2C2C2C] p-1 text-[14px] hover:bg-[#7B46DE]">
        Connect
      </span>
      <span className="absolute right-2 top-2 rounded bg-[#2C2C2C] px-2 text-[10px]">
        Beta
      </span>
    </button>
  );
}
