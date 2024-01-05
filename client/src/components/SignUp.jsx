import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PersonRounded,
  PasswordRounded,
  Work,
  EmailRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const SignUp = ({ setOpenSignUp }) => {
  const [user, setUser] = useState("admin");
  const [userEmployee, setuserEmployee] = useState("employee");
  const [userAdmin, setUserAdmin] = useState("admin");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showPassword, setshowPassword] = useState(false);
  const [errormessage, seterrormessage] = useState({
    username: "",
    email: "",
    work: "",
    password: "",
    apierror: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    work: user,
    password: "",
  });
  const [confirmPassword, setconfirmPassword] = useState("");
  console.log("formdata", formData);
  console.log("error-message", errormessage);
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      console.log(name, value);
      if (!value) {
        setButtonDisabled(true);
        seterrormessage({
          ...errormessage,
          username: "Username is required",
        });
      }
      const usernameRegex = /^[A-Za-z0-9\s]+$/;
      if (value && !usernameRegex.test(value)) {
        setButtonDisabled(true);
        seterrormessage({
          ...errormessage,
          username: "Username must contain only numbers, letters and spaces",
        });
      } else {
        seterrormessage({
          ...errormessage,
          username: "",
        });
      }
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        setButtonDisabled(true);
        seterrormessage({
          ...errormessage,
          username: "Email is required",
        });
      }
      if (value && !emailRegex.test(value)) {
        seterrormessage({
          ...errormessage,
          email: "Enter correct email format",
        });

        setButtonDisabled(true);
      } else {
        seterrormessage({
          ...errormessage,
          email: "",
        });
      }
    }
    if (name === "password") {
      if (!value) {
        setButtonDisabled(true);
      }
      if (value && value.length < 8) {
        seterrormessage({
          ...errormessage,
          password: "Password is too short",
        });
        setButtonDisabled(true);
      } else if (
        value &&
        (!value.match(/[a-z]/g) ||
          !value.match(/[A-Z]/g) ||
          !value.match(/[0-9]/g) ||
          !value.match(/[^a-zA-Z\d]/g))
      ) {
        seterrormessage({
          ...errormessage,
          password:
            "Password must contain atleast one lowercase, uppercase, number and special character!",
        });
        setButtonDisabled(true);
      } else {
        seterrormessage({
          ...errormessage,
          password: "",
        });
      }
    }
    if (name === "Confirm password") {
      setconfirmPassword(value);
      if (value !== formData.password) {
        seterrormessage({
          ...errormessage,
          confirmpassword: "Password does not match",
        });
        setButtonDisabled(true);
      } else {
        seterrormessage({
          ...errormessage,
          confirmpassword: "",
        });
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (
      !errormessage.username &&
      !errormessage.email &&
      !errormessage.password &&
      formData.username &&
      formData.password &&
      formData.email &&
      confirmPassword === formData.password
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [confirmPassword, errormessage, formData]);
  const registerUser = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/users/register",
      data
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:5000/users/find", formData)

      .then((res) => {
        if (res.status === 200) {
          setButtonDisabled(true);
          seterrormessage({
            ...errormessage,
            apierror: "Email already exists",
          });
        } else if (res.status === 230) {
          registerUser(formData);
          setFormData({
            username: "",
            email: "",
            work: user,
            password: "",
          });
          seterrormessage({
            username: "",
            email: "",
            work: "",
            password: "",
            apierror: "",
          })
        }
      });
  };
  console.log("errormsg", errormessage);
  return (
    <div className="bg-[#0d0d0d] xs:w-[220px] sm:w-[500px] md:w-[600px]  flex flex-col  gap-4 rounded-[8px] ">
      <h3 className="text-white xs:text-[20px] md:text-[28px] xs:ml-5 xs:mt-4 md:ml-7">
        Sign-Up
      </h3>
      <div className="flex flex-col items-start  justify-center w-full gap-4">
        <div className="flex justify-center items-center xs:ml-5 sm:ml-8 xs:gap-[20px] sm:gap-[50px] sm:mt-1.5 sm:mb-1.5 ">
          <button
            className={`text-white xs:text-[15px] sm:text-[18px] md:text-[22px] bg-transparent ${
              userEmployee === user && `border-b-2 border-white`
            }`}
            value="employee"
            onClick={(e) => {
              setUser(e.target.value);
              setFormData({
                ...formData,
                work: e.target.value,
              });
            }}
          >
            Employee
          </button>
          <button
            className={`text-white xs:text-[15px] sm:text-[18px] md:text-[22px] bg-transparent ${
              userAdmin === user && `border-b-2 border-white`
            }`}
            value="admin"
            onClick={(e) => {
              setUser(e.target.value);
              setFormData({
                ...formData,
                work: e.target.value,
              });
            }}
          >
            Admin
          </button>
        </div>
        <div className="w-[90%] bg-transparent border outline-none xs:ml-3 sm:ml-8 border-[#a9a9a9] mt-2 mb-2  sm:py-[7px] md:py-[10px] rounded-[7px] flex flex-row gap-3 items-center ">
          <PersonRounded className="ml-2 text-white" />
          <input
            className="w-full bg-transparent outline-none  text-[#b6aeae]"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleinputChange}
          />
        </div>
        {errormessage.username && (
          <span className="text text-red-700 xs:ml-3 sm:ml-8 text-[12px]">
            {errormessage.username}
          </span>
        )}
        <div className="w-[90%] bg-transparent border outline-none xs:ml-3 sm:ml-8 border-[#a9a9a9] mt-2 mb-2  sm:py-[7px] md:py-[10px] rounded-[7px] flex flex-row gap-3 items-center">
          <EmailRounded className="ml-2 text-white" />
          <input
            className="w-full bg-transparent outline-none  text-[#b6aeae]"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleinputChange}
          />
        </div>
        {errormessage.email && (
          <span className="text text-red-700 xs:ml-3 sm:ml-8 text-[12px]">
            {errormessage.email}
          </span>
        )}
        <div className="w-[90%] bg-transparent border xs:ml-3 sm:ml-8 outline-none border-[#a9a9a9] mt-2 mb-2  sm:py-[7px] md:py-[10px] rounded-[7px] flex flex-row gap-3 items-center">
          <PasswordRounded className="ml-2 text-white" />
          <input
            className="w-full bg-transparent outline-none  text-[#b6aeae]"
            type={`${showPassword ? `text` : `password`}`}
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleinputChange}
          />
          {showPassword ? (
            <VisibilityOff
              className="mr-2 text-white"
              onClick={() => setshowPassword(!showPassword)}
            />
          ) : (
            <Visibility
              className="mr-2 text-white"
              onClick={() => setshowPassword(!showPassword)}
            />
          )}
        </div>
        {errormessage.password && (
          <span className="text text-red-700 xs:ml-3 sm:ml-8 text-[12px]">
            {errormessage.password}
          </span>
        )}
        <div className="w-[90%] bg-transparent border outline-none xs:ml-3 sm:ml-8 border-[#a9a9a9] mt-2 mb-2  sm:py-[7px] md:py-[10px] rounded-[7px] flex flex-row gap-3 items-center">
          <PasswordRounded className="ml-2 text-white" />
          <input
            className="w-full bg-transparent outline-none  text-[#b6aeae]"
            type={`${showPassword ? `text` : `password`}`}
            placeholder="Confirm password"
            name="Confirm password"
            value={confirmPassword}
            onChange={handleinputChange}
          />
        </div>
        {errormessage.confirmpassword && (
          <span className="text text-red-700 ml-0 xs:text-[3px] xs:ml-3 sm:ml-8 sm:text-[12px]">
            {errormessage.confirmpassword}
          </span>
        )}

        {errormessage?.apierror && (
          <span className="text text-red-700 xs:ml-3 sm:ml-8 text-[12px]">
            {errormessage?.apierror}
          </span>
        )}
        <button
          className={`w-[90%] xs:ml-3 sm:ml-8 xs:py-1 sm:py-2 mb-4 bg-gradient-to-r from-violet-900  to-pink-600 text-white rounded-[8px] ${
            buttonDisabled && `cursor-not-allowed`
          }`}
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
        </button>
        <div className="flex w-full justify-center items-center">
          <a
            href="#"
            className="text text-purple-800 underline "
            onClick={() => {
              setOpenSignUp(false);
            }}
          >
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
