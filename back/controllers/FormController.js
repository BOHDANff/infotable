import FormService from "../services/FormService.js";

class FormController {
    async getAllForms(req, res) {
        try {
            const forms = await FormService.findAll()
            res.json(forms)
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createForm(req, res) {
        try {
            const newForm = await FormService.create(req.body);
            res.json(newForm)
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteForm(req, res) {
        try {
            const deletedForm = await FormService.delete(req.params.id);
            res.json(deletedForm)
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
export default new FormController();