import { Router } from "express";
import FormController from "../controllers/FormController.js";
import {body} from "express-validator";

const formRouter = Router();

formRouter.get("", FormController.getAllForms);
formRouter.post("",
    body('name').isLength({ max: 20 }),
    body('phone').matches(/^([+]?[0-9]{10,14})?$/),
    body('age').isInt({max: 120}),
    FormController.createForm);
formRouter.delete("/:id",  FormController.deleteForm);

export default formRouter;