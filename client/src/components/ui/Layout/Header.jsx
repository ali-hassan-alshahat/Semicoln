import { Searchbar } from "@/Features/Searchbar";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="px-4 flex items-center justify-between">
        <Searchbar />
        <div className="relative">
          <Bell className="text-primary" />
          <span className="absolute top-0 right-0 size-2 rounded-full bg-red-500" />
        </div>
      </div>
    </>
  );
};

export default Header;