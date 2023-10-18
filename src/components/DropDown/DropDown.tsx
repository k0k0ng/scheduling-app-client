import "./DropDown.css";

// keyboard arrow icon
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// settings title
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// setting list
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
// publishing title
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// publishing list
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const iconclassName = "mr-2 duration-500";
const icontitleclassName = "ml-2";

const settinglistIcons = [
  <Person2OutlinedIcon className={iconclassName} />,
  <SubscriptionsOutlinedIcon className={iconclassName} />,
  <ArticleOutlinedIcon className={iconclassName} />,
];

const publishinglistIcons = [
  <EditCalendarOutlinedIcon className={iconclassName} />,
];

function IconTitleManager({ IconTitle }: { IconTitle: string }) {
  if (IconTitle === "Settings") {
    return <SettingsOutlinedIcon className={icontitleclassName} />;
  }
  return <CalendarTodayOutlinedIcon className={icontitleclassName} />;
}

function IconListManager({
  IconTitle,
  index,
}: {
  IconTitle: string;
  index: number;
}) {
  if (IconTitle === "Settings") {
    return settinglistIcons[index];
  }
  return publishinglistIcons[index];
}

export default function DropDown({
  title,
  lists,
  sidebarOpen,
}: {
  title: string;
  lists: string[];
  sidebarOpen: boolean;
}) {
  return (
    <details>
      <summary className="group flex w-full items-center rounded-lg p-3 text-base font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700">
        <IconTitleManager IconTitle={title} />
        <span className="ml-3 flex-1 whitespace-nowrap text-left text-sm font-medium">
          {sidebarOpen && title}
        </span>
        {sidebarOpen && <KeyboardArrowDownOutlinedIcon className="" />}
      </summary>
      <ul>
        {lists.map((list, index) => {
          return (
            <li className="ml-8" key={list}>
              <a
                className="group flex items-center rounded-lg p-3 text-sm font-normal text-gray-900 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
                href="/#"
              >
                <IconListManager IconTitle={title} index={index} />
                {list}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
