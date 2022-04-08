import {Router} from "express";
import TableItemController from "../controllers/TableItemController.js";
import {body} from "express-validator";

const TableItemRouter = Router();

TableItemRouter.get("", TableItemController.getAllTableItems);
TableItemRouter.post("",
    body('name').isLength({ max: 20 }),
    body('phone').matches(/^([+]?[0-9]{10,14})?$/),
    body('age').isInt({max: 120}),
    TableItemController.createForm);
TableItemRouter.delete("/:id",  TableItemController.deleteForm);

export default TableItemRouter;