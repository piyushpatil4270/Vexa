import {Router} from "express"

const router=Router()
import {getAllTasks,getTask,getUserTasks,createTask,addLog,taskStatistics} from "../controllers/Tasks.js"

router.get("/alltasks",getAllTasks)
router.post("/usertasks",getUserTasks)
router.post("/createtask",createTask)
router.get("/gettask/:projectId",getTask)
router.post("/addlog/:projectId",addLog)
router.get("/taskstats",taskStatistics)
export default router