import React, { useState } from "react";
import {
  BusinessCenter,
  CalendarMonth,
  Clear,
  Assignment,
  TaskAlt,
  ArrowDropDown,
  ArrowDropUp,
  RadioButtonChecked,
  RadioButtonUnchecked,
  AssignmentInd,
} from "@mui/icons-material";
import axios from "axios";
import { useSelector } from "react-redux";
const CreateTask = ({ setCreateTask, createTask }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [projectType, setProjectType] = useState("company");
  const {currentuser}=useSelector(state=>state.user1)
  const [formData,setFormData ]= useState({
    userid:currentuser._id,
    project_type: "team",
    assigned_to:"",
    startDate: "",
    projectTitle: "",
    projectDescription: "",
  });
  console.log("formdata",formData)
  const [errorMessage,setErrorMessage]=useState({
    apierror:""
  })
  const addTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/tasks/createtask",
        formData)
        .then((res)=>{
          try {
            setFormData({
              userid:currentuser._id,
              project_type:"team",
              assigned_to:"",
              startDate: "",
              projectTitle: "",
              projectDescription: "",
            })
            if(res.status===202){
              setCreateTask(false)
            }
          } catch (error) {
            console.log("ERROR",error)
            setErrorMessage({
              ...errorMessage,
              apierror:error
            })
          }
        })
    } catch (error) {
      setErrorMessage({
        ...errorMessage,
        apierror:error.response.data
      })

    }
    
  };

  return (
    <div
      className={`w-[65%] h-fit pb-[20px]   bg-[#131313] flex flex-col justify-start items-center gap-[20px] absolute top-[15%] left-[20%] rounded-[8px]`}
    >
      <div className="w-[600px] flex mt-[20px] ml-[40px] justify-start items-center gap-[65%]">
        <span className="text text-white">Create New Project</span>
        <Clear
          style={{ fontSize: "20px", color: "white" }}
          onClick={() => {
            setCreateTask(false);
          }}
        />
      </div>
      <div className="ml-[40px] w-[600px] flex   gap-[10px]  ">
        <div
          className={`border-[1.2px] ${
            !showDropdown ? `h-[35px]` : `h-[100px]`
          }  border-[#565656] w-[45%] rounded-[4px] flex justify-start items-start `}
        >
          <div className="w-full flex flex-col mt-[7px]">
            <div className="w-full flex justify-center items-center gap-2">
              <BusinessCenter style={{ fontSize: "20px", color: "gray" }} />
              <button
                className="w-[80%] bg-transparent outline-none text-white text-[12px] flex"
                placeholder="Project Type"
              >
                <input
                  className="text bg-transparent outline-none text-white"
                  disabled={true}
                  placeholder="Project Type"
                />
                {showDropdown ? (
                  <ArrowDropUp
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      marginLeft: "25%",
                    }}
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                ) : (
                  <ArrowDropDown
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      marginLeft: "25%",
                    }}
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                )}
              </button>
            </div>
            {showDropdown && (
              <div className="flex flex-col justify-center items-start  bg-transparent mt-[7px] ml-[12px] gap-[10px] w-[90%]">
                <div className="flex gap-[20px] w-full  justify-start items-start">
                  <div className="flex w-[60%] justify-start ml-[5px]">
                    <button className="text text-white text-[12px] ">
                      Company Managed
                    </button>
                  </div>
                  {formData?.project_type === "company" ? (
                    <RadioButtonChecked
                      style={{ fontSize: "15px", color: "gray" }}
                      onClick={() => setFormData({
                        ...formData,
                        project_type:"team"
                      })}
                    />
                  ) : (
                    <RadioButtonUnchecked
                      style={{ fontSize: "15px", color: "gray" }}
                      onClick={() => setFormData({
                        ...formData,
                        project_type:"company"
                      })}
                    />
                  )}
                </div>
                <div className="flex gap-[20px] w-full  justify-start items-start">
                  <div className="flex w-[60%] justify-start ml-[5px]">
                    <button className="text  text-white text-[12px] ">
                      Team Managed
                    </button>
                  </div>
                  {formData?.project_type === "team" ? (
                    <RadioButtonChecked
                      style={{ fontSize: "15px", color: "gray" }}
                      onClick={() => setFormData({
                        ...formData,
                        project_type:"company"
                      })}
                    />
                  ) : (
                    <RadioButtonUnchecked
                      style={{ fontSize: "15px", color: "gray" }}
                      onClick={() => setFormData({
                        ...formData,
                        project_type:"team"
                      })}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border-[1.2px] h-[35px]  border-[#565656] w-[45%] rounded-[4px] flex justify-center items-center gap-2">
          <CalendarMonth style={{ fontSize: "20px", color: "gray" }} />
          <input
            className="w-[80%] bg-transparent outline-none text-white text-[12px] cursor-pointer"
            placeholder="Start Date"
            readOnly={true}
            value={""}
            onChange={(e)=>setFormData({
              ...formData,
              startDate:e.target.value
            })}
          />
        </div>
      </div>
      {/*showDropdown && (
        <div className="flex flex-col justify-center items-start  bg-transparent gap-[10px] w-[30%]">
      <div className="flex gap-[20px] w-full  justify-start items-start">
     <button className="text text-white text-[12px]">Team  Managed</button>
     <RadioButtonChecked style={{ fontSize: "15px", color: "gray" }} />
     </div>
     <div className="flex gap-[20px] w-full  justify-start items-start">
     <button className="text  text-white text-[12px]">Company Managed</button>
     <RadioButtonChecked style={{ fontSize: "15px", color: "gray" }} />
     </div>
          </div>
      )*/}
     
      <div className="flex w-[680px] gap-[10px] justify-start">
        <div className="w-[81%] border-[1.2px] border-[#565656] rounded-[4px] h-[35px] flex justify-center ml-[60px] items-center gap-2">
          <AssignmentInd style={{ fontSize: "20px", color: "gray" }} />
          <input
            className="w-[90%] bg-transparent outline-none text-white text-[12px]"
            placeholder="Assigned To"
            value={formData.assigned_to}
            onChange={(e)=>setFormData({
              ...formData,
              assigned_to:e.target.value
            })}
          />
        </div>
      </div>
      <div className="flex w-[680px] gap-[10px] justify-start">
        <div className="w-[81%] border-[1.2px] border-[#565656] rounded-[4px] h-[35px] flex justify-center ml-[60px] items-center gap-2">
          <Assignment style={{ fontSize: "20px", color: "gray" }} />
          <input
            className="w-[90%] bg-transparent outline-none text-white text-[12px]"
            placeholder="Project Title"
            value={formData.projectTitle}
            onChange={(e)=>setFormData({
              ...formData,
              projectTitle:e.target.value
            })}
          />
        </div>
      </div>
      <div className="flex w-[680px] justify-start gap-[10px]">
        <div className="w-[81%] border-[1.2px] border-[#565656] rounded-[4px] ml-[60px] flex justify-center items-start gap-2">
          <TaskAlt
            style={{ fontSize: "20px", color: "gray", marginTop: "10px" }}
          />
          <textarea
            rows={7}
            className="w-[90%] mt-[10px] bg-transparent h-full min-h-[100px] resize-none outline-none text-white text-[12px]"
            placeholder="Project Description"
            value={formData.projectDescription}
            onChange={(e)=>setFormData({
              ...formData,
              projectDescription:e.target.value
            })}
          ></textarea>
        </div>
        
      </div>
      {errorMessage.apierror && <div className="w-[87%] border-[1.2px] border-none rounded-[4px]  flex justify-start  items-start gap-2">
          <span className="text-red-700 text-[15px]">{errorMessage.apierror}</span>
        </div>}
      <div className="w-[680px] ml-[115px] justify-start">
        <div className="flex w-[82%] justify-center ">
          <button
            className="rounded-[4px] w-full h-[35px] bg-gradient-to-r from-violet-900  to-pink-600 "
            onClick={() => addTask()}
          >
            <span className="text text-white text-[15px]">Add Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
