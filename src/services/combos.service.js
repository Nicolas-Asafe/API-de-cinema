import db from "../db.js";
import { VerifyBody } from "../../utils/conditialsTool.js";
import { VerifyIfUserExists } from "./users.service.js";
// Essas funções vão manusear os combos tanto de pipoca e etc

let verify

function ServiceListCombos(){
    return ['Combos listed with sucess',true,db.Combos]
}
function ServiceBuyCombo(body){
    console.log(body)
    verify = VerifyBody({body,type:'comboExists'})
    if(!verify[1]) return [verify[0],verify[1]]

    verify = VerifyBody({body,type:'userCredentials'})
    if(!verify[1]) return [verify[0],verify[1]]

    verify = VerifyBody({body,type:'userExists'})
    if(!verify[1]) return [verify[0],verify[1]]


    VerifyIfUserExists(body.NameUser,body.ID)[2].Itens.push(ServiceGetComboById(body.ID))
    return ['Combo added with sucess',true]
}

function ServiceGetComboById(ID){
    return db.Combos.find(c=>c.id === ID)
}

export {ServiceListCombos,ServiceGetComboById,ServiceBuyCombo}