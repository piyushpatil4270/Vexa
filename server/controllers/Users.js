import { Users } from "../model/Users.js";
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
export const secret = "secretkey";
export const registerUser = async (req, res) => {
  try {
    const { username, email, work, password } = req.body;
    const saltrounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltrounds);
    const user = await Users.create({
      username: username,
      role: work,
      email: email,
      password: hashedpassword,
    });
    res.status(200).json("user created");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await Users.find({ email: email });
    if (user[0].role !== String(role)) return res.status(240).json(user[0]);
    if (!user[0]) return res.status(230).json("Enter valid Email");
    let result = bcrypt.compareSync(password, user[0].password);
    console.log(result);
    if (result) {
      const token = jwt.sign({ id: user[0]._id }, secret);

      return res
        .cookie("user-token", token)
        .status(202)
        .json({ Token: token, User: user[0] });
    }
    return res.status(235).json("Enter valid password");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const findUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.find({ email: email });
    if (!user[0]) return res.status(230).json("user not found");
    return res.status(200).json(user[0]);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users=await Users.find()
    res.status(202).json({"Users":users});
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getUser=async(req,res)=>{
  try {
    const {userId}=req.params
    const user=await Users.findById(userId)
    res.status(202).json(user)
  } catch (error) {
    res.status(404).json(error)
  }
}