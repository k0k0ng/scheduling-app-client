import Image from "next/image";

import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function ConnectChannelModal() {
  return (
    <>
      <div className="px-10 font-bold text-white">Connect</div>
      <form
        action="/dashboard"
        autoComplete="off"
        className="search-form mx-10 mt-6 flex min-h-[45px]  flex-row rounded-md border border-[#C0C0C0] px-4 transition duration-300 lg:min-w-[100px]"
      >
        <button
          aria-label="searchsubmit"
          type="submit"
          className="mr-4 text-white transition duration-300 hover:text-[#7B46DE]"
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

      <div className="mx-10 mt-6 grid max-h-[95vh] grid-cols-2 items-start justify-start gap-6 overflow-y-scroll p-4 md:grid-cols-3 xl:grid-cols-4">
        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#3B5998] font-poppins text-white"
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
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#3B5998] font-poppins text-white"
        >
          <span className="absolute right-2 top-2 rounded bg-[#2C2C2C] px-2 text-[10px]">
            Beta
          </span>
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <ForumIcon className="h-[35px] w-[35px] rounded-[50%] bg-[#FFF] p-1.5 text-[#3B5998]" />
            <span className="text-center text-[12px] leading-4">
              Facebook
              <br />
              Group
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#F04C5A] font-poppins text-white"
        >
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <InstagramIcon className="h-[35px] w-[35px] rounded-[50%] bg-[#FFF] p-1.5 text-[#F04C5A]" />
            <span className="text-center text-[12px] leading-4">
              Instagram
              <br />
              Business
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#121212] font-poppins text-white"
        >
          <span className="absolute right-2 top-2 rounded bg-[#2C2C2C] px-2 text-[10px]">
            Beta
          </span>
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <Image
              src="/global/svg/icons/tiktok-icon.svg"
              alt="connect channel logo"
              width={35}
              height={35}
            />
            <span className="text-center text-[12px] leading-4">
              TikTok
              <br />
              User
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#121212] font-poppins text-white"
        >
          <span className="absolute right-2 top-2 rounded bg-[#2C2C2C] px-2 text-[10px]">
            Beta
          </span>
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <Image
              src="/global/svg/icons/twitter-icon.svg"
              alt="connect channel logo"
              width={35}
              height={35}
            />
            <span className="text-center text-[12px] leading-4">
              X
              <br />
              User
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#4875B4] font-poppins text-white"
        >
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <Image
              src="/global/svg/icons/linkedin-icon-circled.svg"
              alt="linkedin logo"
              width={35}
              height={35}
              className="rounded-[50%]"
            />
            <span className="text-center text-[12px] leading-4">
              LinkedIn
              <br />
              Organization
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#4875B4] font-poppins text-white"
        >
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <Image
              src="/global/svg/icons/linkedin-person-icon.svg"
              alt="linkedin logo"
              width={35}
              height={35}
            />
            <span className="text-center text-[12px] leading-4">
              LinkedIn
              <br />
              Person
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#F44336] font-poppins text-white"
        >
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <YouTubeIcon className="h-[35px] w-[35px] rounded-[50%] bg-[#FFF] p-1.5 text-[#F44336]" />
            <span className="text-center text-[12px] leading-4">
              YouTube
              <br />
              Channel
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#B71C1C] font-poppins text-white"
        >
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <PinterestIcon className="h-[35px] w-[35px] rounded-[50%] bg-[#FFF] p-1 text-[#B71C1C]" />
            <span className="text-center text-[12px] leading-4">
              Pinterest
              <br />
              Board
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>

        <button
          type="button"
          className="channel-card-btn relative col-span-1 flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded bg-[#3598DC] font-poppins text-white"
        >
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-2">
            <TelegramIcon className="h-[35px] w-[35px] rounded-[50%] bg-[#FFF] p-1 text-[#3598DC]" />
            <span className="text-center text-[12px] leading-4">
              Telegram
              <br />
              Bot
            </span>
          </div>
          <span className="connect-text text w-full bg-[#2C2C2C] p-1 text-[14px]">
            Connect
          </span>
        </button>
      </div>
    </>
  );
}
