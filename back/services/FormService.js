import Form from "../models/Form.js";

class FormService {
    async findAll() {
        const forms = await Form.find();
        return forms;
    }
    async create(form) {
        const createdForm = await Form.create(form);
        return createdForm;
    }
    async delete(id) {
        const form = await Form.findByIdAndDelete(id);
        return form;
    }
}
export default new FormService();