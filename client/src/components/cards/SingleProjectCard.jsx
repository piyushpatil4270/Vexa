import React, { useEffect, useState } from "react";
import profile from "../../assets/p12.jpeg";
import {
  Diversity1,
  Apartment,
  Add,
  ArrowDropDown,
  ArrowDropUp,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProjectCard = ({ createTask, setCreateTask }) => {
  const projectType = "company";
  const [showProgress, setShowProgress] = useState(false);
  const [status,setStatus]=useState(false)
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  console.log("ProjectId", projectId);
  const [progress, setProgress] = useState("");

  const fetchProject = async () => {
    try {
      const res = await axios
        .get("http://localhost:5000/tasks/gettask/" + projectId)
        .then((res) => {
          setProject(res.data);
          console.log("Project", res.data);
        });
    } catch (error) {
      console.log("Project-Error", error);
    }
  };
  const addProgress = async () => {
    try {
      const res = await axios
        .post(`http://localhost:5000/tasks/addlog/${projectId}`, { progress })
        .then((res) => {
          if (res.status === 202) {
            setProgress("");
          }
        });
    } catch (error) {
      console.log("Progress-Error", error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);
  console.log(project);
  return (
    <div className="w-full h-full flex justify-center items-start">
      {project ? (
        <div className="flex flex-col items-start justify-start gap-[25px] mt-[20px] w-[80%] bg-black rounded-[5px] h-fit">
          <div className="flex  ml-[25px]   mt-[20px]">
            <span className="text text-white text-[18px]">{project.title}</span>
          </div>
          <div className="flex gap-[100px] ml-[25px] items-center justify-center">
            <div className="flex  items-center justify-center gap-[10px]">
              <img
                src={profile}
                alt="user"
                className="md:h-[50px] md:w-[50px] xs:h-[35px] xs:w-[35px] xs:rounded-[50%] md:rounded-full object-cover"
              />
              <span className="text text-white w-[50%] text-[15px]">{project.userid}</span>
            </div>
            <div className="flex gap-[15px] items-center justify-center bg-[#f14e8a14] w-fit pr-2 rounded-[5px]">
              {project.project_type === "company" ? (
                <>
                  <Apartment
                    style={{
                      color: "#ca2c88",
                      fontSize: "30px",
                      marginLeft: "10px",
                    }}
                  />
                  <span className="xs:hidden md:flex text text-[#ca2c88] text-[18px]">
                    Company
                  </span>
                </>
              ) : (
                <>
                  {" "}
                  <Diversity1
                    style={{
                      color: "#ca2c88",
                      fontSize: "30px",
                      marginLeft: "10px",
                    }}
                  />
                  <span className="xs:hidden md:flex text text-[#ca2c88] text-[18px]">
                    Team
                  </span>
                </>
              )}
            </div>
            <div className="flex w-[33%] gap-[20px] items-center justify-start">
              <span className="text text-white text-[13px]">
                Started : <></>
                <span className="text-white text-[13px]">{project.created_at}</span>
              </span>
            </div>
          </div>
          <div className="flex ml-[25px] mt-[20px]">
            <span className="text text-white text-[15px]">
              {project.description ? (
                project.description
              ) : (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  nihil quos repellendus odio natus quaerat ex labore assumenda
                  quasi error. Error alias quas quasi odit. Distinctio,
                  voluptatum expedita deserunt quas eos, harum vero vitae
                  molestiae, impedit inventore possimus adipisci in. Sapiente
                  ad, expedita illo, itaque dolor alias vel accusamus minima
                  tempore deserunt doloremque dolorem enim consectetur doloribus
                  natus iste quo labore. Enim quia doloremque adipisci, eveniet
                  perferendis quo. Tenetur nam rerum consectetur suscipit qui
                  autem.
                </p>
              )}
            </span>
          </div>
          <div className="w-full flex xs:gap-[25px] md:gap-[50px] ml-[25px] ">
          <div className="flex gap-[20px] items-center justify-start border-[1px] rounded-[4px] w-[25%] ">
            <input
              className="bg-transparent outline-none xs:w-[70%] md:w-[85%]  text-[12px] h-[25px] text-white "
              placeholder="  Log Progress"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
           <Add style={{color:"white",fontSize:"20px"}} onClick={() => addProgress()} />
            
          </div>
          <div className="flex gap-[20px]  items-start justify-center  w-[20%]">
           <div className="w-full  flex flex-col outline-none border-[1px] h-[25px] rounded-[4px]">
           <div className="flex w-full  outline-none  rounded-[4px]">
             <input
              className="bg-transparent  w-[90%] outline-none text-[12px]  text-white "
              placeholder="  Add status"
              value=""
              disabled={true}
            />
            {!status?(<ArrowDropDown style={{color:"white"}} onClick={()=>{setStatus(!status)}}/> ):(<ArrowDropUp style={{color:"white"}} onClick={()=>{setStatus(!status)}} /> ) }
            
            </div>
            {status&&(
              <div className="w-full mt-1 flex flex-col ml-2">
                <div className="flex w-full items-center justify-start start gap-[52px]">
                  <span className="text-white text-[12px] w-[50%]">Started</span>
                  <RadioButtonChecked style={{color:"white",fontSize:"12px"}} />
                </div>
                <div className="flex w-full items-center justify-start start gap-[52px]">
                  <span className="text-white text-[12px] w-[50%]">Progress</span>
                  <RadioButtonUnchecked style={{color:"white",fontSize:"12px"}} />
                </div>
                <div className="flex w-full items-center justify-start start gap-[52px]">
                  <span className="text-white text-[12px] w-[50%]"> Completed</span>
                  <RadioButtonUnchecked style={{color:"white",fontSize:"12px"}} />
                </div>
              </div>
            
            )}
            
            </div>
            
          </div>
          
          
          </div>
          
          
          <div className="flex flex-col gap-[5px] h-fit ml-[25px] mt-[20px]">
            <button
              className={`text-white text-[15px] bg-gradient-to-r w-fit pr-2 pl-2 rounded-[4px] from-purple-700  to-pink-600 flex items-center justify-between ${
                !showProgress && `mb-[20px]`
              }`}
            >
              <span className="text text-white text-[14px]">Show Progress</span>
              {showProgress ? (
                <ArrowDropUp
                  style={{ fontSize: "25px" }}
                  onClick={() => setShowProgress(!showProgress)}
                />
              ) : (
                <ArrowDropDown
                  style={{ fontSize: "25px" }}
                  onClick={() => setShowProgress(!showProgress)}
                />
              )}
            </button>
            {showProgress && (
              <div className="flex flex-col gap-[5px] w-full justify-between items-start  bg-[#3131319e] rounded-[5px] mb-[20px]">
                {project?.comments.map((comment) => {
                  return (
                    <div className="flex justify-start m-2 items-center gap-[50px] w-full">
                      <span className="text text-white text-[14px] w-[60%]">
                        {comment.description}
                      </span>
                      <span className="text text-white text-[14px] w-[40%]">
                      {comment?.date}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        "LOADING..."
      )}
    </div>
  );
};

export default SingleProjectCard;
