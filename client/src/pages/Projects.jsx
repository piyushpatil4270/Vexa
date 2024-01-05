import React, { useEffect, useState } from "react";
import ProjectCard from "../components/cards/ProjectCard";
import Createtask from "../components/cards/CreateTask";
import axios from "axios";
import { Try } from "@mui/icons-material";
const Projects = ({ createTask, setCreateTask,user }) => {
  const [tasks, setTasks] = useState(null);
  const username=user?.username
   const  fetchTasks = async () => {
    try {
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
    } catch (error) {
      console.log(error)
    }
};

  const fetchUserTasks=async()=>{
   try {
    const res=await axios.post("http://localhost:5000/tasks/user",{username})
    .then((res)=>{
      setTasks(res.data)
    })
   } catch (error) {
    console.log(error)
   }
}

  useEffect(() => {
   { user.role ==="admin" && fetchTasks()}
   { user.role ==="employee" && fetchUserTasks()}
  },[createTask,setCreateTask]);
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

