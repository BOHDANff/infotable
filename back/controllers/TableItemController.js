import FormService from "../services/TableItemService.js";
import {validationResult} from "express-validator";

class TableItemController {
    async getAllTableItems(req, res) {
        try {
            const tableItems = await FormService.findAll()
            res.json(tableItems)
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createForm(req, res) {
        try {
            const validationErrors = validationResult(req)
            if(!validationErrors.isEmpty()) {
                return res.status(400).json({ errors: validationErrors.array() });
            }
            const newTableItem = await FormService.create(req.body);
            res.json(newTableItem)
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteForm(req, res) {
        try {
            const deletedTableItem = await FormService.delete(req.params.id);
            res.json(deletedTableItem)
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
export default new TableItemController();