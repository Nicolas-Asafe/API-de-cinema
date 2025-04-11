import {ServiceBuyCombo,ServiceListCombos,ServiceGetComboById} from '../services/combos.service.js'

async function BuyCombo(req,res){
    const [motive,result] = ServiceBuyCombo(req.body)

    result
    ?res.json({message:motive})
    :res.status(404).json({message:motive})
}
async function ListCombos(req,res){
    const [motive,result,data] = ServiceListCombos()
    res.json({message:motive,json:data})
}

export {ListCombos,BuyCombo}