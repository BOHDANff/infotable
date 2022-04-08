import TableItem from "../models/TableItem.js";

class TableItemService {
    async findAll() {
        const tableItems = await TableItem.find();
        return tableItems;
    }
    async create(tableItem) {
        const createdTableItem = await TableItem.create(tableItem);
        return createdTableItem;
    }
    async delete(id) {
        const tableItem = await TableItem.findByIdAndDelete(id);
        return tableItem;
    }
}
export default new TableItemService();