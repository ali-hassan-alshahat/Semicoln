import { Home, CheckSquare, Settings, MessageCircle, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "overview", path: "/app" },
    { icon: CheckSquare, label: "tasks", path: "/tasks" },
    { icon: MessageCircle, label: "chat", path: "/chat" },
    { icon: Settings, label: "settings", path: "/settings" },
  ];
  const navigate = useNavigate()
  return (
    <aside className="flex h-screen">
      <div className="w-20 bg-primary-700 flex flex-col items-center py-12 gap-6">
        <Avatar className="h-10 w-10 border-2 border-white">
          <AvatarFallback className="bg-white text-blue-600 font-bold">
            image
          </AvatarFallback>
        </Avatar>
        <Button
          size="icon"
          className="rounded-xl bg-primary-600 hover:bg-primary-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Plus className="h-5 w-5" />
        </Button>
        <nav className="flex-1 px-3 space-y-1 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-200 hover:bg-blue-400"
                }`}
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </nav>
      </div>
        <div className="hidden md:flex w-52 bg-white dark:bg-gray-900 border-r flex-col py-8">
        <div className="px-6 py-6">
          <h2 className="font-semibold text-gray-900 dark:text-gray-50">
            Me & I
          </h2>
          <p className="text-sm text-gray-400 "></p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={
                  `relative flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 hover:bg-gray-100"}`
                  
                }
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-blue-600" />
                )}
                <Icon className="h-4 w-4 text-primary" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
