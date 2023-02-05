import React from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <>
      <div className="flex items-center h-[742px]">
        <div className="m-auto border p-2">
          <h1 className="text-center mb-3">Mahasiswa Cuy University</h1>
          <AddTask />
          <TaskList />
        </div>
      </div>
    </>
  );
};

export default Home;
