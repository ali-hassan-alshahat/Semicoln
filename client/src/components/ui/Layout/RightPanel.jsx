import { CalendarBasic } from "@/Features/CalendarBasic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import { Button } from "../button";
import { Link } from "react-router-dom";

const RightPanel = () => {
  return (
    <aside className="hidden xl:flex w-72 bg-white dark:bg-gray-900 border-l flex-col">
      <div className="p-4 text-center">
        <div>Image</div>
        <div>UserName</div>
      </div>
      <div className="pb-4 text-center">
        <Button className="w-40 bg-primary hover:bg-primary/80 text-white cursor-pointer">
          <Link to="/profile">
          My Profile
          </Link>
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-2 dark:bg-gray-900">
            <TabsTrigger value="calendar" className="cursor-pointer">Calendar</TabsTrigger>
            <TabsTrigger value="reminder" className="cursor-pointer">Reminder</TabsTrigger>
          </TabsList>
          <TabsContent value="calendar" className="mt-4">
            <CalendarBasic />
          </TabsContent>
          <TabsContent value="reminder">
            <p className="text-sm text-gray-500">No reminders yet</p>
          </TabsContent>
        </Tabs>
      </div>
    </aside>
  );
};

export default RightPanel;
