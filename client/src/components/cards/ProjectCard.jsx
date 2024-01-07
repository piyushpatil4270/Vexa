import React from "react";
import {
  Diversity1,
  Apartment,
  CalendarMonth,
  Person,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const ProjectCard = ({projectid, title, type, date, projectDescription, userid }) => {
  return (
    <div className="md:w-[40%] lg:w-[30%] mt-[10px] mb-[10px] xs:w-[40%]   gap-[8px] cursor-pointer h-[150px] xs:h-[25%] rounded-[10px] bg-black">
      <Link className="w-full h-full flex flex-col items-start justify-start gap-[8px]" to={`${projectid}`}>
      <div className="flex w-full h-[35%]">
        {type == "team" ? (
          <div className="flex ml-[5%] mt-[3%] bg-[#f14e8a14] justify-start gap-[10px] items-center xs:w-[20%] md:w-[40%] rounded-[2px] h-[65%]">
            <Diversity1
              style={{ color: "#ca2c88", fontSize: "15px", marginLeft: "10px" }}
            />
            <span className="xs:hidden md:flex text text-[#ca2c88] lg:text-[15px] mdtext-[13px]">
              Team
            </span>
          </div>
        ) : ( 
          <div className="md:flex ml-[5%] mt-[3%] bg-[#f14e8a14] justify-start gap-[10px] items-center xs:w-[20%] md:w-[40%] rounded-[2px] h-[65%]">
            <Apartment
              style={{ color: "#ca2c88", fontSize: "15px", marginLeft: "10px" }}
            />
            <span className="xs:hidden md:flex  text-[#ca2c88] lg:text-[15px] md:text-[13px]">
              Company
            </span>
          </div>
        )}
        <div className="md:flex ml-[5%] mt-[3%] bg-[#f5db3014] justify-start gap-[10px] items-center xs:w-[20%] md:w-[40%] rounded-[2px] h-[65%]">
          <Person
            style={{ color: "#caaa2c", fontSize: "15px", marginLeft: "10px" }}
          />
          <span className="xs:hidden md:flex text-[#caaa2c] overflow-hidden text-ellipsis lg:text-[15px] md:text-[13px]">
            {userid}
          </span>
        </div>
      </div>
      <div className="ml-[5%]">
        <span className="text text-white text-[16px]">{title}</span>
      </div>
      <div className="ml-[5%] flex gap-[10px]">
        <CalendarMonth style={{ color: "gray", fontSize: "18px" }} />
        <span className="text text-white text-[12px]">{date?date:"22-02-2018"}</span>
      </div>
      </Link>
    </div>
    
  );
};

export default ProjectCard;
