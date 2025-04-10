import {ServiceCreateUser,ServiceDeleteUser,ServiceGetUsers,ServiceSelectUser} from "../services/users.service.js";

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
    const [motive,result,data] = ServiceSelectUser(req.body)

    result
    ?res.json({response:motive})
    :res.status(404).json({response:motive})
}

export {getUsers,CreateUser,DeleteUser}