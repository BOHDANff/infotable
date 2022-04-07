import { Router } from "express";
import FormController from "../controllers/FormController.js";

const formRouter = Router();

formRouter.get("", FormController.getAllForms);
formRouter.post("",  FormController.createForm);
formRouter.delete("/:id",  FormController.deleteForm);

export default formRouter;