import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "@/Features/Sidebar";
import RightPanel from "./RightPanel";
const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF1F8] dark:bg-gray-700">
      <Sidebar />
      <main className="flex-1 flex flex-col pt-5">
        <Header />
        <div className="flex-1 overflow-y-auto bg-[#EEF1F8] dark:bg-gray-800">
          <Outlet />
        </div>
      </main>
      <RightPanel />
    </div>
  );
};

export default AppLayout;
