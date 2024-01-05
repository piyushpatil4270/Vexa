import "./index.css"
import "./app.css"
import Authentication from "./pages/Authentication";
import {Routes,Route} from "react-router-dom"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import  Dashboard  from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile"
import { useSelector } from "react-redux";
import CreateTask from "./components/cards/CreateTask";
import { useState } from "react";
import SingleProjectCard from "./components/cards/SingleProjectCard";
function App() {
  const {currentuser}=useSelector(state=>state.user1)
  const [createTask,setCreateTask]=useState(false)
  
  return (
    <div className="w-full h-screen bg-black overflow-y-auto ">
      {currentuser?(<div className="flex h-full w-full gap-[10px]">
       <div className="xs:hidden  sm:flex bg-transparent h-full w-[20%]" >
         <Menu createTask={createTask} setCreateTask={setCreateTask} />
        </div>
        <div className={`xs:w-full h-full overflow-scroll sm:w-[80%] bg-[#0d0d0d]`}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard createTask={createTask} user={currentuser} setCreateTask={setCreateTask} />} />
            <Route path="/employees" element={<Employees createTask={createTask} user={currentuser} setCreateTask={setCreateTask} />} />
            <Route path="/projects" element={<Projects createTask={createTask} user={currentuser} setCreateTask={setCreateTask} />} />
            <Route path="/projects/:projectId" element={<SingleProjectCard createTask={createTask} setCreateTask={setCreateTask} />} />
            <Route path="/profile/:userId" element={<Profile createTask={createTask} setCreateTask={setCreateTask} />} />
          </Routes>
       </div>
      </div>):(<Authentication/>)}
    </div>
  );
}

export default App;
