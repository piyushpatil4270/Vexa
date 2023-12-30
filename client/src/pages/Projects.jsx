import React, { useEffect, useState } from "react";
import ProjectCard from "../components/cards/ProjectCard";
import Createtask from "../components/cards/CreateTask";
import axios from "axios";
const Projects = ({ createTask, setCreateTask }) => {
  const [tasks, setTasks] = useState(null);
   const  fetchTasks = async () => {
    const res = await axios
      .get("http://localhost:5000/tasks/alltasks")
      .then((res) => {
        try {
          setTasks(res.data);
          console.log("allTasks", res.data);
        } catch (error) {
          console.log("ERROR", error);
        }
      });
  };

  useEffect(() => {
    fetchTasks();
  },[]);
  return (
    <div className="h-full w-full relative">
      {createTask && <Createtask setCreateTask={setCreateTask} />}

      <div className="w-full h-full gap-[10px] flex flex-wrap justify-center items-start">
        {tasks &&
          tasks.map((task) => (
            <ProjectCard
            projectid={task._id}
              title={task.title}
              type={task.project_type}
              date={task.created_at}
              userid={task.userid}
              description={task.projectDescription}
            />
          ))}
      </div>
    </div>
  );
};


export default Projects;

