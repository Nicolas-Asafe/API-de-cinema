import { Router } from "express";
import { BuyCombo,ListCombos } from "../controllers/combos.controller.js";
const ComboRouter = Router();

ComboRouter.get('/Combos',ListCombos);
ComboRouter.post('/Combos',BuyCombo);

export default ComboRouter