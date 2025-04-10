// Essas funções vão manusear os usuários

import { VerfifyBody } from "../../utils/conditialsTool.js";
import db from "../db.js";
const users = db.users;
let countUsers = 0

function ServiceCreateUser(body){
    const verify = VerfifyBody({body,type:'userforcreate'})
    if(!verify[1]) return [verify[0],verify[1]]

    countUsers++
    users.push({Name:body.Name,ID:countUsers})
    return ['User created with sucess',true]
}

function ServiceGetUsers(){
    return ['Users listed with sucess',users]
}

function ServiceDeleteUser(body){
    let verify = VerfifyBody({body,type:'userforcreate'})
    if(!verify[1]) return [verify[0],verify[1]]
    verify = VerfifyBody({body,type:'userExists'})
    if(!verify[1]) return [verify[0],verify[1]]
    
    users.splice(users.findIndex(u=>u.Name === body.Name),1)
    return ['User deleted with sucess',true]
}

function VerifyIfUserExists(NameUser,ID){
    const userExists = users.find(u=>u.Name === NameUser || u.ID === ID)
    return userExists
    ? ['Usuário encontrado',true,userExists]
    : ['Usuário não encontrado',false]
}

function ServiceSelectUser(body){
    const verify = VerfifyBody({body,type:'userExists'})
    if(!verify[1]) return [verify[0],verify[1]]
    else{
        return ['User selected with sucess',true,verify[2]]
    }
}

export {ServiceCreateUser,ServiceGetUsers,ServiceDeleteUser,VerifyIfUserExists,ServiceSelectUser}