import {ServiceCreateUser,ServiceDeleteUser,ServiceGetUsers,VerifyIfUserExists} from "../services/users.service.js";
//Controla os usuários
 
function getUsers(req,res){
    const [motive,data] = ServiceGetUsers()
    res.json({response:motive,Users:data})
    
}
function CreateUser(req,res){
    const [motive,result] = ServiceCreateUser(req.body)
    
    result
    ?res.json({response:motive})
    :res.status(404).json({response:motive})
}

function DeleteUser(req,res){
    const [motive,result] = ServiceDeleteUser(req.body)
    result
    ?res.json({response:motive})
    :res.status(404).json({response:motive})
}

function SelectUser(req,res){
    const [motive,result,data] = VerifyIfUserExists(req.body)
    result
    ?res.json({response:motive})
    :res.status(404).json({response:motive})
}
 
export {getUsers,CreateUser,DeleteUser,SelectUser}