import {Router} from "express"
import {registerUser,loginUser, findUser,getAllUsers,getUser} from "../controllers/Users.js"
const router=Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/getallusers",getAllUsers)
router.post("/find",findUser)
router.get("/getuser/:userId",getUser)




export default router