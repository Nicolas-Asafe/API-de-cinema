import { Router } from "express";
import { getUsers,CreateUser, DeleteUser } from "../controllers/users.controller.js";
const UserRouter = Router();

//rotas que controla os usuários

UserRouter.get('/Users',getUsers)
UserRouter.post('/Users',CreateUser)
UserRouter.delete('/Users',DeleteUser)

export default UserRouter