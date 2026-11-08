import tasksEmpty from "../../assets/TasksEmpty.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Tasks = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#101C56] font-bold text-4xl">Tasks</h2>
        <p className="text-[#636363] text-xl">Your tasks in your space.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 text-center">
        <div>
          <img src={tasksEmpty} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-black font-semibold text-3xl">No Tasks Yet</h1>
          <p className="text-[#6D6C6C]">
            You have no task created in your workspace yet.
          </p>
          <p className="text-[#6D6C6C]">Get productive. Create a Task Now.</p>
          <div>
            <Button className="w-40 bg-primary hover:bg-primary/80 text-white cursor-pointer mt-4">
              <Link to="/profile">Create a Task </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
