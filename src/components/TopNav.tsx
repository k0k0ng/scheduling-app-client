import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CampaignIcon from "@mui/icons-material/Campaign";
// import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function TopNav({ title }: any) {
  return (
    <nav className=" pl- flex min-h-[4.75rem] w-full flex-row items-center justify-between border-b-[1px] border-slate-700 pl-8 pr-6 xl:pl-10 xl:pr-10 2xl:pr-20">
      <p className="font-poppins text-[18px] font-semibold">{title}</p>
      <div className="flex flex-row gap-x-4">
        <button
          type="button"
          className="hidden md:block"
          aria-label="notification"
        >
          <NotificationsNoneIcon />
        </button>

        <select className="hidden border-none bg-transparent md:block">
          <option className="bg-[#8844DA] p-8 text-center">EN</option>
          <option className="bg-[#8844DA] p-2 text-center">CH</option>
          <option className="bg-[#8844DA] p-2 text-center">EU</option>
        </select>

        <button type="button" className="hidden md:block" aria-label="campaign">
          <CampaignIcon />
        </button>

        <div className="ml-8 hidden flex-col md:flex">
          <span className="text-[16px]">John Doe</span>
          <span className="text-[12px]">Free Account</span>
        </div>

        {/* i already add menu icon on sidebar/ commented by: keroy */}
        {/* <button type="button" className="md:hidden">
          <MenuIcon />
        </button> */}

        <button
          type="button"
          className="ml-2 flex items-center"
          aria-label="accountcircle"
        >
          <AccountCircleIcon className="h-[45px] w-[45px]" />
        </button>
      </div>
    </nav>
  );
}
