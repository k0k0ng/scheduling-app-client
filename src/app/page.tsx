import TopNav from "@/components/topnav";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-[100vh] flex-row border border-[red]">
      <SideBar />
      <TopNav />
    </div>
  );
}
