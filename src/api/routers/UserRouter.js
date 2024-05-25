import express from "express";
import { addUsers,getAllusers,getusers, login,} from "../controllers/UserController.js";


const UserRouter = express.Router();
UserRouter.get("/", getAllusers);
UserRouter.get("/:id", getusers);
UserRouter.post("/", addUsers);
UserRouter.post("/login", login);

export default UserRouter;