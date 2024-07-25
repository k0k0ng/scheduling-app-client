import "./DropDown.css";

// keyboard arrow icon
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// Sidebar Dropdown

// publishing title icon
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// publishing dropdown icons
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";

// Tools title icon
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
// tools dropdown icon
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
// Managesearch icon already imported
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import QuickreplyOutlinedIcon from "@mui/icons-material/QuickreplyOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";

// monitoring title icon
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
// monitoring dropdown icons
import ReplayCircleFilledOutlinedIcon from "@mui/icons-material/ReplayCircleFilledOutlined";
// same stream icon already imported

// organize title icon
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
// organize dropdown icons
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

// domains urls title icon
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// domainurl dropdown icons
import DomainVerificationOutlinedIcon from "@mui/icons-material/DomainVerificationOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

// billing title icon
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
// billing dropdown icon
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

// settings title icon
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// setting dropdown icons
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";

// profile title icon
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// profile dropdown icons
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

const iconclassName = "mr-2 duration-500";
const icontitleclassName = "ml-2";

const PublishingListIcon = [
  <EditCalendarOutlinedIcon className={iconclassName} />,
  <ContentPasteSearchOutlinedIcon className={iconclassName} />,
  <ManageSearchOutlinedIcon className={iconclassName} />,
  <StreamOutlinedIcon className={iconclassName} />,
];

const ToolsListIcon = [
  <ChatOutlinedIcon className={iconclassName} />,
  <VideoCameraBackOutlinedIcon className={iconclassName} />,
  <SmartDisplayOutlinedIcon className={iconclassName} />,
  <ManageSearchOutlinedIcon className={iconclassName} />,
  <TagOutlinedIcon className={iconclassName} />,
  <LibraryAddOutlinedIcon className={iconclassName} />,
  <ClosedCaptionOffOutlinedIcon className={iconclassName} />,
  <QuickreplyOutlinedIcon className={iconclassName} />,
  <SpaceDashboardOutlinedIcon className={iconclassName} />,
];

const MonitoringListIcon = [
  <ReplayCircleFilledOutlinedIcon className={iconclassName} />,
  <StreamOutlinedIcon className={iconclassName} />,
];

const OrganizeListIcon = [
  <CategoryOutlinedIcon className={iconclassName} />,
  <LabelOutlinedIcon className={iconclassName} />,
];

const DomainAndUrlListIcon = [
  <DomainVerificationOutlinedIcon className={iconclassName} />,
  <LinkOutlinedIcon className={iconclassName} />,
];

const BillingListIcon = [
  <SubscriptionsOutlinedIcon className={iconclassName} />,
  <DescriptionOutlinedIcon className={iconclassName} />,
  <Diversity3OutlinedIcon className={iconclassName} />,
];

const SettingListIcon = [
  <FolderOutlinedIcon className={iconclassName} />,
  <PlaylistAddCheckOutlinedIcon className={iconclassName} />,
  <IntegrationInstructionsOutlinedIcon className={iconclassName} />,
  <PasswordOutlinedIcon className={iconclassName} />,
];

const ProfileListIcon = [
  <PermIdentityOutlinedIcon className={iconclassName} />,
  <TuneOutlinedIcon className={iconclassName} />,
  <VpnKeyOutlinedIcon className={iconclassName} />,
  <NotificationsNoneIcon className={iconclassName} />,
  <EditNoteOutlinedIcon className={iconclassName} />,
];

function IconTitleManager({ linkTitle }: any) {
  if (linkTitle === "publishing") {
    return <CalendarTodayOutlinedIcon className={icontitleclassName} />;
  }
  if (linkTitle === "tools") {
    return <PlayCircleOutlinedIcon className={icontitleclassName} />;
  }
  if (linkTitle === "monitoring") {
    return <InsertChartOutlinedTwoToneIcon className={icontitleclassName} />;
  }
  if (linkTitle === "organize") {
    return <AccountTreeOutlinedIcon className={icontitleclassName} />;
  }
  if (linkTitle === "domainurls") {
    return <LanguageOutlinedIcon className={icontitleclassName} />;
  }
  if (linkTitle === "billing") {
    return <AttachMoneyOutlinedIcon className={icontitleclassName} />;
  }
  if (linkTitle === "settings") {
    return <SettingsOutlinedIcon className={icontitleclassName} />;
  }
  return <AccountCircleOutlinedIcon className={icontitleclassName} />;
}

function IconListManager({ linkTitle, index }: any) {
  if (linkTitle === "publishing") {
    return PublishingListIcon[index];
  }
  if (linkTitle === "tools") {
    return ToolsListIcon[index];
  }
  if (linkTitle === "monitoring") {
    return MonitoringListIcon[index];
  }
  if (linkTitle === "organize") {
    return OrganizeListIcon[index];
  }
  if (linkTitle === "domainurls") {
    return DomainAndUrlListIcon[index];
  }
  if (linkTitle === "billing") {
    return BillingListIcon[index];
  }
  if (linkTitle === "settings") {
    return SettingListIcon[index];
  }
  return ProfileListIcon[index];
}

export default function DropDown({
  linkTitle,
  title,
  lists,
  sidebarOpen,
}: {
  linkTitle: any;
  title: any;
  lists: any[];
  sidebarOpen: any;
}) {
  return (
    <details id={linkTitle}>
      <summary className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-300 hover:bg-purple-100 dark:hover:bg-[#7B46DE] dark:hover:text-white">
        <IconTitleManager linkTitle={linkTitle} />
        <span className="ml-3 flex-1 text-left text-sm font-medium">
          {sidebarOpen && title}
        </span>
        {sidebarOpen && <KeyboardArrowDownOutlinedIcon />}
      </summary>
      <ul>
        {lists.map((list, index) => {
          return (
            <li key={list}>
              <a
                className={`${
                  sidebarOpen ? "ml-8 p-2" : "hidden scale-0"
                }group flex items-center rounded-lg p-2 text-sm font-medium text-gray-300 hover:bg-purple-100 dark:hover:bg-[#7B46DE] dark:hover:text-white`}
                href={`/${linkTitle}/${list.toLowerCase().replace(/\s/g, "")}`}
              >
                <IconListManager linkTitle={linkTitle} index={index} />
                <span className={`${!sidebarOpen && "hidden scale-0"}`}>
                  {list}

                  {/* links name check exist in the folder */}
                  {/* {console.log(list.toLowerCase().replace(/\s/g, ""))} */}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
